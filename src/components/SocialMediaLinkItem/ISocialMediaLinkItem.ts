import { ReactNode } from "react"

export interface ISocialMediaLinkItem {
 children: ReactNode
  href: string
  ariaLabel: string
  variant: 'yellow' | 'mint' | 'peach'
}