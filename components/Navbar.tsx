"use client"


import Link from "next/link"

import {usePathname} from "next/navigation"

import AuthButton from "@/components/AuthButton"





export default function Navbar(){



const pathname = usePathname()


const isReading =
pathname.startsWith("/chap/")



if(isReading){

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

text-black

dark:text-white

min-h-screen

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

text-gray-900

dark:text-white

hover:text-blue-600

dark:hover:text-blue-400

transition

whitespace-nowrap

"

>

Foxie

</Link>






<nav

className="

flex

flex-wrap

items-center

justify-center

gap-3

sm:gap-6

text-sm

sm:text-base

"

>



<Link

href="/"

className="text-gray-900

dark:text-white

hover:text-blue-600

dark:hover:text-blue-400"

>

Trang chủ

</Link>




<Link

href="/hot"

className="text-gray-900

dark:text-white

hover:text-blue-600

dark:hover:text-blue-400"

>

🔥 Hot

</Link>




<Link

href="/category"

className="text-gray-900

dark:text-white

hover:text-blue-600

dark:hover:text-blue-400"

>

📚 Thể loại

</Link>




<Link

href="/search"

className="text-gray-900

dark:text-white

hover:text-blue-600

dark:hover:text-blue-400"

>

🔎 Tìm kiếm

</Link>





<AuthButton />





</nav>





</div>



</header>



)


}