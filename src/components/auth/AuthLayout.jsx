import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/moodplate_logo.png'

// Auth layout that can be used as a router layout (via <Outlet/>) or as a wrapper around children with optional props.
const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-amber-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src={logo} alt="MoodPlate Logo" className="w-12 h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-8 md:p-12">
          {(title || subtitle) && (
            <div className="mb-6 text-center">
              {title && <h1 className="text-2xl font-bold text-gray-900">{title}</h1>}
              {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
            </div>
          )}
          {children ?? <Outlet />}
        </div>
      </div>

      {/* Back to home link */}
      <div className="text-center mt-6">
        <Link to='/' className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default AuthLayout
