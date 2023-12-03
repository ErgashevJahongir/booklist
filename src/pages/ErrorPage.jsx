import { useNavigate, useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const navigate = useNavigate()
    const error = useRouteError()

    function goHome() {
        navigate("/")
    }

    return (
        <div id="error-page" className="flex h-screen items-center justify-center text-center">
            <div>
                <h1 className="text-4xl font-semibold">Uxxx!</h1>
                <p className="mb-5 mt-5 text-2xl font-semibold">Shu yerda nimadir xato ketdi.</p>
                <p className="text-xl font-semibold">
                    <i>{error.statusText || error.message}</i>
                </p>
                <button
                    onClick={goHome}
                    className="mt-5 rounded bg-blue-500 px-10 py-2 font-bold text-white hover:bg-blue-700">
                    Bosh sahifaga qaytish
                </button>
            </div>
        </div>
    )
}
