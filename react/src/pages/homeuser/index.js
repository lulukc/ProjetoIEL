import React, { useEffect, useState } from "react"
import api from '../../service/api'
import {Link} from 'react-router-dom'



function HomeUser({ match }) {
    const [video, setVideo] = useState([])

    useEffect(() => {
        async function loadVideos() {
            const res = await api.get(`/homeuser/${match.params.user}`, {
                headers: { token: match.params.token }
            })
            setVideo(res.data)
        }
        loadVideos()
    }, [match.params.user])


    return (
        <div>
            {video.map(videos => (
            <article key = {videos.id}>
                <Link  to = {`/video/${videos.filesName}`}>
                <strong> {videos.filesName} </strong>
                </Link>
                <p> {videos.description} </p>
            </article>
        ))}
        </div>
    )

}
export default HomeUser