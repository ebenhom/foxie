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

className="hover:text-blue-600"

>

Trang chủ

</Link>




<Link

href="/hot"

className="hover:text-blue-600"

>

🔥 Hot

</Link>




<Link

href="/category"

className="hover:text-blue-600"

>

📚 Thể loại

</Link>




<Link

href="/search"

className="hover:text-blue-600"

>

🔎 Tìm kiếm

</Link>





<AuthButton />





</nav>





</div>



</header>



)


}