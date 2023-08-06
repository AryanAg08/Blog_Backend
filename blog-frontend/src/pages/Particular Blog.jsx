import React, { useEffect, useState } from "react";
import { GETPartBlog } from "../utils/GetParticularBlog";


export function DisplayParticularBlog () {

 const [post, setPost] = useState({
    title: "",
    content: "",
    Comment: [],
    author: "",
 });
const Link = window.location.href.split(/[/]+/);
const Id = Link[3];

const [loading, setLoding] = React.useState( true );

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const BlogResponse = await GETPartBlog(Id);

                const Initialse = BlogResponse.data;
                   
                setPost(Initialse);
                 setLoding(false);
            }
            catch (err) {
                console.log(err);
                setLoding(false);
            }
        };

        fetchPost();
    }, [Id])

    const Author = post.author;
    const Content = post.content;
    const Title = post.title;

    return !loading && (
        <>
        <h1>{Title}</h1>
        <p>{Content}</p>
        <h3> Written by: {Author}</h3>
        </>

    );
}