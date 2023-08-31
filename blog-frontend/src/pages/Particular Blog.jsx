import React, { useEffect, useState } from "react";
import { GETPartBlog } from "../utils/GetParticularBlog";
import { ViewsCount } from "../utils/CountViews";
import { Col, Row } from "react-bootstrap";


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

const CommentDetails = {
    Author: "",
    TimeStamp: "",
    CommentContent: "",
    id: "",
}

const [loading, setLoding] = React.useState( true );
const [comment, setComment] = React.useState(false);
const [addcomments, setAddComments] = React.useState(CommentDetails);
const [showComments, setShowComments] = React.useState({
    Author: "",
    Time: "",
    Content: "",
});


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
       
      const SaveComment = async (e) => {
        setComment(false);
        addcomments.Author = window.sessionStorage.getItem("UserName");
        addcomments.TimeStamp = new Date().getTime();
        addcomments.id = post._id;

            e.preventDefault();
           let SendComment = await fetch(`http://localhost:5001/Commentapi/CommentAdd?id=${Id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(addcomments),
           });

           let result = await SendComment.json();

           if (result.code === 200) {
            alert("added comment!!");
            window.location.reload();
           }
      }

     console.log(post.Comment);

    // if (post._id !== "") {
    //  window.sessionStorage.setItem("user", post._id);

    //     setTimeout(async () => {
    //         const getUser = window.sessionStorage.getItem("user");

    //         if (getUser === post._id) {
    //             const a = await ViewsCount(post._id);
    //             console.log(a);
    //         }
    //      }, 10000) // runs after 10 seconds 
    //    }
    
    const Author = post.author;
    const Content = post.content;
    const Title = post.title;


    const handleInputChange = (category, value) => {
         setAddComments({
            ...addcomments,
            [category]: value
         });
    }


    return !loading && (
        <>
        <h1>{Title}</h1>
        <p>{Content}</p>
        <h3> Author: {Author}</h3>
         <div>
            <ul>
             <h2> Comments:</h2>
             {
               post.Comment.map((posts, index) => (
                    <li key={index}> 
                    <h2>{posts.Content}</h2>
                        {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(posts.TimeStamp)}
                        <h4>{posts.Author}</h4>
                    </li>
               ))
             }
                </ul>
             <button onClick={() => EnableComments()}>
                Add comment</button>

             {comment ? (
                    <>
                    <form onSubmit={SaveComment}>
                        <Row>
                            <Col>
                     <input type="text" value={addcomments.CommentContent} placeholder="Comment" onChange={(e) => handleInputChange('CommentContent', e.target.value)} />
                    </Col>
                     <button type="submit">Save</button>
                     </Row>
                     </form>
                    </>
             ) : (
                <>
                </>
             )}
         </div>
        </>


    );
}