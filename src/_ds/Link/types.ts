type LinkSharedProps = {
  variant?: string
  children: React.ReactNode
}

type LinkAnchorProps = React.HTMLProps<HTMLAnchorElement>

type LinkRouterProps = {
  to: string
}

export type LinkProps = LinkSharedProps & (LinkAnchorProps | LinkRouterProps)
