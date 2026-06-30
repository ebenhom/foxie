"use client"


import {useState} from "react"



export default function CommentBox(
{
novelId
}:{
novelId:string
}

){



const [text,setText]=useState("")




async function send(){


await fetch("/api/comment",{

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


alert("Đã bình luận")


}




return (

<div className="mt-10">


<h2 className="text-xl font-bold mb-3">

Bình luận

</h2>



<textarea

value={text}

onChange={
e=>setText(e.target.value)
}

className="border w-full p-3"

placeholder="Viết bình luận..."


/>



<button

onClick={send}

className="border px-5 py-2 mt-3 rounded"

>

Gửi

</button>



</div>

)

}