import React, { Component } from "react"
import api from '../../service/api'

class Immersion extends Component {
    state = {
        immersionName: '',
        immersionPlace: '',
        immersionCompany: '',
    }
    handleSubmit = async e => {
        e.preventDefault()

        const data = {
            immersionName: this.state.immersionName,
            immersionPlace: this.state.immersionPlace,
            immersionCompany: this.state.immersionCompany,
        }

        await api.post('immersion', data)
        this.props.history.push('/')
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form id='immersion' onSubmit={this.handleSubmit} >
                <input
                    type='text'
                    name='immersionName'
                    placeholder='Nome da imersão'
                    onChange={this.handleChange}
                    value={this.state.immersionName}
                />
                <input
                    type='text'
                    name='immersionPlace'
                    placeholder='Cidade da imersão'
                    onChange={this.handleChange}
                    value={this.state.immersionPlace}
                />
                <input
                    type='text'
                    name='immersionCompany'
                    placeholder='Digite o nome da empresa da imersão'
                    onChange={this.handleChange}
                    value={this.state.immersionCompany}
                />
                <button type='submit'>registrar</button>
            </form>
        )
    }
}

export default Immersion