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

px-8

py-5

flex

justify-between

items-center

"


>







<div

className="

flex

items-center

gap-8

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









<Link


href="/"


className="

px-4

py-2

rounded-lg

hover:bg-gray-100

transition

"


>


Trang chủ


</Link>





</div>








<AuthButton/>








</header>








{children}







</AuthProvider>






</body>





</html>



)


}