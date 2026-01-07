import React, { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/moodplate_logo.png'

const Footer = () => {

    const [email, setEmail] = useState('')
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus({ type: '', message: '' })
        const form = e.currentTarget
        // Honeypot check
        if (form.elements.namedItem('company')?.value) {
            return
        }
        // Basic email validation
        const valid = /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email)
        if (!valid) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' })
            return
        }
        // Simulate success
        setStatus({ type: 'success', message: "You're on the list! 🎉" })
        setEmail('')
        // TODO: Integrate with your newsletter provider API here.
    }

    const footerLinks = {
        product: [
            { name: 'Features', href: '/features' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Recipes', href: '/recipes' },
            { name: 'How It Works', href: '/how-it-works' },
            { name: 'FAQ', href: '/faq' },
        ],
        company: [
            { name: 'About', href: '/about' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
        ],
        legal: [
            { name: 'Privacy', href: '/privacy' },
            { name: 'Terms', href: '/terms' },
            { name: 'Cookies', href: '/cookies' },
        ],
    }

    const socialLinks = [
        { name: 'Facebook', href: '#', Icon: Facebook },
        { name: 'Twitter', href: '#', Icon: Twitter },
        { name: 'Instagram', href: '#', Icon: Instagram },
        { name: 'LinkedIn', href: '#', Icon: Linkedin },
    ]

    return (
        <footer className="bg-gray-900 text-gray-300">

            {/* Main footer grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 md:gap-12">

                {/* Company info */}
                <div className="lg:col-span-2">
                    <Link to="/" className="flex items-center mb-4 group">
                        <img
                            src={logo}
                            alt="MoodPlate Logo"
                            className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
                        />
                    </Link>

                    <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                        Satisfy your cravings the smart way. AI-powered meal suggestions perfectly tailored to your mood.
                    </p>

                    {/* Contact info */}
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-sm">
                            <Mail className="w-4 h-4 text-orange-500" />
                            <span>hello@moodplate.com</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                            <Phone className="w-4 h-4 text-orange-500" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            <span>San Francisco, CA 94102</span>
                        </div>
                    </div>

                    {/* Social media links */}
                    <div className="flex items-center space-x-4 mt-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition-colors duration-300"
                            >
                                <social.Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Product Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
                    <ul className="space-y-3">
                        {footerLinks.product.map((link) => (
                            <li key={link.name}>
                                {link.href.startsWith('/') ? (
                                    <Link to={link.href} className="text-gray-400 hover:text-orange-500 text-sm">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a href={link.href} className="text-gray-400 hover:text-orange-500 text-sm">
                                        {link.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company links */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
                    <ul className="space-y-3">
                        {footerLinks.company.map((link) => (
                            <li key={link.name}>
                                {link.href.startsWith('/') ? (
                                    <Link to={link.href} className="text-gray-400 hover:text-orange-500 text-sm">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a href={link.href} className="text-gray-400 hover:text-orange-500 text-sm">
                                        {link.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
                    <ul className="space-y-3">
                        {footerLinks.legal.map((link) => (
                            <li key={link.name}>
                                {link.href.startsWith('/') ? (
                                    <Link to={link.href} className="text-gray-400 hover:text-orange-500 text-sm">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a href={link.href} className="text-gray-400 hover:text-orange-500 text-sm">
                                        {link.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="lg:col-span-2">
                    <h3 className="text-white font-semibold mb-4 text-lg">Subscribe to our newsletter</h3>
                    <p className="text-gray-400 text-sm mb-4">Get tasty updates, recipe drops, and product news.</p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Honeypot field */}
                        <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-colors duration-200"
                            >
                                Subscribe
                            </button>
                        </div>

                        <div className="min-h-[1.25rem]" aria-live="polite" aria-atomic="true">
                            {status.message && (
                                <p className={`${status.type === 'success' ? 'text-green-400' : 'text-red-400'} text-sm`}>
                                    {status.message}
                                </p>
                            )}
                        </div>
                    </form>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} MoodPlate. All rights reserved.
                        </p>
                        <span className="text-gray-500 text-sm">
              Made with ❤️ for food lovers
            </span>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
