import React, { useEffect, useState } from "react";
import { GETPartBlog } from "../utils/GetParticularBlog";
import { ViewsCount } from "../utils/CountViews";


export function DisplayParticularBlog () {

 const [post, setPost] = useState({
    title: "",
    content: "",
    Comment: [],
    author: "",
    _id: "",
 });
const Link = window.location.href.split(/[/]+/);
const Id = Link[3];

const [loading, setLoding] = React.useState( true );
const [comment, setComment] = React.useState(false);
const [addcomments, setAddComments] = React.useState({
    Author: "",
    TimeStamp: "",
    CommentData: "",
    Likes: "",
    Dislikes: "",
}) 

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
      const EnableComments = async () => {
           setComment(true);
      }
        
      let author;
      let commentcontent;
       
      const SaveComment = async () => {
        console.log("Saved!!")
      }


    if (post._id != "") {
     window.sessionStorage.setItem("user", post._id);

        setTimeout(async () => {
            const getUser = window.sessionStorage.getItem("user");

            if (getUser === post._id) {
                await ViewsCount(post._id);
            }
         }, 10000) // runs after 10 seconds 
       }
    
    const Author = post.author;
    const Content = post.content;
    const Title = post.title;

    return !loading && (
        <>
        <h1>{Title}</h1>
        <p>{Content}</p>
        <h3> Written by: {Author}</h3>
         <div>
             <h2> Comments:</h2>
             <button onClick={() => EnableComments()}>Add comment</button>

             {comment ? (
                    <>
                     <input
                     type="text"
                     value={author}
                     />

                     <button onClick={() => SaveComment()}>Save</button>
                    </>
             ) : (
                <>
                These are comments. 
                </>
             )}
         </div>
        </>


    );
}