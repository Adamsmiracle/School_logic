import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="h-full flex ">
            {/* LEFT */}
            <div className="w-[14%] h-screen min-w-2 md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
                <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
                <Image src="/logo.png" className="min-w-5" alt="logo"  width={32} height={32}/>
                <span className="hidden lg:block font-bold">SchoolLogic</span>
                </Link>
                <Menu />
            </div>
            {/* RIGHT */}
                <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-100 overflow-scroll flex flex-col  ">
                    <Navbar />
                    {children}
                </div> 
        </div>
    )
}
 

