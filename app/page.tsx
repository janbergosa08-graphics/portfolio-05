import dynamic from 'next/dynamic';
import { ContactProvider } from '@/components/contact/ContactProvider';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/sections/Footer';

const Projects = dynamic(() => import('@/components/sections/Projects'));
const Expertise = dynamic(() => import('@/components/sections/Expertise'));
const Method = dynamic(() => import('@/components/sections/Method'));
const Philosophy = dynamic(() => import('@/components/sections/Philosophy'));
const Contact = dynamic(() => import('@/components/sections/Contact'));
const FAQ = dynamic(() => import('@/components/sections/FAQ'));

export default function HomePage() {
  return (
    <ContactProvider>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <div className="below-fold">
          <Projects />
          <Expertise />
          <Method />
          <Philosophy />
          <Contact />
          <FAQ />
        </div>
      </main>
      <Footer />
    </ContactProvider>
  );
}
