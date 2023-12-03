import axios from "axios"
import httpStatusCodes from "http-status-codes"

const User = localStorage.getItem("Book-list-user")
const BASE_URL = import.meta.env.VITE_API_KEY

const instance = axios.create({
    baseURL: `${BASE_URL}/`,
    headers: {
        "Content-Type": "application/json",
    },
})

instance.interceptors.request.use(config => {
    config.headers = config.headers ?? {}
    config.headers.Key = `${User.key}`
    return config
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

            if (error?.response?.status === 401) {
                if (localStorage.getItem("Book-list-user")) {
                    localStorage.removeItem("Book-list-user")
                }
                window.location.reload()
            }
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
