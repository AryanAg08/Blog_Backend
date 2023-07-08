import axios from "axios";

export function getUserdetailsGoogle() {
    return (
        axios.get('http://localhost:5001/user/googleAuth', {
            withCredentials: true,
        })
    )
}