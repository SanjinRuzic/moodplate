import React from 'react'
import LoginForm from '../../components/auth/LoginForm.jsx'

const LoginPage = () => {
    return (
        <div>
            <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Log In</h1>
                <p className="mt-2 text-sm text-gray-600">Welcome back — please enter your details</p>
            </div>
            <LoginForm />
        </div>
    )
}
export default LoginPage
