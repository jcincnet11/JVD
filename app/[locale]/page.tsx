import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Work />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
