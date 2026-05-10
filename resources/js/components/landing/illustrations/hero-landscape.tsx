import type { SVGProps } from 'react';

export function HeroLandscape({
    className,
    ...props
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 720"
            preserveAspectRatio="xMidYMid slice"
            className={className}
            {...props}
        >
            <defs>
                <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.97 0.02 85)" />
                    <stop offset="55%" stopColor="oklch(0.92 0.04 80)" />
                    <stop offset="100%" stopColor="oklch(0.86 0.07 75)" />
                </linearGradient>
                <linearGradient id="mountain-far" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.45 0.05 152)" />
                    <stop offset="100%" stopColor="oklch(0.38 0.06 150)" />
                </linearGradient>
                <linearGradient id="mountain-mid" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.4 0.07 148)" />
                    <stop offset="100%" stopColor="oklch(0.32 0.06 152)" />
                </linearGradient>
                <linearGradient id="terrace" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.62 0.13 138)" />
                    <stop offset="100%" stopColor="oklch(0.42 0.1 145)" />
                </linearGradient>
                <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="oklch(0.92 0.13 80)" />
                    <stop offset="60%" stopColor="oklch(0.82 0.14 75)" />
                    <stop
                        offset="100%"
                        stopColor="oklch(0.78 0.13 80)"
                        stopOpacity="0"
                    />
                </radialGradient>
            </defs>

            <rect width="1440" height="720" fill="url(#sky)" />

            <circle cx="1080" cy="220" r="180" fill="url(#sun)" />
            <circle cx="1080" cy="220" r="62" fill="oklch(0.86 0.14 80)" />

            <path
                d="M0 460 L120 420 L260 450 L380 380 L520 420 L660 360 L820 410 L960 350 L1120 400 L1280 360 L1440 400 L1440 720 L0 720 Z"
                fill="url(#mountain-far)"
                opacity="0.85"
            />

            <path
                d="M0 540 L100 500 L220 530 L340 470 L480 510 L620 460 L760 500 L900 450 L1040 490 L1180 450 L1320 480 L1440 460 L1440 720 L0 720 Z"
                fill="url(#mountain-mid)"
            />

            <g opacity="0.92">
                <path
                    d="M0 580 L1440 580 L1440 600 L0 600 Z"
                    fill="oklch(0.55 0.11 142)"
                />
                <path
                    d="M0 605 L1440 605 L1440 628 L0 628 Z"
                    fill="oklch(0.62 0.13 138)"
                />
                <path
                    d="M0 633 L1440 633 L1440 660 L0 660 Z"
                    fill="oklch(0.5 0.1 144)"
                />
                <path
                    d="M0 665 L1440 665 L1440 695 L0 695 Z"
                    fill="oklch(0.42 0.09 148)"
                />
                <path
                    d="M0 700 L1440 700 L1440 720 L0 720 Z"
                    fill="oklch(0.32 0.06 152)"
                />
            </g>

            <g opacity="0.85">
                <path
                    d="M180 540 q4 -28 16 -42 q12 14 16 42"
                    fill="oklch(0.32 0.06 152)"
                />
                <rect
                    x="194"
                    y="538"
                    width="4"
                    height="14"
                    fill="oklch(0.28 0.04 60)"
                />
                <path
                    d="M1240 555 q3 -24 14 -36 q11 12 14 36"
                    fill="oklch(0.32 0.06 152)"
                />
                <rect
                    x="1252"
                    y="552"
                    width="4"
                    height="12"
                    fill="oklch(0.28 0.04 60)"
                />
            </g>
        </svg>
    );
}
