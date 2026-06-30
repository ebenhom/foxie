"use client"

import {useState} from "react"


export default function ReaderNavbarToggle(){


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
shadow
rounded-full
px-4
py-2
"

>


{show ? "✕" : "☰"}


</button>





{

show && (


<nav

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
flex
gap-5
items-center
"

>


<a href="/" >

🏠 Trang chủ

</a>



<a href="/hot">

🔥 Hot

</a>



<a href="/category">

📚 Thể loại

</a>



</nav>


)

}



</>


)

}