import axios from "axios";

export function getBlogs(id) {
    return (
        axios.get('http://localhost:5001/api/blog-posts', {
            params: {
                id: id,
            },
        })
    )
}