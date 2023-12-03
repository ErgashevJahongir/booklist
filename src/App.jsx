import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import MainPage from "./pages/MainPage"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./layout"
import Register from "./pages/Register"
import Error404 from "./pages/Error404"

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
