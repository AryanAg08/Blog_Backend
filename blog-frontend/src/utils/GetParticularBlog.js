import axios from "axios";

export async function GETPartBlog(id) {
    return (
        axios.get(`http://localhost:5001/api/get-blog?id=${id}`, {
            withCredentials: true,
        })
    )
}