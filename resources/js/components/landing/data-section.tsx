import { Database, Download, ExternalLink, ShieldCheck } from 'lucide-react';

const DATAPOINTS = [
    {
        figure: '113.935',
        unit: 'jiwa',
        label: 'Penduduk',
        source: 'BESTIE Kabupaten Bogor',
        accent: 'forest',
    },
    {
        figure: '107.493',
        unit: 'jiwa',
        label: 'Penduduk (versi portal kecamatan)',
        source: 'kecamatanjasinga.bogorkab.go.id',
        accent: 'gold',
    },
    {
        figure: '14.340,74',
        unit: 'ha',
        label: 'Luas Wilayah',
        source: 'BESTIE Kabupaten Bogor',
        accent: 'forest',
    },
    {
        figure: '35.190',
        unit: 'KK',
        label: 'Keluarga',
        source: 'BESTIE Kabupaten Bogor',
        accent: 'forest',
    },
    {
        figure: '16',
        unit: 'desa',
        label: 'Desa',
        source: 'Portal Kecamatan Jasinga',
        accent: 'gold',
    },
    {
        figure: '2025',
        unit: 'edisi',
        label: 'Jasinga Dalam Angka',
        source: 'BPS Kabupaten Bogor',
        accent: 'forest',
    },
] as const;

const ACCENT_BG: Record<(typeof DATAPOINTS)[number]['accent'], string> = {
    forest: 'bg-jasinga-forest/8',
    gold: 'bg-jasinga-gold/15',
};

export function DataSection() {
    return (
        <section
            id="data"
            className="relative bg-jasinga-sand/40 py-24 sm:py-32"
        >
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <div className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-moss uppercase">
                            Data Center Jasinga
                        </p>
                        <h2 className="mt-3 font-display text-4xl leading-[1.05] font-medium tracking-tight text-jasinga-charcoal sm:text-5xl">
                            Setiap angka{' '}
                            <em className="font-display italic">
                                punya sumber.
                            </em>
                        </h2>
                        <p className="mt-6 text-base leading-relaxed text-jasinga-slate">
                            Angka penduduk Jasinga berbeda antara portal resmi
                            kecamatan dan profil BESTIE Kabupaten Bogor.
                            Platform ini tidak menyembunyikan perbedaan itu —
                            semua dipajang lengkap dengan tahun & sumber data.
                        </p>

                        <div className="mt-8 space-y-3">
                            <Feature
                                icon={<ShieldCheck className="h-4 w-4" />}
                                title="Data Source Versioning"
                                body="Setiap statistik mencatat angka, tahun, sumber, dan tanggal verifikasi."
                            />
                            <Feature
                                icon={<Database className="h-4 w-4" />}
                                title="Terhubung BPS"
                                body="Modul Data Center mengacu publikasi resmi Jasinga Dalam Angka."
                            />
                            <Feature
                                icon={<Download className="h-4 w-4" />}
                                title="Bisa Diunduh"
                                body="Setiap dataset publik dapat diunduh dalam format CSV / PDF."
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
                        {DATAPOINTS.map((point) => (
                            <div
                                key={point.label}
                                className={`flex flex-col justify-between rounded-2xl border border-jasinga-charcoal/8 p-6 ${ACCENT_BG[point.accent]}`}
                            >
                                <div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="font-display text-3xl font-semibold text-jasinga-charcoal sm:text-4xl">
                                            {point.figure}
                                        </span>
                                        <span className="text-sm font-medium text-jasinga-slate">
                                            {point.unit}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm font-semibold text-jasinga-charcoal/85">
                                        {point.label}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.16em] text-jasinga-slate uppercase">
                                    <ExternalLink className="h-3 w-3" />
                                    {point.source}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Feature({
    icon,
    title,
    body,
}: {
    icon: React.ReactNode;
    title: string;
    body: string;
}) {
    return (
        <div className="flex items-start gap-3 rounded-xl border border-jasinga-charcoal/6 bg-jasinga-ivory/70 p-4">
            <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-jasinga-forest text-jasinga-ivory">
                {icon}
            </span>
            <div>
                <p className="text-sm font-semibold text-jasinga-charcoal">
                    {title}
                </p>
                <p className="text-sm text-jasinga-slate">{body}</p>
            </div>
        </div>
    );
}
