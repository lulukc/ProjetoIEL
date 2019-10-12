import React, { Component } from "react"

import api from '../../service/api'

class upload extends Component {
    state = {
        video: null,
        immersionId: '',
    }
    handleSubmit = async e => {
        e.preventDefault()

        const data = new FormData()

        data.append('video', this.state.video)
        data.append('immersionId', this.state.immersionId)
        console.log(this.state)
        await api.post('upload', data)

        this.props.history.push('/')

    }

    handleVideoChange = e => {
        this.setState({ video: e.target.files[0] })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form id='upload' onSubmit={this.handleSubmit}>
                <input type='file' onChange={this.handleVideoChange} />
                <input
                    type='number'
                    name='immersionId'
                    placeholder='Id da imesção'
                    onChange={this.handleChange}
                    value={this.state.immersionId}
                />
                <button type='submit' >enviar</button>
            </form>
        )
    }
}

export default upload