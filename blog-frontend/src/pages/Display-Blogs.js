// import React, { useEffect, useState } from "react";
// import { getBlogs, deletePost } from "../utils/GetBlogs";
// import axios from "axios";


// export function BlogDisplay({
//    history
// }) {

// const pagelink = window.location.href;
// var Link = pagelink.split(/[/]+/)
// const Id = Link[2]
// const [post, setPost] = useState([]);


// useEffect(() => {

//     const FetchPost = async () => {
//         try {
//             console.log(Id)
//             const response = await getBlogs(Id);
//             console.log("Here is the response!!")
//              console.log(response);
//              console.log(response.data.length);
//             setPost(response.data);
           
//         } catch (err) {
//             console.log(err);
//         }
//     };
      
//     FetchPost();

// }, [Id]);



// if (!post) {
//     return <div>No Posts to display!!!</div> 
// }   

//     return (
//         <div>
//             <h1>Hello!! Welcome to the Blog creation!!</h1>
//              <ol>
//                 {post.map((posts, index) => (
//                     <li key={index}>
//                         <h2>{posts.title}</h2>
//                         <p>{posts.content}</p>
//                         <button onClick={() =>  deletePost(posts._id)}>Delete</button>
//                     </li>
//                 ))}
//              </ol>
//         </div>
//     )
// }


 import React, { useEffect, useState } from "react";
import { getBlogs, deletePost, editPost } from "../utils/GetBlogs";
import axios from "axios";

export function BlogDisplay({ history }) {
  const pagelink = window.location.href;
  var Link = pagelink.split(/[/]+/)
  const Id = Link[2]
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log(Id);
        const response = await getBlogs(Id);
        console.log("Here is the response!!");
        console.log(response);
        console.log(response.data.length);
        const initializedPosts = response.data.map((p) => ({
          ...p,
          isEditing: false,
          editableTitle: p.title,
          editableContent: p.content,
        }));
        setPost(initializedPosts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, [Id])

  const handleEdit = (index) => {
    setPost((prevPost) => {
      const updatedPost = [...prevPost];
      updatedPost[index].isEditing = true;
      return updatedPost;
    });
  };

  const handleCancelEdit = (index) => {
    setPost((prevPost) => {
      const updatedPost = [...prevPost];
      updatedPost[index].isEditing = false;
      return updatedPost;
    });
  };
  const handleSave = async (index) => {
    console.log(index._id);
      let response = await fetch(`http://localhost:5001/api/blog-edit?id=${index._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        }, 
        body: JSON.stringify(index),
      });

      let result = await response.json();
      if (result.code === 200) {
        window.location.reload();
      }
  }
  const handleInputChange = (index, field, value) => {
    setPost((prevPost) => {
      const updatedPost = [...prevPost];
      updatedPost[index][field] = value;
      return updatedPost;
    });
  };

  if (!post) {
    return <div>No Posts to display!!!</div>
  }

  return (
    <div>
      <h1>Hello!! Welcome to the Blog creation!!</h1>
      <ol>
        {post.map((posts, index) => (
          <li key={index}>
            {posts.isEditing ? (
              <>
                <input
                  type="text"
                  value={posts.editableTitle || posts.title}
                  onChange={(e) => handleInputChange(index, 'editableTitle', e.target.value)}
                />
                <textarea
                  value={posts.editableContent || posts.content}
                  onChange={(e) => handleInputChange(index, 'editableContent', e.target.value)}
                />
                <button onClick={() => handleSave(posts)}>Save</button>
                <button onClick={() => handleCancelEdit(index)}>Cancel</button>
              </>
            ) : (
              <>
                <h2>{posts.title}</h2>
                <p>{posts.content}</p>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => deletePost(posts._id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
