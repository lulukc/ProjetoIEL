import React, { Component } from "react"
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import logoIris from './logoIris.png'
import "./styles1.css"

class Home extends Component {
    render() {
        return (
            <div >

                <div id='logotj'>
                    <img src={logo} alt='logo' />

                    <Link to='/login' >
                        <div id="cafezinho">
                            <button id='botaofora1' class="button" > Login  </button>
                        </div></Link>
                </div>
                <div id="logoimg10">
                    <img src={logoIris} alt='logo' />
                </div>
                <div id='txt'>
                    <span> Projeto desenvolvido por alunos da FIAP para facilitar o seu trabalho!</span>
                </div>
            </div>
        )
    }
}

export default Home
