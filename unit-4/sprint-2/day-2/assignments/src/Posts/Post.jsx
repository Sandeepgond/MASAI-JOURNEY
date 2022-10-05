import { useState } from "react"

function getData(){
    return fetch(`http://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`).then(res=>{
        return res.json()
    })
}
const PostItem=({title,id})=>
{
   return <li>{title} </li>
}
function Posts(){
    const[posts,setPosts]=useState([])

    const handleFetchData=async()=>{
        try{
             const data=await getData()
             setPosts(data)
        }
        catch(err){
           console.log(err)
        }
    }
    return(
        <div>
            <h3>Posts</h3>
            <button onClick={handleFetchData}>Get Posts</button>
            <ul>
                {posts.map(el=><PostItem title={el.title} key={el.id}/>)}
            </ul>
        </div>
    )
}
export default Posts