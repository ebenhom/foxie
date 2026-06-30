"use client"


import {usePathname} from "next/navigation"

import {useState} from "react"





export default function NavbarController({

children

}:{

children:React.ReactNode

}) {



const pathname = usePathname()


const isReading =
pathname.startsWith("/chap/")



const [show,setShow] = useState(false)





if(isReading){


return (


<>


<button


onClick={()=>setShow(!show)}


className="

fixed

top-4

right-4

z-100

bg-white

border

rounded-full

px-4

py-2

shadow

"


>

☰

</button>





{

show && (


<div>


{children}

</div>


)


}



</>


)


}







return children



}