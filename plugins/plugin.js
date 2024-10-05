export default function ({ addVariant }) {
  addVariant('inverted', '@media (inverted-colors: inverted)')
  addVariant('hocus', ['&:focus', '&:hover'])
}

module.exports = ({ addVariant }) => {
  addVariant('inverted', '@media (inverted-colors: inverted)')
  addVariant('hocus', ['&:focus', '&:hover'])
}
