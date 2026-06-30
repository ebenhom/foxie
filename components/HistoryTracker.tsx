"use client"


import {useEffect} from "react"



export default function HistoryTracker(
{
novelId,
chapterId
}:{
novelId:string,
chapterId:string
}

){


useEffect(()=>{


fetch("/api/history",{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({


novelId,

chapterId,

progress:0


})


})


},[
novelId,
chapterId
])



return null


}