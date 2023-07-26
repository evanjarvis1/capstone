import './LoginRegisterPage.css'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import MyList from './LoginLogoutButtons';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useEffect } from 'react';
import HomeHeader from '../HomeHeader';
import axios from 'axios';

const LoginRegisterPage = () => {
    const {user, isAuthenticated} = useAuth0()

    const [userId, setUserId] = useState(null)

    const loginHandler = () => {

        if (isAuthenticated) {
            setUserId(user.sub)

            const body = {
                userId
            }
    
            console.log(body)
    
            axios.post('http://localhost:6969/login', body)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }



    }

    useEffect(() => loginHandler())

    return (
        <>
            <HomeHeader />
            <div className='login-div'>
            {isAuthenticated ? <h1>Welcome {user.given_name}</h1>: <h1>Please Log In to Continue</h1>}
        
            {isAuthenticated ? 
            <LogoutButton /> : <LoginButton />
            }
            </div>

        </>
    )
}

export default LoginRegisterPage;