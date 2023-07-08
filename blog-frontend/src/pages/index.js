import react from "react";
import { getUserdetailsGoogle } from "../utils/googleAuth";

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
    }, [] )

    const name = user.name;
    const Email = user.email;
    const Img = user.picture;

    return !loading && (
        <>
        <h1>hello </h1>
         <h1>Hello {name}</h1>
         <h1>Email: {Email}</h1>
         <h1>Img: {Img}</h1>

        </>
    );
}