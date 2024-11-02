import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from 'flowbite-react'

export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return <div className='text-center'>
            <Spinner aria-label = "center aligned spinner example"></Spinner>
        </div>
    }
    if (user) {
        return children
    }
  return (
    <div>
   <Navigate to={'/login'} state={{from:location}} replace >
   </Navigate>
    </div>
  )
}
