import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
    const {loginWithRedirect, loginWithPopup} = useAuth0();



  return (
    <button onClick={() => loginWithPopup()}>
        Log In
    </button>
  )
}

export default LoginButton