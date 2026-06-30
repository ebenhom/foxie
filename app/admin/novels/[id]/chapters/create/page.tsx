"use client"


import {
useState
} from "react"

import {
useRouter
} from "next/navigation"




export default function CreateChapter(
{
params
}:{
params: Promise<{id:string}>
}

){



const router = useRouter()



const [novelId,setNovelId] =
useState("")



const [title,setTitle] =
useState("")



const [content,setContent] =
useState("")



const [images,setImages] =
useState<File[]>([])





async function submit(){



const {id} = await params



setNovelId(id)




const formData =
new FormData()



formData.append(

"title",

title

)



formData.append(

"content",

content

)



formData.append(

"novelId",

id

)





images.forEach(
(file)=>{


formData.append(

"images",

file

)


}

)





const res =
await fetch(

"/api/admin/chapters",

{


method:"POST",


body:formData


}

)





if(res.ok){



router.push(

`/admin/novels/${id}/chapters`

)



}else{


console.log(
await res.text()
)


}



}







return (



<div className="p-10 max-w-xl">



<h1 className="text-3xl font-bold mb-5">

Thêm chapter

</h1>







<input


className="border p-3 w-full mb-3"


placeholder="Tên chapter"


value={title}


onChange={
e=>setTitle(
e.target.value
)
}



/>







<textarea


className="border p-3 w-full h-60 mb-3"


placeholder="Nội dung chapter"


value={content}


onChange={
e=>setContent(
e.target.value
)
}



/>







<input


type="file"


multiple


accept="image/*"


className="border p-3 w-full mb-3"


onChange={

e=>{


if(e.target.files){


setImages(

Array.from(
e.target.files
)

)


}


}

}



/>









<button


onClick={submit}


className="border px-5 py-3 rounded"


>


Lưu chapter


</button>







</div>


)


}