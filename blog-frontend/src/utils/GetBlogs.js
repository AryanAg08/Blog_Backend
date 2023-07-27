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

export async function deletePost(_id) {
    return (
        axios.get(`http://localhost:5001/api/blog-delete?id=${_id}` , {
            withCredentials: true,
        })
         .then(alert("Successfully Deleted!! Refresh the page"))
         .then(window.location.reload())
    )
}