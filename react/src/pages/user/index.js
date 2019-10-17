import React, { Component } from "react"
import api from '../../service/api'
import './styles.css'
import logo from '../login/logoIris.png'
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
          <div id='tudo2'>
          <div id='login-box2'>
           <div id='email1'>
           <div id='logoimg2'>
               <img src={logo} alt='logo' />
           </div>
            <form id='user' onSubmit={this.handleSubmit} >
            <div class="input-div1" id='input-email'>
                <input
                    type='text'
                    name='email'
                    placeholder='Digite o seu email'
                    onChange={this.handleChange}
                    value={this.state.email}
                />
                </div>
                <div class="input-div1" id='input-nome'>
                <input
                    type='text'
                    name='firstName'
                    placeholder='Digite o seu nome'
                    onChange={this.handleChange}
                    value={this.state.firstName}
                />
                </div>
                <div class="input-div1" id='input-sobrenome'>
                <input
                    type='text'
                    name='lastName'
                    placeholder='Digite o seu sobrenome'
                    onChange={this.handleChange}
                    value={this.state.lastName}
                />
                </div>
                <div class="input-div1" id='input-impresa'>
                <input
                    type='text'
                    name='company'
                    placeholder='Digite o nome da sua empresa'
                    onChange={this.handleChange}
                    value={this.state.company}
                />
                </div>
                <div class="input-div1" id='input-idimersao'>
                <input
                    type='text'
                    name='immersionId'
                    placeholder='ID da imersão'
                    onChange={this.handleChange}
                    value={this.state.immersionId}
                />
                </div>
                <div class="input-div1" id='input-senha'>
                <input
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={this.handleChange}
                    value={this.state.password}
                />
                </div>
                <div class="input-div1" id='input-senhadnv'>
                <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Digite sua senha novamente'
                    onChange={this.handleChange}
                    value={this.state.confirmPassword}
                />
                </div>
                <div id='button-register'>
                <button id='botaodentro' type='submit'>registrar</button>
                </div>
            </form>
            </div>
            </div>
            </div>
        )
    }
}

export default user
