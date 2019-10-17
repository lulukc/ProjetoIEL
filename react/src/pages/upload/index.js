import React, { Component } from "react"

import api from '../../service/api'

import './styles.css'

import logo from '../login/logoIris.png'


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
          <div id='tudo1'>
            <div id='upload1'>
            <div id='logoimg1'>
                <img src={logo} alt='logo' />
            </div>
            <div id='escarquivo'>
            <form id='upload' onSubmit={this.handleSubmit}>
                <input type='file' onChange={this.handleVideoChange} />
              </form></div>
                  <div id='idimercao'>
                <div>
                <input
                    type='number'
                    name='immersionId'
                    placeholder='Id da imerção'
                    onChange={this.handleChange}
                    value={this.state.immersionId}
                /> </div><div id='botao3'>
                <button id='botao2' type='submit' >enviar</button>
             </div></div></div>

         </div>
        )
    }
}

export default upload
