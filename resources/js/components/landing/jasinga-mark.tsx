import type { SVGProps } from 'react';

export function JasingaMark({ className, ...props }: SVGProps<SVGSVGElement>) {
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className={className}
            {...props}
        >
            <defs>
                <linearGradient id="mark-gold" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.86 0.14 80)" />
                    <stop offset="100%" stopColor="oklch(0.7 0.14 65)" />
                </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="30" fill="oklch(0.32 0.06 152)" />
            <path
                d="M14 42 L24 30 L32 36 L40 24 L50 38 L50 46 L14 46 Z"
                fill="oklch(0.55 0.1 142)"
            />
            <path
                d="M14 46 L50 46 L50 50 L14 50 Z"
                fill="oklch(0.42 0.09 148)"
            />
            <circle cx="46" cy="20" r="6" fill="url(#mark-gold)" />
            <path
                d="M22 24 q3 -10 8 -14 q5 4 8 14"
                fill="oklch(0.7 0.14 138)"
            />
            <rect
                x="29"
                y="22"
                width="2"
                height="6"
                fill="oklch(0.32 0.05 50)"
            />
        </svg>
    );
}
