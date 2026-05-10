import type { SVGProps } from 'react';

export function BatikPattern({ className, ...props }: SVGProps<SVGSVGElement>) {
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <defs>
                <pattern
                    id="jasinga-batik"
                    width="56"
                    height="56"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(8)"
                >
                    <path
                        d="M28 6c5 6 5 11 0 16-5-5-5-10 0-16Zm0 28c5 6 5 11 0 16-5-5-5-10 0-16Z"
                        fill="currentColor"
                        opacity="0.18"
                    />
                    <circle
                        cx="6"
                        cy="28"
                        r="2"
                        fill="currentColor"
                        opacity="0.14"
                    />
                    <circle
                        cx="50"
                        cy="28"
                        r="2"
                        fill="currentColor"
                        opacity="0.14"
                    />
                    <path
                        d="M14 14l4 4M42 14l-4 4M14 42l4-4M42 42l-4-4"
                        stroke="currentColor"
                        strokeWidth="0.6"
                        strokeLinecap="round"
                        opacity="0.35"
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#jasinga-batik)" />
        </svg>
    );
}
