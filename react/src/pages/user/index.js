import React, { Component } from "react"
import api from '../../service/api'

class user extends Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        immersionId: '',
        password: '',
        confirmPassword: '',
    }
    handleSubmit = async e => {
        e.preventDefault()

        const data = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            company: this.state.company,
            immersionId: this.state.immersionId,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }

        await api.post('users', data)
        this.props.history.push('/')
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form id='user' onSubmit={this.handleSubmit} >
                <input
                    type='text'
                    name='email'
                    placeholder='Digite o seu email'
                    onChange={this.handleChange}
                    value={this.state.email}
                />
                <input
                    type='text'
                    name='firstName'
                    placeholder='Digite o seu nome'
                    onChange={this.handleChange}
                    value={this.state.firstName}
                />
                <input
                    type='text'
                    name='lastName'
                    placeholder='Digite o seu sobrenome'
                    onChange={this.handleChange}
                    value={this.state.lastName}
                />
                <input
                    type='text'
                    name='company'
                    placeholder='Digite o nome da sua empresa'
                    onChange={this.handleChange}
                    value={this.state.company}
                /><input
                    type='text'
                    name='immersionId'
                    placeholder='ID da imersão'
                    onChange={this.handleChange}
                    value={this.state.immersionId}
                />
                <input
                    type='text'
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={this.handleChange}
                    value={this.state.password}
                />
                <input
                    type='text'
                    name='confirmPassword'
                    placeholder='Digite sua senha novamente'
                    onChange={this.handleChange}
                    value={this.state.confirmPassword}
                />
                <button type='submit'>registrar</button>
            </form>
        )
    }
}

export default user