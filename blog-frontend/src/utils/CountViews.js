import axios from "axios";

export async function ViewsCount(id) {
    return (
        axios.get(`http://localhost:5001/api/blog-visitCount?id=${id}`, {
            withCredentials: true,
        })
    );
};
