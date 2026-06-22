import { NavLink } from 'react-router'

import type { LinkProps } from './types'

export const Link = (props: LinkProps) => {
  const isNavLink = 'to' in props
  return isNavLink ? <NavLink {...props} /> : <a {...props} />
}
