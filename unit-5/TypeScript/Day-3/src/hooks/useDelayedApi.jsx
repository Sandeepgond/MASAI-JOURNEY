import { useState } from "react"

export const useDelayedApi=(apiFn,initData)=>{

    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const [data,setData]=useState(initData)

    const execute=async(arg)=>{
      setLoading(true)
      try {
       let data=await apiFn(arg)
       setData(data)
      } catch (error) {
        setError(true)
      }
      finally{
        setLoading(false)
      }
    }

    return {loading,error,data,execute}


}