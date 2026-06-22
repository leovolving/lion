import { createPortal } from 'react-dom'

const FooterChildren = () => (
  <>
    <span>
      Vectors and icons by{' '}
      <a href="https://www.svgrepo.com" target="_blank">
        SVG Repo
      </a>
    </span>
    <span>&copy; 2026 Leo Yockey</span>
  </>
)

export const Footer = () => {
  const footerEl = document.getElementById('footer') || document.body
  return createPortal(<FooterChildren />, footerEl)
}
