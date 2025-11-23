import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutContent from './AboutContent';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutContent />
      <Footer />
    </main>
  );
}
