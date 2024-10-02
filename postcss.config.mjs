/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    autoprefixer: {},
    '@tailwindcss/postcss': { base: './src/styles/globals.css', optimize: { minify: true } },
    '@csstools/postcss-oklab-function': { preserve: true },
    'postcss-preset-env': {
      features: { 'nesting-rules': false }
    }
  }
}

export default config
