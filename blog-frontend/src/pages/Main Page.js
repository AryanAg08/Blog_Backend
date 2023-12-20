import react from "react";
import { getUserdetailsGoogle } from "../utils/googleAuth";
import { getBlogs } from "../utils/GetBlogs";
import axios from "axios";
// import { getUserdetailsDiscord } from "../utils/discordAuth";

export function Dashboard({
    history
}) {
const [user, setUser] = react.useState({
        id: "",
        name: "",
        picture: "",
        email: "",
    });

    const [loading, setLoding] = react.useState( true );
    const [post, setPost] = react.useState([]);

    
    const name = user.name;
    const Email = user.email;
    const Img = user.picture;
    const Id = user.id;
    console.log(Id);
    const linkkk = "/" + Id + "/blog-create";
    const Post = "/" + Id + "/blog-view";

    react.useEffect( () => {
        getUserdetailsGoogle()
        .then(( { data } ) => {
            setUser(data);
            setLoding(false);
        }).catch ((err) => {
            // history.push("/"); 
            setLoding(false);
        });

        const fetchPost = async () => {
            try {
                 // Add the blogs data here! 
                 const response = await getBlogs(Id);
                 console.log("Your response here!!");
                 console.log(response);

                 setPost(response.data);
            }
            catch (err) {
  console.log(err);
  alert("Something went error!! 404!!");
            }
        };

        fetchPost();
    }, [Id] );


    // react.useEffect( () => {
    //     getUserdetailsDiscord()
    //     .then( async ( { data }) => {
    //         console.log(data);
    //         setUser(data);
    //         setLoding(false);
    //     }).catch ((err) => {
    //       //  history.push("/");
    //         setLoding(false);
    //     });
    // }, [] );




    window.sessionStorage.setItem("UserName", name);
    console.log("Posts!!");
    console.log(post);

    if (!post ) {
        return <div> No posts to display!!</div>
    }

    
    return !loading && (
        <>
         <h1>User: {name}</h1>
         <h1>Email: {Email}</h1>
           <img  width="80px" src={Img}  alt="Profile"/>
           <br></br>
         <a href= {linkkk} ><button>Create My Post</button></a>
         <a href= {Post} ><button>Posts</button></a>

         <h1>Your Posts: </h1>
        <div className="Blogs">
            <ol>
                {post.map((posts, index) => (
                  <li key={index}>
                     <>
                <h2><a href={"/posts/" + posts._id}>{posts.title} </a></h2>
                <p>{posts.content}</p>
              </>
                  </li>  
                ))}
                </ol>           
        </div>
        </>
    );
}