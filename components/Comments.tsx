"use client"


import {useEffect,useState} from "react"



export default function Comments(
{
novelId
}:{
novelId:string
}

){



const [comments,setComments]=useState<any[]>([])

const [text,setText]=useState("")




async function load(){


const res =
await fetch(
`/api/comments?novelId=${novelId}`
)


const data =
await res.json()


setComments(data)


}





useEffect(()=>{


load()


},[])






async function submit(){



await fetch("/api/comments",{

method:"POST",

headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({

novelId,

text


})


})



setText("")


load()



}







return (

<div className="mt-10">


<h2 className="text-2xl font-bold mb-5">

Bình luận

</h2>



<textarea

value={text}

onChange={
e=>setText(e.target.value)
}

placeholder="Viết bình luận..."

className="border p-3 w-full mb-3"

/>




<button

onClick={submit}

className="border px-5 py-2 rounded"

>

Gửi

</button>





<div className="mt-5 space-y-3">


{


comments.map((c)=>(


<div

key={c.id}

className="border p-3 rounded"

>


<p className="font-bold">

{c.user?.name}

</p>



<p>

{c.text}

</p>



</div>


))


}



</div>


</div>

)


}