import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Notfound from './components/pages/Notfound';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Preloader from './PreLoader';

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // شروع لودینگ فقط هنگام تغییر مسیر
    setIsVisible(true);
    setProgress(30);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // فید اوت و مخفی کردن نوار
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setProgress(0); // ریست کردن پیشرفت بعد از فید اوت
      }, 300); // هماهنگ با مدت زمان انیمیشن فید اوت
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [location]);

  if (progress === 0 && !isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '4px',
        backgroundColor: '#7FCBB2',
        zIndex: 9999,
        transition: 'width 0.2s ease-in-out, opacity 0.3s ease-in-out', // افزودن ترنزیشن برای opacity
        opacity: isVisible ? 1 : 0, // کنترل فید اوت
      }}
    />
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div style={{ fontFamily: 'vazir' }} className="bg-neutral-950">
          <Router>
            <Header />
            <ProgressBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboute" element={<About />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;