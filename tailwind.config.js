module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                grandstander: 'Grandstander',
                inter: 'Inter',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-3deg)',
                    },
                    '50%': {
                        transform: 'rotate(3deg)',
                    },
                },
                'up-and-down': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-7px)' },
                },
                'heart-beat': {
                    '0%': { transform: 'scale(.75)' },
                    '20%': { transform: 'scale(1)' },
                    '40%': { transform: 'scale(.75)' },
                    '60%': { transform: 'scale(1)' },
                    '80%': { transform: 'scale(.75)' },
                    '100%': { transform: 'scale(.75)' },
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                'up-and-down': 'up-and-down 1.2s ease-in-out infinite alternate',
                'heart-beat': 'heart-beat 1s infinite',
            },
        },
    },
    plugins: [require('tailwindcss-animation-delay')],
}
