"use client"


import {useState} from "react"

import Link from "next/link"







export default function ReaderToolbar(){



const [show,setShow]=useState(false)







return (



<>







<button


onClick={()=>setShow(!show)}


className="

fixed

top-4

right-4

z-50

bg-white

border

rounded-full

px-4

py-2

shadow

"

>



{

show

?

"✕"

:

"☰"

}



</button>













{

show && (



<div


className="

fixed

top-0

left-0

right-0

z-40

bg-white

border-b

shadow

p-5

"

>





<div

className="

flex

justify-between

items-center

"

>









<Link

href="/"

className="

font-bold

text-xl

"

>

Foxie

</Link>





<Link

href="/"

className="..."

>

← Trang chủ

</Link>





<div

className="

flex

gap-5

"

>











<Link

href="/login"

className="

hover:text-blue-600

"

>

Đăng nhập

</Link>








</div>









</div>









</div>



)



}






</>



)



}