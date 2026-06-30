"use client"


import Link from "next/link"

import {usePathname} from "next/navigation"

import AuthButton from "@/components/AuthButton"



export default function Navbar(){


const pathname = usePathname()



// đang đọc truyện thì ẩn navbar
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

sm:text-3xl

font-bold

text-black

dark:text-white

hover:text-blue-600

transition

"

>

Foxie

</Link>




<nav

className="

flex

flex-wrap

items-center

justify-end

gap-3

sm:gap-6

text-sm

sm:text-base

"

>


<Link

href="/"

className="

text-black

dark:text-white

hover:text-blue-600

transition

"

>

Trang chủ

</Link>



<Link

href="/hot"

className="

text-black

dark:text-white

hover:text-blue-600

transition

"

>

🔥 Hot

</Link>



<Link

href="/category"

className="

text-black

dark:text-white

hover:text-blue-600

transition

"

>

📚 Thể loại

</Link>



<Link

href="/search"

className="

text-black

dark:text-white

hover:text-blue-600

transition

"

>

🔎 Tìm kiếm

</Link>



<AuthButton />


</nav>


</div>


</header>


)


}