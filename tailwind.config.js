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
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                'up-and-down': 'up-and-down 1.2s ease-in-out infinite alternate',
            },
        },
    },
    plugins: [],
}
