export const designTokens = {
    // Colors
    colors: {
        primary: {
            main: '#fb923c',
            light: '#fed7aa',
            dark: '#ea580c',
            gradient: 'linear-gradient(135deg, #fb923c 0%, #fbbf24 100%)',
        },
        secondary: {
            main: '#fbbf24',
            light: '#fde68a',
            dark: '#d97706',
        },
        neutral: {
            white: '#ffffff',
            50: '#fafafa',
            100: '#f5f5f5',
            500: '#737373',
            900: '#171717',
        },
        semantic: {
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
        },
    },

    // Typography
    typography: {
        fontFamily: {
            sans: "'Inter', system-ui, sans-serif",
            display: "'Poppins', system-ui, sans-serif",
        },
        fontSize: {
            xs: '0.75rem',      // 12px
            sm: '0.875rem',     // 14px
            base: '1rem',       // 16px
            lg: '1.125rem',     // 18px
            xl: '1.25rem',      // 20px
            '2xl': '1.5rem',    // 24px
            '3xl': '1.875rem',  // 30px
            '4xl': '2.25rem',   // 36px
            '5xl': '3rem',      // 48px
            '6xl': '3.75rem',   // 60px
            '7xl': '4.5rem',    // 72px
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },
    },

    // Spacing
    spacing: {
        xs: '0.5rem',    // 8px
        sm: '0.75rem',   // 12px
        md: '1rem',      // 16px
        lg: '1.5rem',    // 24px
        xl: '2rem',      // 32px
        '2xl': '3rem',   // 48px
        '3xl': '4rem',   // 64px
        '4xl': '6rem',   // 96px
    },

    // Border Radius
    borderRadius: {
        sm: '0.5rem',    // 8px
        md: '0.75rem',   // 12px
        lg: '1rem',      // 16px
        xl: '1.5rem',    // 24px
        '2xl': '2rem',   // 32px
        full: '9999px',
    },

    // Shadows
    shadows: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        medium: '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        hard: '0 10px 40px -5px rgba(0, 0, 0, 0.2), 0 20px 50px -10px rgba(0, 0, 0, 0.15)',
        glowOrange: '0 0 20px rgba(251, 146, 60, 0.5)',
        glowAmber: '0 0 20px rgba(251, 191, 36, 0.5)',
    },

    // Transitions
    transitions: {
        fast: '150ms ease-in-out',
        base: '300ms ease-in-out',
        slow: '500ms ease-in-out',
    },

    // Z-Index
    zIndex: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalBackdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070,
    },

    // Breakpoints
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
};