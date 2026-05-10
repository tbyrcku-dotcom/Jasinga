import { Head } from '@inertiajs/react';
import { BudayaSection } from '@/components/landing/budaya-section';
import { DataSection } from '@/components/landing/data-section';
import { DesaSection } from '@/components/landing/desa-section';
import { EventSection } from '@/components/landing/event-section';
import { HeroSection } from '@/components/landing/hero-section';
import { KenaliSection } from '@/components/landing/kenali-section';
import { KontribusiCta } from '@/components/landing/kontribusi-cta';
import { LandingFooter } from '@/components/landing/landing-footer';
import { LandingNav } from '@/components/landing/landing-nav';
import { UmkmSection } from '@/components/landing/umkm-section';
import { WisataSection } from '@/components/landing/wisata-section';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    return (
        <>
            <Head>
                <title>
                    Jasinga Digital Gateway · Gerbang Alam, Budaya, UMKM & Data
                    Bogor Barat
                </title>
                <meta
                    name="description"
                    content="Jasinga Digital Gateway adalah platform digital untuk memperkenalkan Jasinga, Bogor Barat — wisata, 16 desa, warisan Golok Tarisi, UMKM lokal, dan data publik dalam satu pengalaman digital modern."
                />
                <meta property="og:title" content="Jasinga Digital Gateway" />
                <meta
                    property="og:description"
                    content="Gerbang alam, budaya, UMKM, dan data publik Bogor Barat."
                />
                <meta property="og:type" content="website" />
                <meta name="theme-color" content="oklch(0.32 0.06 152)" />
            </Head>

            <div className="min-h-screen bg-jasinga-ivory font-sans text-jasinga-charcoal antialiased">
                <LandingNav canRegister={canRegister} />
                <main>
                    <HeroSection />
                    <KenaliSection />
                    <WisataSection />
                    <DesaSection />
                    <BudayaSection />
                    <UmkmSection />
                    <DataSection />
                    <EventSection />
                    <KontribusiCta />
                </main>
                <LandingFooter />
            </div>
        </>
    );
}
