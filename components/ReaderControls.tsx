"use client"


import {useState} from "react"



export default function ReaderControls(){


const [dark,setDark]=useState(false)

const [size,setSize]=useState(18)



return (


<div className="flex gap-3 mb-8">


<button

onClick={()=>setDark(!dark)}

className="border px-3 py-2 rounded"

>


{

dark

?

"☀️ Sáng"

:

"🌙 Tối"

}


</button>



<button

onClick={()=>setSize(size-2)}

className="border px-3 py-2 rounded"

>

A-

</button>




<button

onClick={()=>setSize(size+2)}

className="border px-3 py-2 rounded"

>

A+

</button>



<div

className={

dark

?

"fixed inset-0 -z-10 bg-black"

:

""

}

/>



</div>


)

}