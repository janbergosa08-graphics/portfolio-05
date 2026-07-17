import { ContactProvider } from '@/components/contact/ContactProvider';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Expertise from '@/components/sections/Expertise';
import Method from '@/components/sections/Method';
import Philosophy from '@/components/sections/Philosophy';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <ContactProvider>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Expertise />
        <Method />
        <Philosophy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </ContactProvider>
  );
}
