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

font-bold

text-gray-900

hover:text-blue-600

transition

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




<Link

href="/"

className="

text-gray-900

hover:text-blue-600

transition

"

>

Trang chủ

</Link>





<Link

href="/hot"

className="

text-gray-900

hover:text-blue-600

transition

"

>

🔥 Hot

</Link>





<Link

href="/category"

className="

text-gray-900

hover:text-blue-600

transition

"

>

📚 Thể loại

</Link>





<Link

href="/search"

className="

text-gray-900

hover:text-blue-600

transition

"

>

🔎 Tìm kiếm

</Link>





<AuthButton/>





</nav>


</div>


</header>


)


}