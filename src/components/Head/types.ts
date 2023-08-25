import type { ReactNode } from "react";

export interface HeadTypes {
    title: string;
    description: string;
    image?: string;
    url?: string;
    creator?: string;
    children?: ReactNode
}