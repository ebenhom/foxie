"use client"


import Link from "next/link"

import {usePathname} from "next/navigation"





export default function Navbar(){



const pathname = usePathname()



const isReading =
pathname.startsWith("/chap/")





if(isReading){

return null

}






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

gap-6

items-center

"

>





<Link


href="/"


className="hover:text-blue-600"

>

Trang chủ

</Link>







<Link


href="/login"


className="hover:text-blue-600"

>

Đăng nhập

</Link>







</div>







</div>






</nav>



)



}