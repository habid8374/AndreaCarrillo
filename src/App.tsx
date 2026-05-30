import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-dm text-carbon">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
