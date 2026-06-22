export interface IconProps {
  color?: string
  size?: number
}

export interface RootIconProps extends IconProps {
  children: React.ReactNode
}
