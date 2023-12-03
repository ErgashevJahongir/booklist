import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { useAuthStore } from "@/hooks/useAuthStore"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import avatar from "../assets/avatar.png"
import useWindowWidth from "@/hooks/useWindowWidth"

export default function Layout() {
    const navigate = useNavigate()
    const width = useWindowWidth()
    const { user } = useAuthStore(state => state)

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [navigate, user])

    const handleLogOut = () => {
        localStorage.removeItem("Book-list-user")
        localStorage.removeItem("Book-list")
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    return (
        <>
            <header className="container relative z-10 mx-auto px-5 py-3 md:px-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 md:gap-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M23.2965 13.8285C23.4013 13.933 23.4844 14.0571 23.5411 14.1938C23.5978 14.3305 23.627 14.477 23.627 14.625C23.627 14.773 23.5978 14.9195 23.5411 15.0562C23.4844 15.1928 23.4013 15.317 23.2965 15.4215L16.5465 22.1715C16.442 22.2763 16.3179 22.3594 16.1812 22.4161C16.0445 22.4728 15.898 22.502 15.75 22.502C15.602 22.502 15.4555 22.4728 15.3188 22.4161C15.1822 22.3594 15.058 22.2763 14.9535 22.1715L11.5785 18.7965C11.4739 18.6919 11.3909 18.5677 11.3343 18.4311C11.2777 18.2944 11.2486 18.1479 11.2486 18C11.2486 17.8521 11.2777 17.7056 11.3343 17.5689C11.3909 17.4323 11.4739 17.3081 11.5785 17.2035C11.6831 17.0989 11.8073 17.0159 11.944 16.9593C12.0806 16.9027 12.2271 16.8736 12.375 16.8736C12.5229 16.8736 12.6694 16.9027 12.8061 16.9593C12.9427 17.0159 13.0669 17.0989 13.1715 17.2035L15.75 19.7842L21.7035 13.8285C21.808 13.7237 21.9322 13.6406 22.0688 13.5839C22.2055 13.5272 22.352 13.498 22.5 13.498C22.648 13.498 22.7945 13.5272 22.9312 13.5839C23.0679 13.6406 23.192 13.7237 23.2965 13.8285Z"
                                    fill="white"
                                />
                                <path
                                    d="M9.9135 7.5195C12.1623 5.5803 15.0305 4.50931 18 4.5C24.0525 4.5 29.0768 9 29.6235 14.8027C33.2055 15.309 36 18.3082 36 21.9893C36 26.0302 32.6295 29.25 28.5457 29.25H8.50725C3.843 29.25 0 25.5735 0 20.9655C0 16.9987 2.8485 13.7137 6.6195 12.8812C6.94125 10.9395 8.19 9.0045 9.9135 7.5195ZM11.3827 9.22275C9.6795 10.692 8.7885 12.4628 8.7885 13.8488V14.8568L7.78725 14.967C4.644 15.3112 2.25 17.892 2.25 20.9655C2.25 24.2663 5.0175 27 8.50725 27H28.5457C31.455 27 33.75 24.723 33.75 21.9893C33.75 19.2532 31.455 16.9762 28.5457 16.9762H27.4207V15.8512C27.423 10.8563 23.238 6.75 18 6.75C15.5697 6.75971 13.2229 7.63748 11.3827 9.225V9.22275Z"
                                    fill="#4f46e5"
                                />
                            </svg>
                            <h3 className="text-lg font-bold text-indigo-600">
                                Books <span className="text-white">List</span>
                            </h3>
                        </div>
                        <Input
                            className="hidden w-60 border-transparent bg-transparent text-white ring-offset-transparent placeholder:text-gray-300 focus-visible:bg-white focus-visible:text-[#151515] focus-visible:ring-transparent focus-visible:placeholder:text-gray-500 sm:block"
                            placeholder="Search for any training you want"
                        />
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                        {width < 1024 ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                                    stroke="#151515"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    className="gap-2 bg-transparent px-0 py-1 hover:bg-transparent focus-visible:ring-transparent md:py-2"
                                    title="Profil">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={avatar}
                                        alt="Avatar"
                                    />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40">
                                <DropdownMenuLabel>Mening sahifam</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        onClick={() => navigate("/profile")}
                                        className="flex items-center gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-4 w-4">
                                            <path
                                                fillRule="evenodd"
                                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={handleLogOut}
                                    className="flex items-center gap-3 text-red-600 hover:!text-red-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-4 w-4">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
            <div className="bg-image"></div>
            <main className="relative z-10">
                <Outlet />
            </main>
        </>
    )
}
