"use client"


import {useEffect,useState} from "react"



export default function ReaderContent
({
content
}:{
content:string
})

{


const [size,setSize]=useState(18)



useEffect(()=>{


const saved =

localStorage.getItem("reader-size")



if(saved){

setSize(Number(saved))

}



},[])






return (


<div


className="

px-3

sm:px-6

md:px-10

text-justify

"

style={{

fontSize:`${size}px`,

lineHeight:"1.5"

}}


>



{


content

.split("\n")

.map((line,index)=>(



<p


key={index}


className="

my-3

"

>



{line}



</p>



))


}




</div>



)


}