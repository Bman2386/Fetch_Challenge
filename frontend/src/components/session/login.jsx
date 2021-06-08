import React from 'react'
import {useState, useEffect} from 'react';
// import { login } from '../../actions/session';

const Login = (props) =>{
    const {login} = props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
 
        e.preventDefault();
        const form = {username: username, password: password}
        login(form)
    }
    const guestLogin = () => {
        const form = {username: 'Guest', password: 'hunter12'}
        login(form)
    }
    return (
        <div>
            Login page
            <form>
                <input 
                type="text"
                value={username}
                placeholder='username'
                onChange={e => setUsername(e.target.value)} />
                <input 
                type="password"
                value={password}
                placeholder='6 characters min'
                onChange={e => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>Login</button>
            </form>
            <button onClick={guestLogin}>Guest Login</button>
        </div>
    )
}

export default Login