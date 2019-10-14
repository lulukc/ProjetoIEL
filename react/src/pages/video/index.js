import React, { Component } from "react"
import './video-react.css'

class Video extends Component {
    state = {
        video: ""
    }
    componentDidMount() {
        const { filesName } = this.props.match.params
        
        this.setState({ video: filesName })
        console.log(filesName)
        console.log(this.state.video)
    }

    render() {
        return (
            <div>
                <video id="meuvideo" width="800px" height="450px" autoplay controls>
                    <source src={`http://localhost:3003/files/${this.state.video}`}
                        type="video/mp4" />
                    <track src="teste2.pt.vtt" label="Portugues" kind="captions" srclang="pt-br" default />
                </video>
                <p>{this.state.video}</p>
            </div>
        )

    }

}

export default Video