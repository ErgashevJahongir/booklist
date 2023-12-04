import { lazy } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./layout"

const Login = lazy(() => {
    return import("./pages/Login")
})
const MainPage = lazy(() => {
    return import("./pages/MainPage")
})
const Register = lazy(() => {
    return import("./pages/Register")
})
const Error404 = lazy(() => {
    return import("./pages/Error404")
})
const ErrorPage = lazy(() => {
    return import("./pages/ErrorPage")
})

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "*",
        element: <Error404 />,
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
