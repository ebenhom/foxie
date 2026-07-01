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

document.documentElement.classList.add("dark")


}else{

document.documentElement.classList.remove("dark")


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
dark:bg-zinc-800
dark:text-white
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

bottom-14

right-0

border

p-5

rounded-xl

bg-white
dark:bg-zinc-800
dark:text-white

w-64

shadow-lg

"

>








<h3

className="font-bold mb-4"

>



Cài đặt đọc



</h3>












<button



onClick={()=>setDark(!dark)}



className="

border

px-3

py-2

rounded

mb-4

"



>





{



dark



?



"☀️ Sáng"



:



"🌙 Tối"





}





</button>












<p>



Cỡ chữ: {size}px



</p>









<input



type="range"



min="14"



max="32"



value={size}



onChange={(e)=>{



setSize(Number(e.target.value))



}}



/>











</div>



)



}









</div>



)



}