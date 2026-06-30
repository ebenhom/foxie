import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"



export default async function EditNovelPage(
{
params
}:{
params:Promise<{id:string}>
}

){



const {id}=await params




const novel =
await prisma.novel.findUnique({

where:{
id
}

})



if(!novel){

return <h1>Không tìm thấy truyện</h1>

}





async function updateNovel(formData:FormData){

"use server"



const title =
formData.get("title") as string


const description =
formData.get("description") as string


const tags =
formData.get("tags") as string





await prisma.novel.update({

where:{
id
},

data:{

title,

description,

tags

}

})



redirect("/admin/novels")


}







return (


<div className="p-10 max-w-xl">



<h1 className="text-3xl font-bold mb-8">

Sửa truyện

</h1>





<form

action={updateNovel}

className="space-y-4"

>



<input

name="title"

defaultValue={novel.title}

className="border p-3 w-full"

/>





<textarea

name="description"

defaultValue={novel.description}

className="border p-3 w-full h-40"

/>






<input

name="tags"

defaultValue={novel.tags}

className="border p-3 w-full"

/>






<button

className="border px-5 py-3 rounded"

>

Lưu thay đổi

</button>



</form>




</div>


)

}