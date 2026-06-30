"use client"


import Link from "next/link"

import {usePathname} from "next/navigation"

import AuthButton from "@/components/AuthButton"

import {useState} from "react"





export default function Navbar(){


const pathname = usePathname()


const isReading =
pathname.startsWith("/chap/")



const [show,setShow] = useState(false)





return (


<>


{


isReading && (


<button


onClick={()=>setShow(!show)}


className="

fixed

top-4

right-4

z-100

bg-white

border

rounded-full

px-4

py-2

shadow

"


>


☰


</button>


)

}








{


(!isReading || show) && (



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

justify-center

gap-4

text-sm

sm:text-base

"

>



<Link href="/">

Trang chủ

</Link>



<Link href="/hot">

🔥 Hot

</Link>



<Link href="/category">

📚 Thể loại

</Link>



<Link href="/search">

🔎 Tìm kiếm

</Link>



<AuthButton />



</nav>









</div>



</header>



)

}






</>


)

}