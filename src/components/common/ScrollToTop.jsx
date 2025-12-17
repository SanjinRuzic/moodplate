import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls the window to the top whenever the route path changes
// (ignores hash changes so in-page anchors keep working)
const ScrollToTop = ({ behavior = 'smooth' }) => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        // If the navigation includes a hash (in-page anchor), let the browser handle it
        if (hash) return
        try {
            window.scrollTo({ top: 0, left: 0, behavior })
        } catch (_) {
            // Fallback for older browsers/environments that don't support smooth behavior option
            window.scrollTo(0, 0)
        }
    }, [pathname])

    return null
}

export default ScrollToTop