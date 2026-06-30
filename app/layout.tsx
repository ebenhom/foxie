import type { Metadata } from "next"

import "./globals.css"

import AuthProvider from "@/components/AuthProvider"

import AuthButton from "@/components/AuthButton"

import Link from "next/link"

import Navbar from "@/components/Navbar"





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





<Navbar />





<header

className="

sticky

top-0

z-50

w-full

bg-white

border-b

shadow-sm

"


>


<div

className="

max-w-6xl

mx-auto

px-4

sm:px-8

py-4

flex

items-center

justify-between

gap-4

"

>









<Link


href="/"


className="

text-2xl

sm:text-3xl

font-bold

tracking-wide

hover:text-blue-600

transition

whitespace-nowrap

"

>


Foxie


</Link>









<nav

className="

flex

items-center

gap-3

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

whitespace-nowrap

"

>

Trang chủ

</Link>









<Link

href="/hot"


className="

hover:text-blue-600

transition

whitespace-nowrap

"

>

🔥 Hot

</Link>









<Link

href="/category"


className="

hover:text-blue-600

transition

whitespace-nowrap

"

>

📚 Thể loại

</Link>









<Link

href="/search"


className="

hover:text-blue-600

transition

whitespace-nowrap

"

>

🔎 Tìm kiếm

</Link>









<AuthButton/>









</nav>









</div>







</header>









{children}







<Navbar />







</AuthProvider>






</body>





</html>


)


}