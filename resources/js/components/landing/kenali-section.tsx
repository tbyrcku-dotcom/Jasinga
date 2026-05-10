import { Hammer, Mountain, Store } from 'lucide-react';
import type { ReactNode } from 'react';

type Pillar = {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    accent: 'forest' | 'ember' | 'gold';
    icon: ReactNode;
};

const PILLARS: Pillar[] = [
    {
        eyebrow: '01 · Alam',
        title: 'Alam & Wisata',
        description:
            'Setu Kadongdong, Desa Wisata Koleang, kebun jeruk, jalur jungle tracking, dan jejak hijau yang membentang di Bogor Barat.',
        href: '#jelajah',
        accent: 'forest',
        icon: <Mountain className="h-5 w-5" strokeWidth={1.6} />,
    },
    {
        eyebrow: '02 · Warisan',
        title: 'Budaya & Sejarah',
        description:
            'Tradisi pandai besi Golok Tarisi di Bagoang, cerita rakyat, arsip foto, dan tokoh-tokoh lokal yang membentuk identitas Jasinga.',
        href: '#budaya',
        accent: 'ember',
        icon: <Hammer className="h-5 w-5" strokeWidth={1.6} />,
    },
    {
        eyebrow: '03 · Ekonomi',
        title: 'UMKM & Desa',
        description:
            'Direktori 16 desa beserta pelaku usaha lokal — kuliner, kerajinan, pertanian, dan jasa — siap ditemukan dan didukung.',
        href: '#umkm',
        accent: 'gold',
        icon: <Store className="h-5 w-5" strokeWidth={1.6} />,
    },
];

const ACCENT_CLASSES: Record<Pillar['accent'], string> = {
    forest: 'bg-jasinga-forest text-jasinga-ivory',
    ember: 'bg-jasinga-ember text-jasinga-ivory',
    gold: 'bg-jasinga-gold text-jasinga-charcoal',
};

export function KenaliSection() {
    return (
        <section
            id="kenali"
            className="relative bg-jasinga-ivory py-24 sm:py-32"
        >
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <div className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-moss uppercase">
                            Kenali Jasinga
                        </p>
                        <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-jasinga-charcoal sm:text-5xl">
                            Bukan sekadar daerah di ujung barat Bogor.
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-jasinga-slate">
                            Jasinga adalah kecamatan dengan karakter alam,
                            budaya, desa, dan ekonomi lokal yang kuat. Platform
                            ini menghubungkan informasi wilayah, destinasi,
                            UMKM, data publik, dan layanan warga dalam satu
                            pengalaman digital yang rapi.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                            {PILLARS.map((pillar) => (
                                <a
                                    key={pillar.title}
                                    href={pillar.href}
                                    className="group relative flex items-start gap-5 rounded-2xl border border-jasinga-charcoal/8 bg-jasinga-sand/55 p-6 transition hover:-translate-y-0.5 hover:border-jasinga-forest/20 hover:bg-jasinga-sand/80 hover:shadow-lg hover:shadow-jasinga-forest/5 sm:p-7 lg:flex-row lg:items-center"
                                >
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${ACCENT_CLASSES[pillar.accent]}`}
                                    >
                                        {pillar.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-semibold tracking-[0.22em] text-jasinga-slate/80 uppercase">
                                            {pillar.eyebrow}
                                        </p>
                                        <h3 className="mt-1 font-display text-2xl font-medium text-jasinga-charcoal">
                                            {pillar.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-jasinga-slate">
                                            {pillar.description}
                                        </p>
                                    </div>
                                    <span
                                        aria-hidden="true"
                                        className="font-display text-3xl text-jasinga-forest/30 transition group-hover:translate-x-1 group-hover:text-jasinga-forest"
                                    >
                                        →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
