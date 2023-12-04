import axios from "axios"
import httpStatusCodes from "http-status-codes"
import CryptoJS from "crypto-js"

const User = JSON.parse(localStorage.getItem("Book-list-user"))
const BASE_URL = import.meta.env.VITE_API_KEY

const instance = axios.create({
    baseURL: `${BASE_URL}/`,
    headers: {
        "Content-Type": "application/json",
    },
})

instance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config ?? {}
        if (
            (error.response?.status === httpStatusCodes.FORBIDDEN ||
                error.response?.status === httpStatusCodes.UNAUTHORIZED) &&
            !originalRequest.isRetry
        ) {
            originalRequest.isRetry = true

            // if (error?.response?.status === 401) {
            //     if (localStorage.getItem("Book-list-user")) {
            //         localStorage.removeItem("Book-list-user")
            //     }
            //     window.location.reload()
            // }
            return instance.request(originalRequest)
        }
        return Promise.reject(error)
    },
)
export default instance

export const signInRequest = async body => {
    const res = await axios.post(`${BASE_URL}/signup`, body)
    return res.data
}

export const createBook = async values => {
    const res = await instance.post("/books", values, {
        headers: {
            Key: `${User?.state?.user?.key}`,
            Sign: CryptoJS.MD5(
                `POST/books${JSON.stringify(values)}${User?.state?.user?.secret}`,
            ).toString(),
        },
    })
    return res.data
}

export const getBooks = async () => {
    const res = await instance.get("/books", {
        headers: {
            Key: `${User?.state?.user?.key}`,
            Sign: CryptoJS.MD5(`GET/books${User?.state?.user?.secret}`).toString(),
        },
    })
    return res.data
}

export const searchBook = async title => {
    const res = await instance.get(`/books/${title}`, {
        headers: {
            Key: `${User?.state?.user?.key}`,
            Sign: CryptoJS.MD5(`GET/books/${title}${User?.state?.user?.secret}`).toString(),
        },
    })
    return res.data
}

export const editBook = async values => {
    console.log(`PATCH/books/${values?.id}${User?.state?.user?.secret}`)
    const res = await instance.patch(`/books/${values?.id}`, values, {
        headers: {
            Key: `${User?.state?.user?.key}`,
            Sign: CryptoJS.MD5(
                `PATCH/books/${JSON.stringify(values?.id)}${JSON.stringify({
                    book: values,
                    status: 1,
                })}${User?.state?.user?.secret}`,
            ).toString(),
        },
    })
    return res.data
}

export const deleteBook = async id => {
    console.log(`DELETE/books/${id}${User?.state?.user?.secret}`)
    const res = await instance.delete(`/books/${id}`, {
        headers: {
            Key: `${User?.state?.user?.key}`,
            Sign: CryptoJS.MD5(
                `DELETE/books/${JSON.stringify(id)}${User?.state?.user?.secret}`,
            ).toString(),
        },
    })
    return res.data
}
