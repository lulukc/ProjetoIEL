import React, { Component } from "react"
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import logoIris from '../../assets/logoIris.svg'
import "./styles.css"

class Home extends Component {
    render() {
        return (
            <div >
                <div id="hederComponetes" >
                    <img src={logo} alt='logo' />
                    <Link to='/login' >
                        <button class="button" > Login  </button>
                    </Link>
                </div>
                <div id="logoimg">
                    <img src={logoIris} alt='logo' />
                </div>
                <div>
                    <span>insira o teste aqui</span>
                </div>
            </div>
        )
    }
}

export default Home