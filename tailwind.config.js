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
            },
            animation: { wiggle: 'wiggle 1s ease-in-out infinite' },
        },
    },
    plugins: [],
}
