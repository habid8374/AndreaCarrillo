import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import BlanqueamientoPage from './pages/servicios/BlanqueamientoPage';
import OrtodonciaPage from './pages/servicios/OrtodonciaPage';
import ImplantesPage from './pages/servicios/ImplantesPage';
import EndodonciaPage from './pages/servicios/EndodonciaPage';
import OdontopediatriaPage from './pages/servicios/OdontopediatriaPage';
import EsteticaDentalPage from './pages/servicios/EsteticaDentalPage';
import GaleriaPage from './pages/GaleriaPage';
import PreciosPage from './pages/PreciosPage';
import AgendarPage from './pages/AgendarPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-dm text-carbon">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/blanqueamiento-dental" element={<BlanqueamientoPage />} />
          <Route path="/servicios/ortodoncia" element={<OrtodonciaPage />} />
          <Route path="/servicios/implantes-dentales" element={<ImplantesPage />} />
          <Route path="/servicios/endodoncia" element={<EndodonciaPage />} />
          <Route path="/servicios/odontopediatria" element={<OdontopediatriaPage />} />
          <Route path="/servicios/estetica-dental" element={<EsteticaDentalPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/precios" element={<PreciosPage />} />
          <Route path="/agendar" element={<AgendarPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
