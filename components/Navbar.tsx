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

font-bold

"

>

Foxie

</Link>









<div

className="

flex

items-center

gap-5

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


href="/login"


className="

hover:text-blue-600

transition

"

>

Đăng nhập

</Link>









</div>







</div>







</nav>



)


}