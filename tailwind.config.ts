
const config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                button: {
                    primary: '#fafafa',
                },
                primary: {
                    DEFAULT: '#212121',
                    foreground: '#FAFAFA'
                }
            },

        },
    },
    plugins: [],
}

export default config