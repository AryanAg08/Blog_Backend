import axios from "axios";

export function getUserdetailsDiscord() {
    return (
        axios.get('http://localhost:5001/discordAuth', {
            withCredentials: true,
        })
    )
}