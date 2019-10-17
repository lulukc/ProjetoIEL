import React, { Component } from "react"
import api from '../../service/api'
import './styles.css'
import logo from '../login/logoIris.png'
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
          <div id='tudo3'>
          <div id='login-box3'>
           <div id='nomeimersao1'>
           <div id='logoimg3'>
               <img src={logo} alt='logo' />
           </div>
            <form id='immersion' onSubmit={this.handleSubmit} >
           <div class="input-div3" id='nomeimersao2'>
                <input
                    type='text'
                    name='immersionName'
                    placeholder='Nome da imersão'
                    onChange={this.handleChange}
                    value={this.state.immersionName}
                />
                </div>
                <div class="input-div3" id='input-immersionPlace'>
                <input
                    type='text'
                    name='immersionPlace'
                    placeholder='Cidade da imersão'
                    onChange={this.handleChange}
                    value={this.state.immersionPlace}
                />
                </div>
                <div class="input-div3" id='input-immersionCompany'>
                <input
                    type='text'
                    name='immersionCompany'
                    placeholder='Digite o nome da empresa da imersão'
                    onChange={this.handleChange}
                    value={this.state.immersionCompany}
                />
                </div>
                <div id='botaofora23'>
                <button id='botao23'type='submit'>registrar</button>
                </div>
            </form>
            </div>
            </div>
            </div>
        )
    }
}

export default Immersion
