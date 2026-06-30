"use client"


import {
useEffect,
useState
} from "react"




export default function ReaderProgress({

novelId,

chapterId

}:{

novelId:string

chapterId:string

}){



const [progress,setProgress]=useState(0)





useEffect(()=>{



function handle(){


const scroll =
window.scrollY


const height =
document.body.scrollHeight
-
window.innerHeight



const percent =
Math.floor(
(scroll/height)*100
)



setProgress(percent)



fetch(
"/api/history",
{


method:"POST",


headers:{

"Content-Type":
"application/json"

},


body:JSON.stringify({

novelId,

chapterId,

progress:percent


})


}

)



}




window.addEventListener(
"scroll",
handle
)



return()=>{


window.removeEventListener(
"scroll",
handle
)


}


},[])





return null



}