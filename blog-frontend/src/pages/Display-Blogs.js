import React, { useEffect, useState } from "react";
import { getBlogs, deletePost } from "../utils/GetBlogs";
import axios from "axios";


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

// const deletePost = async (id) => {
//     try {
//         fetch(`http://localhost:5001/api/blog-delete?id=${id}`)
//         .then(alert("Successfully Deleted!! Refresh the page"))
//         .then(window.location.reload());
//     }
//     catch (err) {
//         console.log(err);

//     }
// };

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
                        <button onClick={() =>  deletePost(posts._id)}>Delete</button>
                    </li>
                ))}
             </ol>
        </div>
    )
}