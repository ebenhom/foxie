"use client"


import Link from "next/link"

import {usePathname} from "next/navigation"

import AuthButton from "@/components/AuthButton"



export default function Navbar(){


const pathname = usePathname()



if(pathname.startsWith("/chap/")){

return null

}



return (

<header

className="

sticky

top-0

z-50

w-full

bg-white

dark:bg-zinc-900

border-b

dark:border-zinc-700

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

font-bold

text-gray-900

dark:text-white

"

>

Foxie

</Link>



<nav

className="

flex

gap-4

items-center

"

>


<Link href="/" className="dark:text-white">

Trang chủ

</Link>


<Link href="/hot" className="dark:text-white">

🔥 Hot

</Link>


<Link href="/category" className="dark:text-white">

📚 Thể loại

</Link>


<Link href="/search" className="dark:text-white">

🔎 Tìm kiếm

</Link>



<AuthButton/>


</nav>


</div>


</header>

)

}