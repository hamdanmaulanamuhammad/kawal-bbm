import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticlesContent from './ArticlesContent';

export default function ArticlesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ArticlesContent />
      <Footer />
    </main>
  );
}
