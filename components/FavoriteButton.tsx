"use client"


import {useEffect,useState} from "react"



export default function FavoriteButton(
{
novelId
}:{
novelId:string
}

){


const [liked,setLiked]=useState(false)


const [loading,setLoading]=useState(true)




useEffect(()=>{


fetch(
`/api/favorite?novelId=${novelId}`
)

.then(res=>res.json())

.then(data=>{


setLiked(data.liked)

setLoading(false)


})


},[novelId])





async function toggle(){



const res =
await fetch("/api/favorite",{


method:"POST",


headers:{


"Content-Type":"application/json"

},


body:JSON.stringify({

novelId

})


})



const data =
await res.json()



setLiked(data.liked)



}





if(loading){

return (

<button className="border px-4 py-2 rounded">

...

</button>

)

}




return (

<button


onClick={toggle}


className="border px-4 py-2 rounded"


>


{


liked

?

"❤️ Đã thích"

:

"🤍 Yêu thích"


}



</button>


)

}