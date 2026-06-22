import { createPortal } from 'react-dom'

import { Link } from '@/_ds/Link'

const FooterChildren = () => (
  <>
    <span>
      Vectors and icons by{' '}
      <Link href="https://www.svgrepo.com" target="_blank">
        SVG Repo
      </Link>
    </span>
    <span>&copy; 2026 Leo Yockey</span>
  </>
)

export const Footer = () => {
  const footerEl = document.getElementById('footer') || document.body
  return createPortal(<FooterChildren />, footerEl)
}
