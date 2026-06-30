"use client"


import {useEffect,useState} from "react"



export default function ReaderSetting(){



const [open,setOpen]=useState(false)

const [dark,setDark]=useState(false)

const [size,setSize]=useState(18)





useEffect(()=>{


const savedDark =
localStorage.getItem("reader-dark")


const savedSize =
localStorage.getItem("reader-size")



if(savedDark==="true"){

setDark(true)

}



if(savedSize){

setSize(Number(savedSize))

}



},[])







useEffect(()=>{



document.documentElement.style.setProperty(

"--reader-size",

`${size}px`

)





if(dark){

document.body.classList.add(
"reader-dark"
)


}else{


document.body.classList.remove(
"reader-dark"
)


}



localStorage.setItem(

"reader-dark",

String(dark)

)



localStorage.setItem(

"reader-size",

String(size)

)



},[dark,size])







return (


<div

className="
fixed
right-4
bottom-4
z-50
"

>



<button


onClick={()=>setOpen(!open)}


className="
border
rounded-full
p-3
bg-white
shadow
"

>


⚙️


</button>







{


open && (



<div


className="

absolute

bottom-16

right-0

w-70

max-w-[90vw]

border

rounded-xl

bg-white

shadow-lg

p-5

"

>




<h3

className="
font-bold
mb-4
"

>

Cài đặt đọc

</h3>









<button


onClick={()=>setDark(!dark)}


className="

border

px-3

py-2

rounded-xl

mb-5

w-full

"

>



{


dark

?

"☀️ Chế độ sáng"

:

"🌙 Chế độ tối"

}


</button>







<div>


<p

className="
mb-3
"

>


Cỡ chữ: {size}px


</p>







<div

className="
flex
items-center
gap-3
"

>



<button

onClick={()=>setSize(Math.max(14,size-1))}

className="
border
px-3
rounded
"

>

A-

</button>





<input


type="range"


min="14"


max="32"


value={size}


onChange={e=>

setSize(Number(e.target.value))

}



/>





<button


onClick={()=>setSize(Math.min(32,size+1))}


className="
border
px-3
rounded
"

>

A+

</button>



</div>





</div>







</div>


)


}





</div>



)


}