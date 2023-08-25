import type { ButtonTypes } from "./types";

export function Button ({children, className, ...rest}: ButtonTypes){
    return (
        <button className={`bg-blue-600 px-3 py-2 text-white rounded-lg ${className && className}`} {...rest}>
            {children}
        </button>
    )
}