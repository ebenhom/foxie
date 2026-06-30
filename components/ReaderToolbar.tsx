"use client"


import {useState} from "react"

import ReaderSetting from "./ReaderSetting"



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

show ? "✕" : "☰"

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


<h2 className="
font-bold
text-xl
mb-4
">

Cài đặt đọc

</h2>


<ReaderSetting />


</div>


)

}


</>


)

}