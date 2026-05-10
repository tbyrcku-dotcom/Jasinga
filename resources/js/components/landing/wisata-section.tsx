import { ArrowUpRight, Clock, MapPin } from 'lucide-react';

type Destination = {
    slug: string;
    name: string;
    desa: string;
    tag: string;
    blurb: string;
    duration: string;
    image: string;
    imageAlt: string;
    imagePosition?: string;
    featured?: boolean;
};

const DESTINATIONS: Destination[] = [
    {
        slug: 'desa-wisata-koleang',
        name: 'Desa Wisata Koleang',
        desa: 'Desa Koleang',
        tag: 'Desa Wisata Rintisan',
        blurb: 'Jalur strategis Bogor–Lebak. Setu Kadongdong, jungle tracking, kuliner lokal, balai pertemuan warga, dan spot foto.',
        duration: '½ – 1 hari',
        image: '/images/landing/koleang.jpg',
        imageAlt:
            'Lanskap perkebunan dan perbukitan Jawa Barat — gambaran suasana Desa Wisata Koleang.',
        featured: true,
    },
    {
        slug: 'setu-kadongdong',
        name: 'Setu Kadongdong',
        desa: 'Desa Koleang',
        tag: 'Wisata Air',
        blurb: 'Setu (telaga) yang menjadi nadi Desa Wisata Koleang. Spot foto sore, perahu kecil, dan area kuliner di sekitarnya.',
        duration: '2 – 3 jam',
        image: '/images/landing/setu.jpg',
        imageAlt:
            'Permukaan danau yang tenang dikelilingi pepohonan hijau — gambaran Setu Kadongdong.',
    },
    {
        slug: 'kebun-jeruk-jasinga',
        name: 'Kebun Jeruk Jasinga',
        desa: 'Beberapa Desa',
        tag: 'Agrowisata',
        blurb: 'Hamparan kebun jeruk yang membuka pengalaman petik buah, edukasi pertanian, dan oleh-oleh segar khas Jasinga.',
        duration: '2 – 4 jam',
        image: '/images/landing/kebun-jeruk.jpg',
        imageAlt:
            'Buah jeruk matang menggantung di dahan — gambaran kebun jeruk Jasinga.',
        imagePosition: 'object-[center_30%]',
    },
];

export function WisataSection() {
    const [featured, ...rest] = DESTINATIONS;

    return (
        <section
            id="jelajah"
            className="relative bg-jasinga-sand/40 py-24 sm:py-32"
        >
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-moss uppercase">
                            Jelajah Jasinga
                        </p>
                        <h2 className="mt-3 font-display text-4xl leading-[1.05] font-medium tracking-tight text-jasinga-charcoal sm:text-5xl">
                            Destinasi yang menunggu untuk{' '}
                            <em className="font-display italic">ditemukan.</em>
                        </h2>
                    </div>
                    <a
                        href="#jelajah"
                        className="inline-flex items-center gap-2 self-start rounded-full border border-jasinga-forest/15 bg-jasinga-ivory px-5 py-2.5 text-sm font-semibold text-jasinga-forest transition hover:bg-jasinga-forest hover:text-jasinga-ivory"
                    >
                        Lihat semua destinasi
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-12">
                    <DestinationCard destination={featured} large />
                    <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                        {rest.map((destination) => (
                            <DestinationCard
                                key={destination.slug}
                                destination={destination}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function DestinationCard({
    destination,
    large,
}: {
    destination: Destination;
    large?: boolean;
}) {
    return (
        <article
            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-jasinga-charcoal/8 bg-jasinga-ivory shadow-sm transition hover:shadow-xl hover:shadow-jasinga-forest/10 ${
                large ? 'lg:col-span-7' : ''
            }`}
        >
            <div
                className={`relative overflow-hidden ${
                    large ? 'aspect-[16/10]' : 'aspect-[16/9]'
                }`}
            >
                <img
                    src={destination.image}
                    alt={destination.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                        destination.imagePosition ?? ''
                    }`}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(180deg, transparent 50%, oklch(0.22 0.012 70 / 0.35) 100%)',
                    }}
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-jasinga-charcoal/55 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-jasinga-ivory uppercase backdrop-blur">
                    {destination.tag}
                </div>
                {destination.featured && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-jasinga-gold px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-jasinga-charcoal uppercase">
                        Unggulan
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3 text-xs text-jasinga-slate">
                    <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {destination.desa}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-jasinga-slate/40" />
                    <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {destination.duration}
                    </span>
                </div>
                <h3
                    className={`mt-3 font-display font-medium text-jasinga-charcoal ${
                        large ? 'text-3xl sm:text-4xl' : 'text-2xl'
                    }`}
                >
                    {destination.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-jasinga-slate">
                    {destination.blurb}
                </p>
                <a
                    href={`#${destination.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-jasinga-forest transition group-hover:gap-2.5"
                >
                    Pelajari destinasi
                    <ArrowUpRight className="h-4 w-4" />
                </a>
            </div>
        </article>
    );
}
