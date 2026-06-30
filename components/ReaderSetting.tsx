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

setSize(
Number(savedSize)
)

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



<div className="fixed right-5 bottom-5">





<button


onClick={()=>setOpen(!open)}


className="border rounded-full p-3 bg-white"


>


⚙️


</button>








{


open && (



<div className="absolute bottom-14 right-0 border p-5 rounded bg-white w-64">



<h3 className="font-bold mb-4">

Cài đặt đọc

</h3>







<div className="mb-4">



<button


onClick={()=>setDark(!dark)}


className="border px-3 py-2 rounded"


>


{


dark

?

"☀️ Sáng"

:

"🌙 Tối"

}



</button>


</div>








<div>



<p>

Cỡ chữ: {size}px

</p>





<input


type="range"


min="14"


max="32"


value={size}


onChange={e=>
setSize(
Number(e.target.value)
)
}



/>



</div>






</div>


)



}



</div>


)


}