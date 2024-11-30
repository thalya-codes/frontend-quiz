import { ReactNode } from "react"

export interface ITypography {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
    fontType?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg' | 'xl' 
    className?: string
    children: ReactNode
}