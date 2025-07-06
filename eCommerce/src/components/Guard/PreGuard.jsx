import React, { useEffect, useState } from 'react'
import firebaseApp from '../../utils/firebase-config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Navigate, Outlet, useSearchParams } from 'react-router-dom'

const auth=getAuth(firebaseApp)

const PreGuard = () => {
    const [session, setSession] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSession(true)
            } else {
                setSession(false)
            }
        })
    }, [])
    if (session === null) return (
        <div className='w-full h-screen flex justify-center items-center'>
        <button type="button" className="bg-indigo-500 ..." disabled>
  <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
  </svg>
  Processing…
</button>

        </div>
    );
    if (session) return <Navigate to='/' />
    
  return (
    <Outlet/>
  )
}

export default PreGuard