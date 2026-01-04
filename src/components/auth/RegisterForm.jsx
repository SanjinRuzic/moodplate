import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const validate = () => {
    const e = {}
    if (!formData.fullName.trim()) e.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      e.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = 'Enter a valid email'
    }
    if (!formData.password) {
      e.password = 'Password is required'
    } else if (formData.password.length < 8) {
      e.password = 'Password must be at least 8 characters'
    }
    if (!formData.confirmPassword) {
      e.confirmPassword = 'Please confirm your password'
    } else if (formData.confirmPassword !== formData.password) {
      e.confirmPassword = "Passwords don't match"
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    try {
      setIsLoading(true)
      // Fake request for visuals; replace with real endpoint later
      await new Promise((res) => setTimeout(res, 900))
      console.log('Registered:', formData)
    } catch (err) {
      console.error('Registration failed', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your name"
          className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition ${errors.fullName ? 'border-red-400' : 'border-gray-300'}`}
          autoComplete="name"
        />
        {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
          autoComplete="email"
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className={`w-full px-4 py-2 pr-24 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition ${errors.password ? 'border-red-400' : 'border-gray-300'}`}
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute inset-y-0 right-0 px-3 text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition ${errors.confirmPassword ? 'border-red-400' : 'border-gray-300'}`}
          autoComplete="new-password"
        />
        {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? 'Creating account…' : 'Create account'}
      </button>

      {/* Secondary link */}
      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/auth/login" className="font-medium text-orange-600 hover:text-orange-700">Log in</Link>
      </p>
    </form>
  )
}

export default RegisterForm
