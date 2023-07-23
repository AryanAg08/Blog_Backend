import React, { useEffect, useState } from "react";
import { getBlogs } from "../utils/GetBlogs";


export function BlogDisplay({
   history
}) {

const pagelink = window.location.href;
var Link = pagelink.split(/[/]+/)
const Id = Link[2]
const [post, setPost] = useState([]);

useEffect(() => {

    const FetchPost = async () => {
        try {
            console.log(Id)
            const response = await getBlogs(Id);
            console.log("Here is the response!!")
             console.log(response);
             console.log(response.data.length);
            setPost(response.data);
           
        } catch (err) {
            console.log(err);
        }
    };
      
    FetchPost();

}, [Id]);

if (!post) {
    return <div>No Posts to display!!!</div> 
}   

    return (
        <div>
            <h1>Hello!! Welcome to the Blog creation!!</h1>
             <ol>
                {post.map((posts, index) => (
                    <li key={index}>
                        <h2>{posts.title}</h2>
                        <p>{posts.content}</p>
                    </li>
                ))}
             </ol>
        </div>
    )
}