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
        <div id='login'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='email'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type='text'
                    name='password'
                    placeholder='senha'
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                />
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default Login