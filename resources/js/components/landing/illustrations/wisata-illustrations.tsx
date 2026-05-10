import type { SVGProps } from 'react';

type IllustrationProps = SVGProps<SVGSVGElement>;

export function SetuKadongdongIllustration({
    className,
    ...props
}: IllustrationProps) {
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 240"
            className={className}
            preserveAspectRatio="xMidYMid slice"
            {...props}
        >
            <defs>
                <linearGradient id="setu-sky" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.94 0.04 85)" />
                    <stop offset="100%" stopColor="oklch(0.86 0.07 80)" />
                </linearGradient>
                <linearGradient id="setu-water" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.7 0.08 200)" />
                    <stop offset="100%" stopColor="oklch(0.45 0.08 210)" />
                </linearGradient>
            </defs>
            <rect width="400" height="240" fill="url(#setu-sky)" />
            <circle cx="320" cy="62" r="34" fill="oklch(0.88 0.13 78)" />
            <path
                d="M0 140 L80 110 L160 130 L240 95 L320 120 L400 100 L400 160 L0 160 Z"
                fill="oklch(0.42 0.09 148)"
            />
            <path
                d="M0 155 L100 135 L200 150 L320 130 L400 145 L400 175 L0 175 Z"
                fill="oklch(0.32 0.06 152)"
            />
            <rect y="170" width="400" height="70" fill="url(#setu-water)" />
            <g
                opacity="0.4"
                stroke="oklch(0.95 0.02 200)"
                strokeWidth="1.2"
                fill="none"
            >
                <path d="M40 190 q20 -4 40 0" />
                <path d="M140 200 q20 -4 40 0" />
                <path d="M260 195 q20 -4 40 0" />
                <path d="M70 218 q20 -4 40 0" />
                <path d="M200 222 q20 -4 40 0" />
                <path d="M310 215 q20 -4 40 0" />
            </g>
            <g>
                <ellipse
                    cx="180"
                    cy="195"
                    rx="34"
                    ry="6"
                    fill="oklch(0.35 0.05 50)"
                />
                <rect
                    x="156"
                    y="180"
                    width="48"
                    height="14"
                    fill="oklch(0.55 0.08 60)"
                    rx="2"
                />
                <line
                    x1="180"
                    y1="180"
                    x2="180"
                    y2="158"
                    stroke="oklch(0.3 0.04 60)"
                    strokeWidth="2"
                />
                <path
                    d="M180 158 L210 174 L180 178 Z"
                    fill="oklch(0.78 0.13 80)"
                />
            </g>
        </svg>
    );
}

export function KoleangIllustration({
    className,
    ...props
}: IllustrationProps) {
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 240"
            className={className}
            preserveAspectRatio="xMidYMid slice"
            {...props}
        >
            <defs>
                <linearGradient id="kol-sky" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.95 0.03 85)" />
                    <stop offset="100%" stopColor="oklch(0.88 0.06 80)" />
                </linearGradient>
            </defs>
            <rect width="400" height="240" fill="url(#kol-sky)" />
            <path
                d="M0 130 L60 100 L130 120 L200 80 L280 110 L360 90 L400 110 L400 240 L0 240 Z"
                fill="oklch(0.42 0.09 148)"
            />
            <path
                d="M0 160 L100 140 L200 155 L300 138 L400 150 L400 240 L0 240 Z"
                fill="oklch(0.55 0.1 142)"
            />

            <g>
                <rect
                    x="120"
                    y="155"
                    width="60"
                    height="40"
                    fill="oklch(0.86 0.08 70)"
                />
                <path
                    d="M115 155 L150 130 L185 155 Z"
                    fill="oklch(0.45 0.08 50)"
                />
                <rect
                    x="142"
                    y="172"
                    width="14"
                    height="22"
                    fill="oklch(0.32 0.05 60)"
                />

                <rect
                    x="220"
                    y="165"
                    width="50"
                    height="32"
                    fill="oklch(0.86 0.08 70)"
                />
                <path
                    d="M216 165 L245 142 L274 165 Z"
                    fill="oklch(0.45 0.08 50)"
                />
                <rect
                    x="237"
                    y="178"
                    width="12"
                    height="20"
                    fill="oklch(0.32 0.05 60)"
                />
            </g>

            <g fill="oklch(0.32 0.06 152)">
                <path d="M40 200 q4 -26 18 -38 q14 12 18 38" />
                <path d="M310 195 q4 -22 14 -32 q10 10 14 32" />
                <path d="M360 210 q3 -20 12 -28 q9 8 12 28" />
            </g>

            <circle
                cx="80"
                cy="58"
                r="22"
                fill="oklch(0.88 0.13 78)"
                opacity="0.85"
            />
        </svg>
    );
}

