import type { Metadata } from "next"

import "./globals.css"

import AuthProvider from "@/components/AuthProvider"

import AuthButton from "@/components/AuthButton"

import Link from "next/link"





export const metadata:Metadata={

title:"Foxie",

description:"Đọc truyện online"

}









export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode

}>) {









return (


<html lang="vi">


<body>


<AuthProvider>





<header

className="

sticky

top-0

z-50

bg-white

border-b

shadow-sm

px-4

sm:px-8

py-5

"

>


<div

className="

max-w-6xl

mx-auto

flex

items-center

justify-between

gap-5

"

>









<Link


href="/"


className="

text-3xl

font-bold

tracking-wide

hover:text-blue-600

transition

"

>


Foxie


</Link>









<div

className="

flex

items-center

gap-4

sm:gap-6

text-sm

sm:text-base

"

>









<Link


href="/"


className="

hover:text-blue-600

transition

"

>


Trang chủ


</Link>









<Link


href="/hot"


className="

hover:text-blue-600

transition

"

>


🔥 Hot


</Link>









<Link


href="/category"


className="

hover:text-blue-600

transition

"

>


📚 Thể loại


</Link>









<Link


href="/search"


className="

hover:text-blue-600

transition

"

>


🔎 Tìm kiếm


</Link>









<AuthButton/>









</div>









</div>







</header>









{children}








</AuthProvider>






</body>





</html>



)


}