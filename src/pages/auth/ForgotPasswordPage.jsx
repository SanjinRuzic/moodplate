import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setError('')
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }
    try {
      setIsLoading(true)
      // Fake request for visuals; replace with real endpoint later
      await new Promise((res) => setTimeout(res, 800))
      setMessage('If an account exists for this email, we sent a reset link.')
    } catch (e) {
      setError('Something went wrong. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Forgot password</h1>
        <p className="mt-2 text-sm text-gray-600">We’ll email you a link to reset it</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition ${error && !email ? 'border-red-400' : 'border-gray-300'}`}
            autoComplete="email"
          />
          {error && !email && <p className="text-sm text-red-600">{error}</p>}
          {message && <p className="text-sm text-green-600">{message}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-colors"
        >
          {isLoading ? 'Sending…' : 'Send reset link'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Remembered your password?{' '}
        <Link to="/auth/login" className="font-medium text-orange-600 hover:text-orange-700">
          Back to log in
        </Link>
      </p>
    </div>
  )
}

export default ForgotPasswordPage
