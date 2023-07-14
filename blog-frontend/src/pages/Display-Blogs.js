import React, { useEffect, useState } from "react";
import { getBlogs } from "../utils/GetBlogs";

export function BlogDisplay({
   history
}) {

const pagelink = window.location.href;
var Link = pagelink.split(/[/]+/)
const Id = Link[2]
const [post, setPost] = useState(null);

useEffect(() => {

    const FetchPost = async () => {
        try {
            const response = await getBlogs(Id);

            setPost(response.data);
        } catch (err) {
            console.log(err);
        }
    };
      
    FetchPost();

}, []);

if (!post) {
    return <div>No Posts to display!!!</div> 
}

    return (
        <div>
            <h1>Hello!! Welcome to the Blog creation!!</h1>
            <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
        </div>
    )
}