import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiFetch } from '../../utils/apiClient'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        emailOrUsername: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    const validateForm = () => {
        const newErrors = {}
        if (!formData.emailOrUsername.trim()) {
            newErrors.emailOrUsername = 'Email or username is required'
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({...prevState, [name]: value}))
        if (errors[name]) {
            setErrors(prevState => ({...prevState, [name]: ''}))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        const {emailOrUsername, password} = formData
        try {
            setIsLoading(true)
            const data = await apiFetch('/api/auth/login', { method: 'POST', body: { emailOrUsername, password } })
            console.log(data)
        } catch {
            console.log('Error logging in')
        } finally {
            setIsLoading(false)
        }
    }

    // Layout-free form content; the surrounding card is provided by AuthLayout at the route level
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email or Username */}
            <div className="space-y-2">
                <label htmlFor="emailOrUsername" className="block text-sm font-medium text-gray-700">
                    Email or Username
                </label>
                <input
                    id="emailOrUsername"
                    name="emailOrUsername"
                    type="text"
                    value={formData.emailOrUsername}
                    onChange={handleChange}
                    placeholder="you@example.com or yourusername"
                    className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition ${errors.emailOrUsername ? 'border-red-400' : 'border-gray-300'}`}
                    autoComplete="username"
                />
                {errors.emailOrUsername && (
                    <p className="text-sm text-red-600">{errors.emailOrUsername}</p>
                )}
            </div>

            {/* Password */}
            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className={`w-full px-4 py-2 pr-24 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition ${errors.password ? 'border-red-400' : 'border-gray-300'}`}
                        autoComplete="current-password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute inset-y-0 right-0 px-3 text-sm font-medium text-gray-600 hover:text-gray-800"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-sm text-red-600">{errors.password}</p>
                )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                    {/* spacer for potential remember me */}
                </div>
                <Link to="/auth/forgot" className="text-sm font-medium text-orange-600 hover:text-orange-700">
                    Forgot password?
                </Link>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-colors"
                disabled={isLoading}
            >
                {isLoading ? 'Logging in…' : 'Log In'}
            </button>

            {/* Secondary link */}
            <p className="text-center text-sm text-gray-600">
                Don’t have an account?{' '}
                <Link to="/auth/register" className="font-medium text-orange-600 hover:text-orange-700">
                    Register
                </Link>
            </p>
        </form>
    )
}
export default LoginForm
