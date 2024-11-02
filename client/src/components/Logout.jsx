import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export default function Logout() {
  const {Logout} = useContext(AuthContext)

  const handleLogout  = async () => {
    await Logout()
    window.location.href = '/' ;
  }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button onClick={handleLogout} className='bg-red-700 rounded text-white px-4 py-2'>Logout</button>
      <p className='ml-2 2xl'>Are you sure you want to logout</p>
        </div>
  )
}
