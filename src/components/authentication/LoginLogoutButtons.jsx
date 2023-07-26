import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const MyList = () => {

    const {user, isAuthenticated} = useAuth0()

  return (
    isAuthenticated && (
    <div>
        {JSON.stringify(user, null, 2)}
    </div>
    )
  )
}

export default MyList