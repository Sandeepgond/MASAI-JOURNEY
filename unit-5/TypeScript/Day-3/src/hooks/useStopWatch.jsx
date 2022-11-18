import { useEffect, useRef, useState } from "react"

export const useStopWatch=(initState)=>{
    const [time,setTime]=useState(initState)

    const timerId=useRef(null)


    const start=()=>{
      if(!timerId.current){
        timerId.current=setInterval(()=>{
            setTime((prevValue)=>prevValue+1)
        },1000)
      }
    }
    const pause=()=>{
       clearInterval(timerId.current)
       timerId.current=null
    }
    const reset=()=>{
        clearInterval(timerId.current)
        timerId.current=null
        setTime(0)
    }
    useEffect(()=>{
        return reset
    },[])


    return {start ,pause ,reset,time}

}