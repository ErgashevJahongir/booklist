import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import App from "./App.jsx"
import Loading from "./components/Loading.jsx"
import { Toaster } from "./components/ui/toaster.jsx"
import "./index.css"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Suspense fallback={<Loading />}>
            <QueryClientProvider client={queryClient}>
                <App />
                <Toaster />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Suspense>
    </React.StrictMode>,
)
