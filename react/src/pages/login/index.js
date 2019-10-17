import logo from './logoIris.png'
import './styles.css'
import React, { useState } from "react"
import api from '../../service/api'
function Login({history}) {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await api.post('/login', {
            username,
            password
        })
        const { token, user } = res.data
        history.push(`/homeuser/${user}/${token}`)
    }
    return (
      <div id='tudo'>
      <div id='login-box'>

         <div id='login'>
            <form onSubmit={handleSubmit}>

            <div id='logoimg'>
                <img src={logo} alt='logo' />
            </div>
            <div class="input-div" id="input-usuario">
                <input
                    type='text'
                    name='username'
                    placeholder='email'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                </div>
                  <div class="input-div" id="input-senha">
                <input id='senha'
                    type='password'
                    name='password'
                    placeholder='senha'
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                />
                </div>
                <div id="botaofora">
                <button id='botao' type='submit'>Entrar</button>
                </div>

             </form>
        </div>
        </div>
        </div>
  )
}

export default Login
