import { VARIANT } from './constants'

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  className?: string
  children: React.ReactNode
  variant?: (typeof VARIANT)[keyof typeof VARIANT]
}
