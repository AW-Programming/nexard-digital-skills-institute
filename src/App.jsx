import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Features />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
