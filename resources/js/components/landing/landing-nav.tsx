import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { dashboard, login, register } from '@/routes';
import { JasingaMark } from './jasinga-mark';

const NAV_LINKS = [
    { label: 'Jelajah', href: '#jelajah' },
    { label: 'Desa', href: '#desa' },
    { label: 'Budaya', href: '#budaya' },
    { label: 'UMKM', href: '#umkm' },
    { label: 'Data', href: '#data' },
    { label: 'Berita', href: '#berita' },
];

export function LandingNav({ canRegister }: { canRegister: boolean }) {
    const { auth } = usePage().props;
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b border-jasinga-forest/10 bg-jasinga-ivory/85 backdrop-blur'
                    : 'border-b border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-2.5 text-jasinga-charcoal"
                >
                    <JasingaMark className="h-9 w-9" />
                    <div className="leading-tight">
                        <p className="font-display text-lg font-semibold tracking-tight">
                            Jasinga
                        </p>
                        <p className="text-[10px] font-medium tracking-[0.18em] text-jasinga-slate uppercase">
                            Digital Gateway
                        </p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-jasinga-charcoal/85 transition hover:text-jasinga-forest"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 lg:flex">
                    {auth.user ? (
                        <Link
                            href={dashboard()}
                            className="inline-flex items-center rounded-full bg-jasinga-forest px-5 py-2 text-sm font-semibold text-jasinga-ivory shadow-sm transition hover:bg-jasinga-canopy"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-jasinga-charcoal/85 transition hover:text-jasinga-forest"
                            >
                                Masuk
                            </Link>
                            {canRegister && (
                                <Link
                                    href={register()}
                                    className="inline-flex items-center rounded-full bg-jasinga-forest px-5 py-2 text-sm font-semibold text-jasinga-ivory shadow-sm transition hover:bg-jasinga-canopy"
                                >
                                    Bergabung
                                </Link>
                            )}
                        </>
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-jasinga-forest/15 bg-jasinga-ivory/70 text-jasinga-charcoal lg:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            {open && (
                <div className="border-t border-jasinga-forest/10 bg-jasinga-ivory/95 backdrop-blur lg:hidden">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-jasinga-charcoal/90 hover:bg-jasinga-sand"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-2 flex gap-2">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="flex-1 rounded-full bg-jasinga-forest px-4 py-2 text-center text-sm font-semibold text-jasinga-ivory"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="flex-1 rounded-full border border-jasinga-forest/20 px-4 py-2 text-center text-sm font-medium text-jasinga-charcoal"
                                    >
                                        Masuk
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="flex-1 rounded-full bg-jasinga-forest px-4 py-2 text-center text-sm font-semibold text-jasinga-ivory"
                                        >
                                            Bergabung
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
