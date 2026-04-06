import { AboutSection } from './components/AboutSection';
import { EditorialStatement } from './components/EditorialStatement';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { JournalSection } from './components/JournalSection';
import { NavBar } from './components/NavBar';
import { NewsletterSection } from './components/NewsletterSection';
import { ResourcesSection } from './components/ResourcesSection';
import { UniverseSection } from './components/UniverseSection';

function App() {
  return (
    <div className="min-h-screen bg-cloud text-ink">
      <NavBar />
      <main>
        <HeroSection />
        <EditorialStatement />
        <AboutSection />
        <UniverseSection />
        <ResourcesSection />
        <JournalSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
