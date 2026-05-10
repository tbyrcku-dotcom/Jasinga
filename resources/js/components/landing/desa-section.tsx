const DESA_LIST = [
    'Bagoang',
    'Barengkok',
    'Cikopomayak',
    'Curug',
    'Jasinga',
    'Jugala Jaya',
    'Kalong Sawah',
    'Koleang',
    'Neglasari',
    'Pamagersari',
    'Pangaur',
    'Pangradin',
    'Setu',
    'Sipak',
    'Tegalwangi',
    'Wirajaya',
];

export function DesaSection() {
    return (
        <section
            id="desa"
            className="relative isolate overflow-hidden bg-jasinga-forest py-20 text-jasinga-ivory sm:py-24"
        >
            <div
                aria-hidden="true"
                className="absolute -top-32 -right-20 h-72 w-72 rounded-full"
                style={{
                    background:
                        'radial-gradient(circle, oklch(0.78 0.13 80 / 0.25), transparent 70%)',
                }}
            />
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-xl">
                        <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-gold uppercase">
                            Direktori Desa
                        </p>
                        <h2 className="mt-3 font-display text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
                            16 desa, satu{' '}
                            <em className="font-display text-jasinga-gold italic">
                                Jasinga.
                            </em>
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-jasinga-ivory/75">
                        Setiap desa nantinya punya halaman profil sendiri —
                        lengkap dengan potensi, kontak, agenda, dan kanal
                        kontribusi warga. Semua dikelola operator desa lewat
                        dashboard.
                    </p>
                </div>

                <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {DESA_LIST.map((desa, index) => (
                        <li key={desa}>
                            <a
                                href={`#desa-${desa.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group flex items-center gap-4 rounded-2xl border border-jasinga-ivory/10 bg-jasinga-ivory/[0.04] px-5 py-4 transition hover:border-jasinga-gold/40 hover:bg-jasinga-ivory/[0.08]"
                            >
                                <span className="font-display text-xs tracking-[0.22em] text-jasinga-ivory/40 uppercase">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="font-display text-lg font-medium text-jasinga-ivory transition group-hover:text-jasinga-gold">
                                    {desa}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
