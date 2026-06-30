"use client"


import {useState} from "react"
import {useRouter} from "next/navigation"



export default function CreateNovel(){


const router = useRouter()



const [form,setForm]=useState({

title:"",

description:"",

tags:"",

category:""


})



const [cover,setCover]=useState<File | null>(null)






async function submit(){



const data = new FormData()



data.append(
"title",
form.title
)



data.append(
"description",
form.description
)



data.append(
"tags",
form.tags
)



data.append(
"category",
form.category
)





if(cover){


data.append(
"cover",
cover
)


}






const res = await fetch(

"/api/admin/novels",

{

method:"POST",

body:data

}

)






if(res.ok){


router.push("/admin/novels")


}



}







return (



<div className="p-10 max-w-xl">





<h1 className="text-3xl font-bold mb-5">

Thêm truyện

</h1>







<input

placeholder="Tên truyện"

className="border p-3 w-full mb-3"

onChange={

e=>

setForm({

...form,

title:e.target.value

})


}

/>







<input


type="file"


accept="image/*"


className="border p-3 w-full mb-3"



onChange={

e=>{


if(e.target.files){

setCover(
e.target.files[0]
)

}


}


}


/>










<textarea

placeholder="Mô tả"

className="border p-3 w-full mb-3"


onChange={

e=>

setForm({

...form,

description:e.target.value

})


}


/>









<input

placeholder="Tags (vd: fantasy, romance)"

className="border p-3 w-full mb-3"


onChange={

e=>

setForm({

...form,

tags:e.target.value

})


}


/>









<input

placeholder="Thể loại (vd: Tiên hiệp, Ngôn tình)"

className="border p-3 w-full mb-3"


onChange={

e=>

setForm({

...form,

category:e.target.value

})


}


/>







<button

onClick={submit}

className="border px-5 py-3 rounded"


>

Lưu

</button>






</div>


)


}