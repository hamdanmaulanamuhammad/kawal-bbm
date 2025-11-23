import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ImpactSection from './components/ImpactSection';
import TimelineSection from './components/TimelineSection';
import RightsObligationsSection from './components/RightsObligationsSection';
import TestimonialSection from './components/TestimonialSection';
import ReportSection from './components/ReportSection';
import LegalBasisSection from './components/LegalBasisSection';
import SolutionsSection from './components/SolutionsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ImpactSection />
      <TimelineSection />
      <RightsObligationsSection />
      <TestimonialSection />
      <ReportSection />
      <LegalBasisSection />
      <SolutionsSection />
      <Footer />
    </main>
  );
}
