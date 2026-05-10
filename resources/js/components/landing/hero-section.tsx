import { ArrowRight, MapPinned } from 'lucide-react';
import { BatikPattern } from './illustrations/batik-pattern';

const STATS = [
    { value: '16', label: 'Desa' },
    { value: '113K+', label: 'Penduduk' },
    { value: '137 km²', label: 'Luas Wilayah' },
    { value: '5+', label: 'Destinasi Wisata' },
    { value: '∞', label: 'Cerita Lokal' },
];

export function HeroSection() {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <img
                    src="/images/landing/hero.jpg"
                    alt="Hamparan sawah dan perbukitan Bogor Barat saat senja — gambaran lanskap Jasinga."
                    className="h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(180deg, oklch(0.22 0.012 70 / 0.45) 0%, oklch(0.22 0.012 70 / 0.55) 35%, oklch(0.32 0.06 152 / 0.78) 100%)',
                    }}
                />
                <BatikPattern className="absolute inset-0 h-full w-full text-jasinga-ivory opacity-30 mix-blend-overlay" />
            </div>

            <div className="mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-5 pt-28 pb-12 sm:px-8 lg:pt-36 lg:pb-20">
                <div className="grow">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-jasinga-ivory/40 bg-jasinga-charcoal/30 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-jasinga-ivory uppercase backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-jasinga-gold" />
                            Bogor Barat · Jawa Barat
                        </span>

                        <h1 className="mt-6 font-display text-5xl leading-[1.02] font-medium tracking-tight text-jasinga-ivory sm:text-6xl lg:text-[5.5rem]">
                            Gerbang{' '}
                            <em className="font-display font-medium text-jasinga-gold italic">
                                budaya, alam,
                            </em>{' '}
                            dan ekonomi lokal{' '}
                            <span className="block">Jasinga.</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-jasinga-ivory/85 sm:text-lg">
                            Platform digital untuk menemukan 16 desa, destinasi
                            wisata, warisan Golok Tarisi, UMKM lokal, dan data
                            publik Jasinga — dirajut dalam satu pengalaman yang
                            kredibel dan modern.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#jelajah"
                                className="group inline-flex items-center gap-2 rounded-full bg-jasinga-ivory px-6 py-3 text-sm font-semibold text-jasinga-forest shadow-lg shadow-jasinga-charcoal/20 transition hover:bg-jasinga-gold hover:text-jasinga-charcoal"
                            >
                                Jelajahi Wisata
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#peta"
                                className="inline-flex items-center gap-2 rounded-full border border-jasinga-ivory/40 bg-jasinga-charcoal/20 px-6 py-3 text-sm font-semibold text-jasinga-ivory backdrop-blur transition hover:bg-jasinga-charcoal/40"
                            >
                                <MapPinned className="h-4 w-4" />
                                Lihat Peta Interaktif
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="rounded-3xl border border-jasinga-ivory/25 bg-jasinga-charcoal/30 px-6 py-5 backdrop-blur-md sm:px-8">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                            {STATS.map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                    <span className="font-display text-3xl font-semibold text-jasinga-ivory sm:text-4xl">
                                        {stat.value}
                                    </span>
                                    <span className="mt-1 text-[11px] font-medium tracking-[0.18em] text-jasinga-ivory/70 uppercase">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
