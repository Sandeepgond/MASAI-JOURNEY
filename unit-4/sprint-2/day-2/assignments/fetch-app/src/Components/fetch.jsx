import { useState } from "react"

function getData(){
    return fetch(`https://jsonplaceholder.typicode.com/posts `)
    .then((res)=>res.json())
}
getData()


export default function Fetch(){
    const [posts,setPosts]=useState([])
    const handleFetch=async()=>{
        try {
            const data=await getData()
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

 return (
    <div >
        <h1>Posts</h1>
        <button onClick={handleFetch}>Get Posts</button>
        <ul>
            {posts.map((el)=><li className="inc" key={el.id}>{el.title}</li>)}
         </ul>
    </div>
 )
}