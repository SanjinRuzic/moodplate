import React from 'react'
import RegisterForm from '../../components/auth/RegisterForm.jsx'

const RegisterPage = () => {
  return (
    <div>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
        <p className="mt-2 text-sm text-gray-600">Start your MoodPlate journey in a minute</p>
      </div>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
