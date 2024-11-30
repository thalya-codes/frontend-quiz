import { ReactNode } from "react"

export interface IRoundedContainer {
    type?: 'default' | 'icon'
    variant?: 'white' | 'purple' | 'peach' | 'yellow' | 'green' 
    className?: string
    children: ReactNode
}