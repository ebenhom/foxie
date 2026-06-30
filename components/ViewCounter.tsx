"use client"


import {useEffect} from "react"



export default function ViewCounter(
{
novelId
}:{
novelId:string
}

){



useEffect(()=>{


fetch(`/api/novels/${novelId}/view`,{

method:"POST"

})


},[novelId])




return null


}