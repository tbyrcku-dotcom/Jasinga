import { ArrowUpRight, Quote } from 'lucide-react';
import { BatikPattern } from './illustrations/batik-pattern';
import { GolokTarisiIllustration } from './illustrations/wisata-illustrations';

const HIGHLIGHTS = [
    {
        title: 'Pandai Besi Tarisi',
        body: 'Tradisi tempa golok khas Kampung Tarisi, Desa Bagoang — diwariskan turun-temurun dengan teknik pemilihan baja, pemanasan bara, dan hentakan palu yang khas.',
    },
    {
        title: 'Bentuk & Filosofi',
        body: 'Bilah Golok Tarisi memiliki lengkung dan ukuran khas yang membedakan dari golok daerah lain — alat kerja sekaligus penanda identitas masyarakat Jasinga.',
    },
    {
        title: 'Diakui sebagai Warisan',
        body: 'Tercatat dalam liputan media nasional sebagai warisan budaya lokal Bogor — bagian dari rencana pelestarian seni-tradisi Bogor Barat.',
    },
];

export function BudayaSection() {
    return (
        <section
            id="budaya"
            className="relative isolate overflow-hidden bg-jasinga-charcoal py-24 text-jasinga-ivory sm:py-32"
        >
            <BatikPattern className="absolute inset-0 -z-10 h-full w-full text-jasinga-ivory opacity-[0.07]" />
            <div
                aria-hidden="true"
                className="absolute -top-40 -left-40 -z-10 h-[420px] w-[420px] rounded-full"
                style={{
                    background:
                        'radial-gradient(circle, oklch(0.65 0.15 55 / 0.35), transparent 70%)',
                }}
            />

            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-gold uppercase">
                            Warisan Budaya
                        </p>
                        <h2 className="mt-4 font-display text-4xl leading-[1.04] font-medium tracking-tight sm:text-5xl">
                            Golok Tarisi — bara yang{' '}
                            <em className="font-display text-jasinga-gold italic">
                                tak pernah padam
                            </em>{' '}
                            di Bagoang.
                        </h2>
                        <p className="mt-6 text-base leading-relaxed text-jasinga-ivory/75">
                            Di Kampung Tarisi, denting palu pandai besi sudah
                            terdengar lebih dari sekadar pekerjaan. Ia adalah
                            ritus — penanda bahwa Jasinga punya warisan yang
                            terus dijaga.
                        </p>

                        <div className="mt-8 rounded-2xl border border-jasinga-ivory/15 bg-jasinga-ivory/5 p-6">
                            <Quote className="h-6 w-6 text-jasinga-gold" />
                            <p className="mt-4 font-display text-xl leading-snug text-jasinga-ivory italic">
                                “Golok bagi orang Jasinga bukan sekadar alat —
                                ia adalah identitas yang ditempa dengan tangan
                                sendiri.”
                            </p>
                            <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-jasinga-ivory/60 uppercase">
                                Catatan dokumentasi · Kampung Tarisi
                            </p>
                        </div>

                        <a
                            href="#budaya"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-jasinga-gold px-6 py-3 text-sm font-semibold text-jasinga-charcoal transition hover:bg-jasinga-ivory"
                        >
                            Telusuri arsip budaya
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="overflow-hidden rounded-3xl border border-jasinga-ivory/10 bg-jasinga-charcoal/40">
                            <GolokTarisiIllustration className="aspect-[4/3] w-full" />
                        </div>

                        <div className="mt-8 grid gap-5 sm:grid-cols-3">
                            {HIGHLIGHTS.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-jasinga-ivory/10 bg-jasinga-ivory/[0.03] p-5"
                                >
                                    <p className="font-display text-xs tracking-[0.22em] text-jasinga-gold uppercase">
                                        0{index + 1}
                                    </p>
                                    <h3 className="mt-3 font-display text-lg font-medium">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-jasinga-ivory/70">
                                        {item.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
