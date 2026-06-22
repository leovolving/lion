import { RootIconProps } from './types'

export const Icon = ({
  children,
  color = 'currentcolor',
  size = 24,
  ...rest
}: RootIconProps) => (
  <svg stroke={color} height={size} width={size} {...rest}>
    {children}
  </svg>
)
