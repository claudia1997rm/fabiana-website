import { useEffect, useMemo, useState } from 'react';
import { AboutSection } from '../components/AboutSection';
import { EditorialGallerySection } from '../components/EditorialGallerySection';
import { EditorialStatement } from '../components/EditorialStatement';
import { HeroSection } from '../components/HeroSection';
import { JournalSection } from '../components/JournalSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { UniverseSection } from '../components/UniverseSection';
import { buildHomepageContent } from '../data/siteAppearance';
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

  const homepageContent = useMemo(() => buildHomepageContent(siteSettings?.homeImages || {}), [siteSettings]);

  return (
    <>
      <HeroSection heroData={homepageContent.hero} />
      <EditorialGallerySection galleryItems={homepageContent.editorialGallery} />
      <EditorialStatement />
      <AboutSection aboutData={homepageContent.about} />
      <UniverseSection categoryCards={homepageContent.categories} />
      <ResourcesSection resourceItems={homepageContent.resources} />
      <JournalSection posts={homepageContent.journalPosts} />
      <NewsletterSection />
    </>
  );
}
