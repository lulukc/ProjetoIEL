import React, { Component } from "react"
import { Player, ControlBar, ClosedCaptionButton } from 'video-react'

import './video-react.css'



class VideoPlayer extends Component {

    state = {
        videos: ''
    }
    async componentDidMount() {
        const { filesName } = this.props.match.params
        this.setState.videos = filesName
    }

    render() {
        const { videos } = this.state

        return (
            <div>
                {/* <Player videoId="video-1" >
                    <source
                        src={`http://localhost:3003/files/${videos}`}
                        type="video/avi"
                    />
                    <track
                        kind="captions"
                        src="http://localhost:3003/transcriptions/teste3.pt.vtt"
                        srcLang="br"
                        label="Portugues"
                        default
                    />
                    <ControlBar autoHide={true}>
                        <ClosedCaptionButton order={7} />
                    </ControlBar>
                </Player> */}
<h1> {videos} </h1>
            </div>
        )
    }

}


export default VideoPlayer