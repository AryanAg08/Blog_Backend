import axios from "axios";

export function getUserdetailsDiscord() {
    return (
        axios.get('http://localhost:5001/user/discordAuth', {
            withCredentials: true,
        })
    )
}