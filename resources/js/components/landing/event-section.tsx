import { ArrowUpRight, Calendar, Newspaper } from 'lucide-react';

const EVENTS = [
    {
        date: 'Agt 2026',
        title: 'Festival Golok Tarisi',
        venue: 'Kampung Tarisi · Bagoang',
        category: 'Festival Budaya',
    },
    {
        date: 'Sep 2026',
        title: 'Pekan UMKM Jasinga',
        venue: 'Alun-alun Kecamatan',
        category: 'Ekonomi Lokal',
    },
    {
        date: 'Okt 2026',
        title: 'Camp Setu Kadongdong',
        venue: 'Desa Wisata Koleang',
        category: 'Wisata Alam',
    },
];

const NEWS = [
    {
        category: 'Berita Desa',
        title: '16 Desa Jasinga mulai memetakan profil digital',
        excerpt:
            'Operator desa diundang menggunakan dashboard untuk memperbarui profil, agenda, dan potensi desa secara mandiri.',
    },
    {
        category: 'Liputan Budaya',
        title: 'Pandai besi Tarisi: warisan yang masih ditempa',
        excerpt:
            'Catatan media nasional menempatkan Golok Tarisi sebagai bagian dari peta warisan budaya Bogor Barat.',
    },
];

export function EventSection() {
    return (
        <section
            id="berita"
            className="relative bg-jasinga-ivory py-24 sm:py-32"
        >
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <div className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-moss uppercase">
                            Agenda & Berita
                        </p>
                        <h2 className="mt-3 font-display text-4xl leading-[1.05] font-medium tracking-tight text-jasinga-charcoal sm:text-5xl">
                            Yang sedang{' '}
                            <em className="font-display italic">terjadi</em> di
                            Jasinga.
                        </h2>

                        <div className="mt-8 space-y-3">
                            {EVENTS.map((event) => (
                                <article
                                    key={event.title}
                                    className="group flex items-center gap-5 rounded-2xl border border-jasinga-charcoal/8 bg-jasinga-sand/40 p-5 transition hover:border-jasinga-forest/20 hover:bg-jasinga-sand/70"
                                >
                                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-jasinga-forest text-jasinga-ivory">
                                        <Calendar className="h-4 w-4 opacity-70" />
                                        <span className="mt-0.5 text-[10px] font-bold tracking-wide">
                                            {event.date}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-semibold tracking-[0.18em] text-jasinga-slate uppercase">
                                            {event.category}
                                        </p>
                                        <h3 className="mt-0.5 font-display text-lg font-medium text-jasinga-charcoal">
                                            {event.title}
                                        </h3>
                                        <p className="text-xs text-jasinga-slate">
                                            {event.venue}
                                        </p>
                                    </div>
                                    <ArrowUpRight className="h-4 w-4 text-jasinga-charcoal/40 transition group-hover:text-jasinga-forest" />
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid gap-5 sm:grid-cols-2">
                            {NEWS.map((article) => (
                                <article
                                    key={article.title}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-jasinga-charcoal/8 bg-jasinga-sand/40 p-7 transition hover:border-jasinga-forest/20 hover:bg-jasinga-sand/70"
                                >
                                    <Newspaper className="h-7 w-7 text-jasinga-forest" />
                                    <p className="mt-6 text-[10px] font-semibold tracking-[0.18em] text-jasinga-slate uppercase">
                                        {article.category}
                                    </p>
                                    <h3 className="mt-3 font-display text-xl leading-snug font-medium text-jasinga-charcoal">
                                        {article.title}
                                    </h3>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-jasinga-slate">
                                        {article.excerpt}
                                    </p>
                                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-jasinga-forest transition group-hover:translate-x-0.5">
                                        Baca selengkapnya
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </article>
                            ))}
                        </div>

                        <div
                            id="peta"
                            className="mt-5 flex flex-col items-start gap-4 rounded-2xl border border-jasinga-forest/10 bg-jasinga-forest/5 p-7 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-forest uppercase">
                                    Peta Interaktif
                                </p>
                                <h3 className="mt-2 font-display text-2xl font-medium text-jasinga-charcoal">
                                    Jelajahi 16 desa, destinasi, dan UMKM dalam
                                    satu peta.
                                </h3>
                            </div>
                            <a
                                href="#peta"
                                className="inline-flex items-center gap-2 rounded-full bg-jasinga-forest px-5 py-3 text-sm font-semibold text-jasinga-ivory transition hover:bg-jasinga-canopy"
                            >
                                Buka peta
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
