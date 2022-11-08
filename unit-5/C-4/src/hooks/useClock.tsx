import { useEffect, useState } from "react"
const useClock=()=>{
    const [hours,setHours]=useState(new Date().getHours())
    const [minutes,setMinutes]=useState(new Date().getMinutes())
    const [seconds,setSeconds]=useState(new Date().getSeconds())
     
    useEffect(()=>{
      setInterval(()=>{
        setHours(new Date().getHours())
        setMinutes(new Date().getMinutes())
        setSeconds(new Date().getSeconds())
      },1000)
    

    },[])


    return {hours,minutes,seconds}

}
export default useClock