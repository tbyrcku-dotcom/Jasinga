import { JasingaMark } from './jasinga-mark';

const LINK_GROUPS = [
    {
        title: 'Jelajah',
        links: [
            { label: 'Wisata', href: '#jelajah' },
            { label: 'Desa', href: '#desa' },
            { label: 'Budaya', href: '#budaya' },
            { label: 'UMKM', href: '#umkm' },
            { label: 'Peta Interaktif', href: '#peta' },
        ],
    },
    {
        title: 'Data',
        links: [
            { label: 'Data Center', href: '#data' },
            { label: 'Statistik Desa', href: '#data' },
            { label: 'Sumber Resmi', href: '#data' },
            { label: 'Unduh Dataset', href: '#data' },
        ],
    },
    {
        title: 'Layanan',
        links: [
            { label: 'Layanan Warga', href: '#layanan' },
            { label: 'Pengaduan', href: '#layanan' },
            { label: 'Kontribusi Warga', href: '#kontribusi' },
            { label: 'Bergabung sebagai UMKM', href: '#umkm' },
        ],
    },
];

export function LandingFooter() {
    return (
        <footer className="bg-jasinga-charcoal text-jasinga-ivory">
            <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3">
                            <JasingaMark className="h-12 w-12" />
                            <div>
                                <p className="font-display text-2xl font-semibold tracking-tight">
                                    Jasinga
                                </p>
                                <p className="text-[11px] font-medium tracking-[0.22em] text-jasinga-ivory/60 uppercase">
                                    Digital Gateway
                                </p>
                            </div>
                        </div>
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-jasinga-ivory/70">
                            Platform digital untuk memperkenalkan Jasinga
                            sebagai gerbang alam, budaya, UMKM, dan data publik
                            Bogor Barat.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
                        {LINK_GROUPS.map((group) => (
                            <div key={group.title}>
                                <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-gold uppercase">
                                    {group.title}
                                </p>
                                <ul className="mt-4 space-y-2.5">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-sm text-jasinga-ivory/75 transition hover:text-jasinga-ivory"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-4 border-t border-jasinga-ivory/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-jasinga-ivory/60">
                        © {new Date().getFullYear()} Jasinga Digital Gateway.
                        Dibangun bersama warga, desa, dan pegiat lokal.
                    </p>
                    <p className="text-[11px] font-medium tracking-[0.18em] text-jasinga-ivory/45 uppercase">
                        Bogor Barat · Jawa Barat · Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
}
