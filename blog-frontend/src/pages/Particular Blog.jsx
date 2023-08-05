import React, { useEffect, useState } from "react";
import { GETPartBlog } from "../utils/GetParticularBlog";


export function DisplayParticularBlog () {

 const [post, setPost] = useState({});
const Link = window.location.href.split(/[/]+/);
const Id = Link[3];

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const BlogResponse = await GETPartBlog(Id);

                const Initialse = BlogResponse.data;

                console.log(Initialse);
            }
            catch (err) {
                console.log(err);
            }
        };

        fetchPost();
    }, [Id])

    return (
        <h1>Hello world!!</h1>
    )
}