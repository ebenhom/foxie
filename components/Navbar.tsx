"use client"


import Link from "next/link"





export default function Navbar(){



return (



<nav

className="

w-full

border-b

bg-white

"

>



<div

className="

max-w-6xl

mx-auto

px-4

sm:px-10

py-5

flex

items-center

justify-between

gap-5

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

"

>







<Link


href="/"


className="

hover:text-blue-600

transition

px-3

py-2

rounded-lg

hover:bg-gray-100

"

>

Trang chủ

</Link>









<Link


href="/login"


className="

hover:text-blue-600

transition

px-3

py-2

rounded-lg

hover:bg-gray-100

"

>

Đăng nhập

</Link>









</div>







</div>







</nav>



)


}