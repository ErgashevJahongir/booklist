import { useForm } from "react-hook-form"
import { object, string } from "yup"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useYupValidationResolver } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

let validationSchema = object().shape({
    isbn: string().required("Enter book isbn"),
    title: string().required("Enter book title"),
    cover: string().required("Enter book cover"),
    author: string().required("Enter book author"),
    pages: string().required("Enter book pages"),
    published: string().required("Enter book published"),
})

export default function MainPage() {
    const { toast } = useToast()
    const resolver = useYupValidationResolver(validationSchema)
    const form = useForm({
        resolver: resolver,
    })

    const onSubmit = async values => {
        try {
            console.log(values)
        } catch (error) {
            console.error(error, "order")
            toast({
                variant: "destructive",
                description: "Malumotlarni kiritishda xatolik bo'ldi!",
            })
        }
    }

    return (
        <section className="container mx-auto my-9 px-5">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <h2 className="text-3xl font-bold text-white md:text-[36px]">
                    You’ve got <span className="text-indigo-600 ">7 book</span>
                </h2>
                <div className="flex items-center justify-between gap-4 md:justify-center md:gap-6">
                    <Input
                        className="w-full border-transparent shadow md:w-60"
                        placeholder="Enter your name"
                    />
                    <Dialog>
                        <DialogTrigger>
                            <Button
                                // onClick={goHome}
                                className="flex items-center gap-3 rounded bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:opacity-100 md:px-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-4 w-4">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                                Create a book
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="my-auto gap-0 rounded-xl md:h-auto">
                            <DialogHeader className="mb-[28px]">
                                <DialogTitle className="text-lg font-semibold md:text-xl">
                                    Are you sure absolutely sure?
                                </DialogTitle>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="h-[400px] overflow-y-auto px-1 md:h-[520px]">
                                        <div>
                                            <FormField
                                                control={form.control}
                                                name="title"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base">
                                                            Title
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter your title..."
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="mt-2 md:mt-4">
                                            <FormField
                                                control={form.control}
                                                name="author"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base">
                                                            Author
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter your author..."
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="mt-2 md:mt-4">
                                            <FormField
                                                control={form.control}
                                                name="cover"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base">
                                                            Cover
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter your cover..."
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="mt-2 md:mt-4">
                                            <FormField
                                                control={form.control}
                                                name="published"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base">
                                                            Published
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter your published..."
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="mt-2 md:mt-4">
                                            <FormField
                                                control={form.control}
                                                name="pages"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base">
                                                            Pages
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter your pages..."
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="mt-2 md:mt-4">
                                            <FormField
                                                control={form.control}
                                                name="isbn"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base">
                                                            ISBN
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter your isbn..."
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-[28px] flex w-full items-center gap-3">
                                        <DialogClose asChild>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="w-full rounded border-indigo-600 px-5 py-2 font-medium text-indigo-600 md:px-10">
                                                Close
                                            </Button>
                                        </DialogClose>
                                        <Button
                                            // onClick={goHome}
                                            className="w-full rounded bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-500 hover:opacity-100 md:px-10">
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <p className="mt-3 text-lg text-white md:text-xl">Your task today</p>
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="group relative rounded-xl bg-white p-6 md:p-8">
                    <h4 className="mb-[6px] text-base font-semibold text-[#151515]">
                        Raspberry Pi User Guide
                    </h4>
                    <p className="text-sm text-[#333]">
                        Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius
                        vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm font-medium text-[#333]">Eben Upton: 2012-year</p>
                        <Badge className="bg-[#EFE6FD] px-3 py-[2px] text-xs text-[#9654F4]">
                            211 pages
                        </Badge>
                    </div>
                    <div className="absolute -right-8 top-3 hidden flex-col items-center gap-[2px] group-hover:flex">
                        <Button className="h-8 rounded-md rounded-bl-none bg-red-500 p-2 leading-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="16"
                                className="h-4 w-4"
                                viewBox="0 0 17 16"
                                fill="none">
                                <path
                                    d="M11.3334 3.99998V3.46665C11.3334 2.71991 11.3334 2.34654 11.1881 2.06133C11.0603 1.81044 10.8563 1.60647 10.6054 1.47864C10.3202 1.33331 9.94682 1.33331 9.20008 1.33331H8.13341C7.38668 1.33331 7.01331 1.33331 6.72809 1.47864C6.47721 1.60647 6.27324 1.81044 6.14541 2.06133C6.00008 2.34654 6.00008 2.71991 6.00008 3.46665V3.99998M7.33341 7.66665V11M10.0001 7.66665V11M2.66675 3.99998H14.6667M13.3334 3.99998V11.4666C13.3334 12.5868 13.3334 13.1468 13.1154 13.5746C12.9237 13.951 12.6177 14.2569 12.2414 14.4487C11.8136 14.6666 11.2535 14.6666 10.1334 14.6666H7.20008C6.07998 14.6666 5.51992 14.6666 5.0921 14.4487C4.71578 14.2569 4.40982 13.951 4.21807 13.5746C4.00008 13.1468 4.00008 12.5868 4.00008 11.4666V3.99998"
                                    stroke="#FEFEFE"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                        <Button className="h-8 rounded-md rounded-tl-none bg-indigo-600 p-2 leading-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="16"
                                className="h-4 w-4"
                                viewBox="0 0 17 16"
                                fill="none">
                                <path
                                    d="M14.6667 12L14 12.7294C13.6464 13.1161 13.1668 13.3333 12.6668 13.3333C12.1668 13.3333 11.6873 13.1161 11.3337 12.7294C10.9796 12.3434 10.5001 12.1267 10.0002 12.1267C9.50033 12.1267 9.02084 12.3434 8.66673 12.7294M2.66675 13.3333H3.78311C4.10923 13.3333 4.27229 13.3333 4.42574 13.2965C4.56179 13.2638 4.69185 13.21 4.81115 13.1369C4.9457 13.0544 5.061 12.9391 5.2916 12.7085L13.6668 4.33334C14.219 3.78106 14.219 2.88563 13.6668 2.33334C13.1145 1.78106 12.219 1.78106 11.6668 2.33334L3.29159 10.7085C3.06099 10.9391 2.94568 11.0544 2.86323 11.189C2.79012 11.3083 2.73625 11.4383 2.70359 11.5744C2.66675 11.7278 2.66675 11.8909 2.66675 12.217V13.3333Z"
                                    stroke="#FEFEFE"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
