import { useEffect, useMemo, useState } from 'react';
import { AboutSection } from '../components/AboutSection';
import { EditorialGallerySection } from '../components/EditorialGallerySection';
import { EditorialStatement } from '../components/EditorialStatement';
import { HeroSection } from '../components/HeroSection';
import { JournalSection } from '../components/JournalSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { UniverseSection } from '../components/UniverseSection';
import { hero } from '../data/siteData';
import { getSiteSettings } from '../lib/contentService';

export function HomePage() {
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    let cancelled = false;

    getSiteSettings()
      .then((settings) => {
        if (!cancelled) {
          setSiteSettings(settings);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setSiteSettings(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const heroData = useMemo(() => ({
    ...hero,
    image: siteSettings?.heroPrimaryImageUrl || hero.image,
    imageSecondary: siteSettings?.heroSecondaryImageUrl || hero.imageSecondary,
  }), [siteSettings]);

  return (
    <>
      <HeroSection heroData={heroData} />
      <EditorialGallerySection />
      <EditorialStatement />
      <AboutSection />
      <UniverseSection />
      <ResourcesSection />
      <JournalSection />
      <NewsletterSection />
    </>
  );
}
