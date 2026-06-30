import type { Metadata } from "next"

import "./globals.css"

import AuthProvider from "@/components/AuthProvider"





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





{children}





</AuthProvider>






</body>





</html>



)


}