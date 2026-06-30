"use client"


import {
useEffect,
useState
} from "react"

import {
useParams,
useRouter
} from "next/navigation"



export default function EditChapter(){



const params = useParams()

const router = useRouter()


const id =
params.id as string



const [chapter,setChapter]=useState<any>(null)

const [title,setTitle]=useState("")

const [content,setContent]=useState("")





useEffect(()=>{


async function load(){


const res =
await fetch(
`/api/admin/chapters/${id}`
)



const data =
await res.json()



setChapter(data)


setTitle(data.title)

setContent(data.content)



}



load()



},[id])







async function save(){



await fetch(

`/api/admin/chapters/${id}`,

{


method:"PUT",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

title,

content

})


}

)




router.back()



}






if(!chapter){

return (

<div className="p-10">

Đang tải...

</div>

)

}






return (


<div className="p-10 max-w-3xl">



<h1 className="text-3xl font-bold mb-5">

Sửa chapter

</h1>




<input

className="border p-3 w-full mb-5"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>





<textarea

className="border p-3 w-full h-96"

value={content}

onChange={
e=>setContent(e.target.value)
}

/>




<button

onClick={save}

className="border px-5 py-3 mt-5 rounded"

>

Lưu thay đổi

</button>




</div>


)

}