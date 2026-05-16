import { VARIANT } from './constants'
import { type ButtonProps } from './types'
import './Button.css'

import { cn } from '@/utils/classnames'

export const Button = ({
  className,
  children,
  variant = VARIANT.primary,
  type = 'button',
  ...htmlAttributes
}: ButtonProps) => {
  return (
    <button
      className={cn('_ds-button', variant, className)}
      type={type}
      {...htmlAttributes}
    >
      {children}
    </button>
  )
}
