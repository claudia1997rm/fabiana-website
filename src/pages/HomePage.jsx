import { AboutSection } from '../components/AboutSection';
import { EditorialGallerySection } from '../components/EditorialGallerySection';
import { EditorialStatement } from '../components/EditorialStatement';
import { HeroSection } from '../components/HeroSection';
import { JournalSection } from '../components/JournalSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { UniverseSection } from '../components/UniverseSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
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