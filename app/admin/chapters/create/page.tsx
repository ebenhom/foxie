import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"


export default async function CreateChapterPage(
{
searchParams
}:{
searchParams: Promise<{
novelId?: string
}>
}

){


const params = await searchParams

const novelId = params.novelId



if(!novelId){

return (

<div className="p-10">

<h1 className="text-2xl font-bold">

Thiếu ID truyện

</h1>

</div>

)

}




async function createChapter(formData:FormData){


"use server"



const title =
formData.get("title") as string


const content =
formData.get("content") as string




await prisma.chapter.create({

data:{


title,


content,


novel:{
connect:{
id:novelId
}
}


}


})



redirect(`/admin/novels`)


}







return (


<div className="p-10 max-w-3xl mx-auto">



<h1 className="text-3xl font-bold mb-10">

Thêm Chapter

</h1>




<form

action={createChapter}

className="space-y-5"

>



<input

name="title"

placeholder="Tên chapter"

className="border p-3 w-full"

/>




<textarea

name="content"

placeholder="Nội dung chapter"

className="border p-3 w-full h-96"

/>



<button

className="border px-5 py-3 rounded"

>

Lưu chapter

</button>



</form>



</div>


)


}