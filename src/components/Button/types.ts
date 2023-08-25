import type { ReactNode } from "react"

export interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string
}