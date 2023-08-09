import axios from "axios";

export async function getComments(id) {
    return (
        axios.get(`http://localhost:5001/api/get-Comments?id=${id}`, {
            withCredentials: true,
        })
    )
}