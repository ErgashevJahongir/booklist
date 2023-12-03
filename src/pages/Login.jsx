import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { object, string } from "yup"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useYupValidationResolver } from "@/lib/utils"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { useAuthStore } from "@/hooks/useAuthStore"

const validationSchema = object().shape({
    key: string().required("Enter your username"),
    secret: string().required("Enter your password"),
})

export default function Login() {
    const { user } = useAuthStore(state => state)
    const navigate = useNavigate()
    const { toast } = useToast()
    const resolver = useYupValidationResolver(validationSchema)
    const form = useForm({
        resolver: resolver,
    })

    const onSubmit = async values => {
        try {
            console.log(values)
        } catch (error) {
            console.error(error)
            toast({
                variant: "destructive",
                description: "Username or password was entered incorrectly!",
            })
        }
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])

    return (
        <section className="relative flex min-h-screen items-center justify-center py-10">
            <div className="bg-image"></div>
            <Card className="relative z-10 mx-5 w-[430px]">
                <CardHeader className="mb-2 mt-3 md:mb-3 md:mt-6">
                    <CardTitle className="text-center text-3xl font-bold lg:text-[36px]">
                        Sign in
                    </CardTitle>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardContent className="grid gap-6 md:gap-9 md:px-7">
                            <div className="grid grid-cols-1 gap-3 md:gap-4">
                                <Button
                                    className="flex gap-3 rounded border-black py-[10px] font-medium md:gap-4"
                                    variant="outline">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M20.16 12.1932C20.16 11.5905 20.1059 11.0109 20.0055 10.4546H12V13.7425H16.5745C16.3775 14.805 15.7786 15.7053 14.8784 16.308V18.4407H17.6254C19.2327 16.9609 20.16 14.7819 20.16 12.1932Z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 20.5C14.295 20.5 16.2191 19.7389 17.6255 18.4407L14.8784 16.308C14.1173 16.818 13.1436 17.1193 12 17.1193C9.78612 17.1193 7.91226 15.6241 7.24384 13.615H4.40407V15.8173C5.80271 18.5953 8.67726 20.5 12 20.5Z"
                                            fill="#34A853"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7.24385 13.6151C7.07385 13.105 6.97726 12.5603 6.97726 12C6.97726 11.4398 7.07385 10.895 7.24385 10.385V8.18277H4.40407C3.82839 9.33027 3.49998 10.6285 3.49998 12C3.49998 13.3716 3.82839 14.6698 4.40407 15.8173L7.24385 13.6151Z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 6.88072C13.2479 6.88072 14.3684 7.30958 15.2493 8.15186L17.6873 5.7139C16.2152 4.3423 14.2911 3.50003 12 3.50003C8.67726 3.50003 5.80271 5.40481 4.40407 8.18277L7.24384 10.385C7.91225 8.37595 9.78612 6.88072 12 6.88072Z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    Continue with Google
                                </Button>
                                <Button
                                    className="flex gap-3 rounded border-black font-medium md:gap-4"
                                    variant="outline">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.5 20.9C6.25 20.15 3 16.45 3 12C3 7.05 7.05 3 12 3C16.95 3 21 7.05 21 12C21 16.45 17.75 20.15 13.5 20.9L13 20.5H11L10.5 20.9Z"
                                            fill="url(#paint0_linear_6120_145)"
                                        />
                                        <path
                                            d="M15.5 14.5L15.9 12H13.5V10.25C13.5 9.55 13.75 9 14.85 9H16V6.7C15.35 6.6 14.65 6.5 14 6.5C11.95 6.5 10.5 7.75 10.5 10V12H8.24999V14.5H10.5V20.85C11 20.95 11.5 21 12 21C12.5 21 13 20.95 13.5 20.85V14.5H15.5Z"
                                            fill="white"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_6120_145"
                                                x1="12"
                                                y1="20.377"
                                                x2="12"
                                                y2="3"
                                                gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0062E0" />
                                                <stop offset="1" stopColor="#19AFFF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Continue with Facebook
                                </Button>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-black" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="text-muted-foreground bg-white px-2">OR</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="key"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your username</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        {...field}
                                                        placeholder="Enter your username"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="secret"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        {...field}
                                                        placeholder="Enter your password"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="mb-2 pb-0 md:mb-3">
                            <Button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-500">
                                Sign in
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
                <p className="mb-8 mt-1 text-center text-sm text-gray-700 md:mb-12 md:text-base">
                    Are you not registered?{" "}
                    <Link to="/register" className="text-indigo-600 no-underline hover:underline">
                        Go to sign up.
                    </Link>
                </p>
            </Card>
        </section>
    )
}
