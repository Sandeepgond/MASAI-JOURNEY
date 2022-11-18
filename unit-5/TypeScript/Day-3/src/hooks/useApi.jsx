import { useEffect, useState } from "react"

export const useAPI=(apiFn,initData)=>{

    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const [data,setData]=useState(initData)

    const execute=async()=>{
      setLoading(true)
      try {
       let data=await apiFn()
       setData(data)
      } catch (error) {
        setError(true)
      }
      finally{
        setLoading(false)
      }
    }
    useEffect(()=>{
        execute()
    },[])

    return {loading,error,data,refetch:execute}


}