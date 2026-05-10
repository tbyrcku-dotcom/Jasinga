import { ArrowUpRight, BadgeCheck, MapPin, Phone } from 'lucide-react';

type UMKM = {
    name: string;
    desa: string;
    category: string;
    products: string;
    palette: 'leaf' | 'gold' | 'ember' | 'forest';
    initial: string;
    verified?: boolean;
};

const UMKM_LIST: UMKM[] = [
    {
        name: 'Pawon Kuring Koleang',
        desa: 'Desa Koleang',
        category: 'Kuliner',
        products: 'Nasi liwet · sambal lokal · paket camping',
        palette: 'leaf',
        initial: 'PK',
        verified: true,
    },
    {
        name: 'Pandai Besi Tarisi',
        desa: 'Desa Bagoang',
        category: 'Kerajinan',
        products: 'Golok · pisau dapur · alat tani',
        palette: 'ember',
        initial: 'PT',
        verified: true,
    },
    {
        name: 'Jeruk Manis Sipak',
        desa: 'Desa Sipak',
        category: 'Pertanian',
        products: 'Jeruk segar · sirup jeruk · selai',
        palette: 'gold',
        initial: 'JM',
    },
    {
        name: 'Anyam Pangradin',
        desa: 'Desa Pangradin',
        category: 'Kerajinan',
        products: 'Bilik bambu · suvenir · dekorasi',
        palette: 'forest',
        initial: 'AP',
    },
];

const PALETTE_BG: Record<UMKM['palette'], string> = {
    leaf: 'bg-jasinga-leaf/30',
    gold: 'bg-jasinga-gold/30',
    ember: 'bg-jasinga-ember/25',
    forest: 'bg-jasinga-forest/15',
};

const PALETTE_FG: Record<UMKM['palette'], string> = {
    leaf: 'text-jasinga-forest',
    gold: 'text-jasinga-charcoal',
    ember: 'text-jasinga-ember',
    forest: 'text-jasinga-forest',
};

export function UmkmSection() {
    return (
        <section id="umkm" className="relative bg-jasinga-ivory py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <div className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-moss uppercase">
                            UMKM Lokal
                        </p>
                        <h2 className="mt-3 font-display text-4xl leading-[1.05] font-medium tracking-tight text-jasinga-charcoal sm:text-5xl">
                            Etalase ekonomi{' '}
                            <em className="font-display italic">warga.</em>
                        </h2>
                        <p className="mt-6 text-base leading-relaxed text-jasinga-slate">
                            Bukan sekadar daftar toko — tapi profil pelaku usaha
                            yang dilengkapi katalog produk, lokasi, kontak, dan
                            badge verifikasi agar kamu bisa berbelanja dengan
                            yakin.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <Stat label="Kategori UMKM" value="6+" />
                            <Stat label="Calon Mitra" value="50+" />
                            <Stat label="Verifikasi" value="3 Tahap" />
                            <Stat label="Klaim Usaha" value="Gratis" />
                        </div>

                        <a
                            href="#umkm"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-jasinga-forest px-6 py-3 text-sm font-semibold text-jasinga-ivory transition hover:bg-jasinga-canopy"
                        >
                            Lihat direktori UMKM
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
                        {UMKM_LIST.map((umkm) => (
                            <article
                                key={umkm.name}
                                className="group flex flex-col rounded-2xl border border-jasinga-charcoal/8 bg-jasinga-sand/40 p-6 transition hover:-translate-y-0.5 hover:border-jasinga-forest/20 hover:bg-jasinga-sand/70 hover:shadow-lg hover:shadow-jasinga-forest/5"
                            >
                                <div className="flex items-start justify-between">
                                    <div
                                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${PALETTE_BG[umkm.palette]} ${PALETTE_FG[umkm.palette]} font-display text-xl font-semibold`}
                                    >
                                        {umkm.initial}
                                    </div>
                                    <span className="rounded-full bg-jasinga-charcoal/5 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-jasinga-charcoal/70 uppercase">
                                        {umkm.category}
                                    </span>
                                </div>
                                <h3 className="mt-5 flex items-center gap-2 font-display text-xl font-medium text-jasinga-charcoal">
                                    {umkm.name}
                                    {umkm.verified && (
                                        <BadgeCheck className="h-4 w-4 text-jasinga-forest" />
                                    )}
                                </h3>
                                <div className="mt-1 flex items-center gap-1 text-xs text-jasinga-slate">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {umkm.desa}
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-jasinga-slate">
                                    {umkm.products}
                                </p>
                                <div className="mt-5 flex items-center justify-between border-t border-jasinga-charcoal/8 pt-4">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-jasinga-slate">
                                        <Phone className="h-3.5 w-3.5" />
                                        Kontak via WhatsApp
                                    </span>
                                    <span className="font-display text-sm font-semibold text-jasinga-forest transition group-hover:translate-x-0.5">
                                        Profil →
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-xl border border-jasinga-charcoal/8 bg-jasinga-sand/40 p-4">
            <p className="font-display text-2xl font-semibold text-jasinga-forest">
                {value}
            </p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-jasinga-slate uppercase">
                {label}
            </p>
        </div>
    );
}