export function KebunJerukIllustration({
    className,
    ...props
}: IllustrationProps) {
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 240"
            className={className}
            preserveAspectRatio="xMidYMid slice"
            {...props}
        >
            <defs>
                <linearGradient id="kj-sky" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.96 0.03 85)" />
                    <stop offset="100%" stopColor="oklch(0.9 0.05 80)" />
                </linearGradient>
            </defs>
            <rect width="400" height="240" fill="url(#kj-sky)" />
            <path
                d="M0 150 L400 150 L400 240 L0 240 Z"
                fill="oklch(0.55 0.1 142)"
            />
            <g opacity="0.55">
                <path
                    d="M0 175 Q200 165 400 175"
                    stroke="oklch(0.42 0.09 148)"
                    strokeWidth="1"
                    fill="none"
                />
                <path
                    d="M0 200 Q200 190 400 200"
                    stroke="oklch(0.42 0.09 148)"
                    strokeWidth="1"
                    fill="none"
                />
                <path
                    d="M0 225 Q200 215 400 225"
                    stroke="oklch(0.42 0.09 148)"
                    strokeWidth="1"
                    fill="none"
                />
            </g>

            {[
                { cx: 70, cy: 165, r: 28 },
                { cx: 180, cy: 155, r: 32 },
                { cx: 290, cy: 165, r: 28 },
                { cx: 360, cy: 175, r: 22 },
                { cx: 130, cy: 195, r: 24 },
                { cx: 240, cy: 200, r: 26 },
                { cx: 50, cy: 210, r: 20 },
            ].map((tree, i) => (
                <g key={i}>
                    <rect
                        x={tree.cx - 2}
                        y={tree.cy + tree.r * 0.5}
                        width="4"
                        height={tree.r * 0.6}
                        fill="oklch(0.35 0.05 50)"
                    />
                    <circle
                        cx={tree.cx}
                        cy={tree.cy}
                        r={tree.r}
                        fill="oklch(0.42 0.09 148)"
                    />
                    <circle
                        cx={tree.cx - tree.r * 0.3}
                        cy={tree.cy - tree.r * 0.2}
                        r={tree.r * 0.7}
                        fill="oklch(0.5 0.1 144)"
                    />
                    <circle
                        cx={tree.cx + tree.r * 0.2}
                        cy={tree.cy + tree.r * 0.1}
                        r="3"
                        fill="oklch(0.78 0.13 80)"
                    />
                    <circle
                        cx={tree.cx - tree.r * 0.4}
                        cy={tree.cy + tree.r * 0.2}
                        r="3"
                        fill="oklch(0.78 0.13 80)"
                    />
                    <circle
                        cx={tree.cx + tree.r * 0.4}
                        cy={tree.cy - tree.r * 0.1}
                        r="3"
                        fill="oklch(0.78 0.13 80)"
                    />
                </g>
            ))}

            <circle
                cx="340"
                cy="55"
                r="20"
                fill="oklch(0.88 0.13 78)"
                opacity="0.8"
            />
        </svg>
    );
}

export function GolokTarisiIllustration({
    className,
    ...props
}: IllustrationProps) {
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 280"
            className={className}
            preserveAspectRatio="xMidYMid slice"
            {...props}
        >
            <defs>
                <radialGradient id="forge" cx="0.45" cy="0.65" r="0.45">
                    <stop offset="0%" stopColor="oklch(0.85 0.18 55)" />
                    <stop
                        offset="60%"
                        stopColor="oklch(0.55 0.15 40)"
                        stopOpacity="0.6"
                    />
                    <stop
                        offset="100%"
                        stopColor="oklch(0.22 0.012 70)"
                        stopOpacity="0"
                    />
                </radialGradient>
                <linearGradient id="blade" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="oklch(0.78 0.04 80)" />
                    <stop offset="50%" stopColor="oklch(0.95 0.02 80)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.05 80)" />
                </linearGradient>
            </defs>
            <rect width="400" height="280" fill="oklch(0.22 0.012 70)" />
            <circle cx="180" cy="180" r="160" fill="url(#forge)" />

            <g transform="translate(60 130) rotate(-15)">
                <path
                    d="M0 30 L240 0 L260 14 L240 28 L0 50 Z"
                    fill="url(#blade)"
                />
                <path d="M240 0 L260 14 L240 28 Z" fill="oklch(0.68 0.05 80)" />
                <rect
                    x="-50"
                    y="22"
                    width="58"
                    height="20"
                    rx="3"
                    fill="oklch(0.32 0.05 50)"
                />
                <rect
                    x="-54"
                    y="20"
                    width="6"
                    height="24"
                    rx="2"
                    fill="oklch(0.78 0.13 80)"
                />
            </g>

            <g opacity="0.7">
                <circle cx="220" cy="80" r="3" fill="oklch(0.85 0.18 55)" />
                <circle cx="260" cy="60" r="2" fill="oklch(0.85 0.18 55)" />
                <circle cx="290" cy="100" r="2.5" fill="oklch(0.85 0.18 55)" />
                <circle cx="320" cy="70" r="2" fill="oklch(0.85 0.18 55)" />
                <circle cx="200" cy="50" r="2" fill="oklch(0.85 0.18 55)" />
                <circle cx="340" cy="120" r="2" fill="oklch(0.85 0.18 55)" />
            </g>
        </svg>
    );
}
