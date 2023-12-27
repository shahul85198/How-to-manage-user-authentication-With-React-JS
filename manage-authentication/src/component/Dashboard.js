import React from 'react'
import { useAuth } from '../AuthProvider'

const Dashboard = () => {
    const auth = useAuth();
    return (
        <div className='container'>
            <div>
                <h1>Welcome! {auth.user?.username}</h1>
                <button onClick={() => auth.logOut()} className='btn-submit'>
                    logout
                </button>
            </div>
        </div>
    )
}

export default Dashboard;