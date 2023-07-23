import axios from "axios";

export async function getBlogs(id) {
    return (
        axios.get('http://localhost:5001/api/blog-posts', {
            params: {
                id: id,
            },
            withCredentials: true,
        })
    )
}