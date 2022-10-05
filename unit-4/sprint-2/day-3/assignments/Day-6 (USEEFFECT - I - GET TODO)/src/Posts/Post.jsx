import { useEffect } from "react"
import { useState } from "react"

function getData({
    page
}){
    return fetch(`http://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then(res=>{
        return res.json()
    })
}
const PostItem=({title,id})=>
{
   return <li>{title} </li>
}
function Posts(){
    const[page,setPage]=useState(1)
    const[loading,setLoading]=useState(false)
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        handleFetchData()
    },[])

    const handleFetchData=async(page=1)=>{
        try{
            setLoading(true)
             const data=await getData({page})
             setPosts(data)
             setLoading(false)
        }
        catch(err){
            setLoading(true)
           console.log(err)
        }
    }
    const handlePage=(changeBy)=>{
          setPage(page+changeBy)
          handleFetchData(page+changeBy)
    }
    if(loading){
       return <h2>loading...</h2>
    }
    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(el=><PostItem title={el.title} id={el.id} key={el.id}/>)}
            </ul>
            <button onClick={()=>handlePage(-1)} disabled={page===1}>PREV</button>
            <button>{page}</button>
            <button onClick={()=>handlePage(1)}>NEXT</button>
        </div>
    )
}
export default Posts