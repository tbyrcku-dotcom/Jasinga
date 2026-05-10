import { ArrowUpRight, Camera, MessageSquareText, Pencil } from 'lucide-react';
import { BatikPattern } from './illustrations/batik-pattern';

const CONTRIBUTIONS = [
    {
        icon: <Camera className="h-5 w-5" />,
        title: 'Foto destinasi & desa',
        body: 'Kirim dokumentasi lapangan untuk memperkaya galeri.',
    },
    {
        icon: <Pencil className="h-5 w-5" />,
        title: 'Cerita & arsip budaya',
        body: 'Tuliskan kisah, tradisi, atau tokoh lokal Jasinga.',
    },
    {
        icon: <MessageSquareText className="h-5 w-5" />,
        title: 'Koreksi data publik',
        body: 'Bantu memverifikasi angka & sumber data wilayah.',
    },
];

export function KontribusiCta() {
    return (
        <section className="relative isolate overflow-hidden bg-jasinga-ivory py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                <div className="relative overflow-hidden rounded-[2rem] bg-jasinga-canopy px-8 py-16 text-jasinga-ivory sm:px-14 sm:py-20">
                    <BatikPattern className="absolute inset-0 h-full w-full text-jasinga-ivory opacity-[0.08]" />
                    <div
                        aria-hidden="true"
                        className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full"
                        style={{
                            background:
                                'radial-gradient(circle, oklch(0.78 0.13 80 / 0.4), transparent 70%)',
                        }}
                    />
                    <div className="relative grid gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-6">
                            <p className="text-[11px] font-semibold tracking-[0.22em] text-jasinga-gold uppercase">
                                Suara Warga
                            </p>
                            <h2 className="mt-3 font-display text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
                                Jasinga ditulis bersama,{' '}
                                <em className="font-display text-jasinga-gold italic">
                                    bukan oleh sebagian.
                                </em>
                            </h2>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-jasinga-ivory/80">
                                Kirim foto, cerita, profil UMKM, atau koreksi
                                data. Setiap kontribusi melewati moderasi editor
                                sebelum dipublikasikan agar konten tetap
                                kredibel.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#kontribusi"
                                    className="inline-flex items-center gap-2 rounded-full bg-jasinga-gold px-6 py-3 text-sm font-semibold text-jasinga-charcoal transition hover:bg-jasinga-ivory"
                                >
                                    Mulai berkontribusi
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                                <a
                                    href="#kontribusi"
                                    className="inline-flex items-center gap-2 rounded-full border border-jasinga-ivory/25 px-6 py-3 text-sm font-semibold text-jasinga-ivory transition hover:border-jasinga-ivory/50"
                                >
                                    Pelajari proses moderasi
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <ul className="space-y-3">
                                {CONTRIBUTIONS.map((item) => (
                                    <li
                                        key={item.title}
                                        className="flex items-start gap-4 rounded-2xl border border-jasinga-ivory/15 bg-jasinga-ivory/[0.06] p-5"
                                    >
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-jasinga-gold text-jasinga-charcoal">
                                            {item.icon}
                                        </span>
                                        <div>
                                            <p className="font-display text-lg font-medium">
                                                {item.title}
                                            </p>
                                            <p className="mt-1 text-sm text-jasinga-ivory/75">
                                                {item.body}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
