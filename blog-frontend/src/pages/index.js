import react from "react";
import { getUserdetailsGoogle } from "../utils/googleAuth";
import { getUserdetailsDiscord } from "../utils/discordAuth";

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

    react.useEffect( () => {
        getUserdetailsGoogle()
        .then(( { data } ) => {
            console.log(data);
            setUser(data);
            setLoding(false);
        }).catch ((err) => {
           // history.push("/");
            setLoding(false);
        });
    }, [] );

    react.useEffect( () => {
        getUserdetailsDiscord()
        .then(( { data }) => {
            console.log(data);
            setUser(data);
            setLoding(false);
        }).catch ((err) => {
            setLoding(false);
        });
    }, [] );


    const name = user.name;
    const Email = user.email;
    const Img = user.picture;
    const Id = user.id
    const linkkk = "/" + Id + "/blog-create";
    const Post = "/" + Id + "/blog-view";

    return !loading && (
        <>
        <h1>hello </h1>
         <h1>Hello {name}</h1>
         <h1>Email: {Email}</h1>
         <h1>Img: {Img}</h1>

         <a href= {linkkk} ><button>Create My Post</button></a>
         <a href= {Post} ><button>Posts</button></a>

        </>
    );
}