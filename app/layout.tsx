import type { Metadata } from "next"

import "./globals.css"

import AuthProvider from "@/components/AuthProvider"

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


<html lang="vi" suppressHydrationWarning>


<body>


<AuthProvider>







<Navbar />








{children}








</AuthProvider>






</body>





</html>


)


}