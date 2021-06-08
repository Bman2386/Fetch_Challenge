import React from 'react';
import {useState, useEffect} from 'react';

const SignUp = (props) => {
    const {createNewUser} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] =useState('');

    const handleSubmit = (e) => {
 
        e.preventDefault();
        let form = {username: username, password: password, points_total: 0}
        createNewUser(form)
    }

    // const update = e => {

    // }

    return (
        <div>
            Sign Up Form
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
                <input 
                type="text"
                placeholder='Must Match Password'
                value={password2}
                onChange={e => setPassword2(e.target.value)} />
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    ) 
}

export default SignUp;