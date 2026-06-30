"use client"

import {useState} from "react"

import Link from "next/link"


export default function ReaderToolbar(){


const [show,setShow]=useState(true)



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

"Ẩn menu"

:

"Hiện menu"

}


</button>





{

show && (


<div

className="
fixed
top-16
left-0
right-0
z-40
bg-white
border-b
shadow-sm
"

>


<div

className="
max-w-4xl
mx-auto
px-4
py-3
flex
flex-wrap
gap-3
items-center
justify-center
"

>


<Link

href="/"

className="
border
px-3
py-2
rounded-lg
text-sm
"

>

← Trang chủ

</Link>



<button

className="
border
px-3
py-2
rounded-lg
text-sm
"

onClick={()=>{

window.scrollTo({

top:0,

behavior:"smooth"

})

}}

>

↑ Đầu trang

</button>


</div>


</div>


)


}



</>


)

}