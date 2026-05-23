import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Landing from './pages/Landing';
import About from './pages/About';
import Booking from './pages/Booking';
import ServiceDetail from './pages/ServiceDetail';
import ComingSoon from './pages/ComingSoon';

function MainLayout() {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/dashboard/*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
