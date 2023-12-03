import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import error404 from "../assets/page404.png"

export default function Error404() {
    const navigate = useNavigate()

    function goHome() {
        navigate("/")
    }

    const refreshPage = () => {
        navigate(0)
    }

    return (
        <div className="relative flex h-screen items-center justify-center text-center">
            <div className="bg-image"></div>
            <div className="relative z-10 mx-5">
                <img src={error404} alt="Error 404" />
                <div className="mt-8 flex w-full items-center justify-center gap-2 md:mt-16 md:gap-3">
                    <Button
                        onClick={goHome}
                        className="rounded bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-500 hover:opacity-100 md:px-10">
                        Go Home Page
                    </Button>
                    <Button
                        variant="outline"
                        onClick={refreshPage}
                        className="rounded border-indigo-600 px-5 py-2 font-medium text-indigo-600 md:px-10">
                        Reload Page
                    </Button>
                </div>
            </div>
        </div>
    )
}
