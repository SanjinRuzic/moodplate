import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logo from '../../assets/moodplate_logo.png';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Recipes', href: '#recipes' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Logo */}
                    <a href="#home" className="flex items-center space-x-3 cursor-pointer group">
                        <img
                            src={logo}
                            alt="MoodPlate Logo"
                            className="h-10 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50 dark:text-gray-300 dark:hover:text-orange-400 dark:hover:bg-gray-800'
                                        : 'text-white hover:text-orange-300 hover:bg-white/10'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Section - Dark Mode Toggle & CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full transition-all duration-300 ${
                                isScrolled
                                    ? 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
                                    : 'bg-white/20 hover:bg-white/30'
                            }`}
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun className={`w-5 h-5 ${isScrolled ? 'text-orange-600 dark:text-orange-400' : 'text-white'}`} />
                            ) : (
                                <Moon className={`w-5 h-5 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                            )}
                        </button>

                        {/* CTA Button */}
                        <button
                            onClick={() => navigate('/auth/login')}
                            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Sign In
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-3 md:hidden">
                        {/* Mobile Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full transition-all duration-300 ${
                                isScrolled
                                    ? 'bg-gray-100 dark:bg-gray-800'
                                    : 'bg-white/20'
                            }`}
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun className={`w-5 h-5 ${isScrolled ? 'text-orange-600' : 'text-white'}`} />
                            ) : (
                                <Moon className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                            )}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg transition-colors duration-300 ${
                                isScrolled
                                    ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                                    : 'text-white hover:bg-white/10'
                            }`}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl border-t border-gray-100 dark:border-gray-800 animate-slide-down">
                        <div className="px-4 py-6 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => { setIsMenuOpen(false); navigate('/auth/register'); }}
                                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;