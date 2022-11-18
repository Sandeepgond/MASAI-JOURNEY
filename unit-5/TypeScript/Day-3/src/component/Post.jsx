import axios from "axios"
import { useAPI } from "../hooks/useApi"
import { useDelayedApi } from "../hooks/useDelayedApi"
const getPost=async()=>{
     let response=await axios.get("http://localhost:8080/posts")
     let data=response.data
     return data  
}
const deletePost=async(id)=>{
    let response=await axios.delete(`http://localhost:8080/posts/${id}`)
     let data=response.data
     return data  
}

export const Posts=()=>{
    const {loading,error,data,refetch}=useAPI(getPost,[])
    const {loading:deleteLoading,execute}=useDelayedApi(deletePost,[])
  
    if(loading || deleteLoading){
        return (<div><h1>Loading...</h1></div>)
    }
    else if(error){
        return(<div><h1>Error ...</h1></div>)
    }
    return(
        <div>
            Posts
           {
            data.map((post)=>(
                <div key={post.id}>
                    <span>
                    {post.message}
                    </span>
                    <button onClick={()=>{
                        execute(post.id).then(()=>{
                            refetch()
                        })
                    }}>Delete</button>
                </div>
            ))
           }
           <button onClick={refetch}>Refresh</button>
        </div>
    )
}