"use client"

import Link from "next/link"
import { useState } from "react"


export default function Navbar(){


const [open,setOpen]=useState(false)



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

py-4

flex

items-center

justify-between

gap-4

"

>


{/* logo */}

<Link

href="/"

className="

font-bold

text-xl

whitespace-nowrap

"

>

📖 Foxie

</Link>





{/* mobile button */}

<button

onClick={()=>setOpen(!open)}

className="

sm:hidden

border

rounded-lg

px-3

py-2

"

>

☰

</button>







{/* desktop */}

<div

className="

hidden

sm:flex

items-center

gap-6

"

>


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




<form action="/search">


<input


name="q"


placeholder="🔍 Tìm kiếm..."


className="

border

rounded-xl

px-4

py-2

w-64

"

 />


</form>



</div>




</div>






{/* mobile menu */}

{

open && (


<div

className="

sm:hidden

px-4

pb-4

flex

flex-col

gap-4

"

>


<Link

href="/hot"

>

🔥 Hot

</Link>



<Link

href="/category"

>

📚 Thể loại

</Link>




<form action="/search">


<input


name="q"


placeholder="🔍 Tìm kiếm..."


className="

border

rounded-xl

px-4

py-2

w-full

"

 />


</form>



</div>


)


}




</nav>


)


}