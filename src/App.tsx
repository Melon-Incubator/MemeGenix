import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3Provider } from './providers/Web3Provider';
import { LanguageProvider } from './i18n/context';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CreateTokenPage } from './pages/CreateTokenPage';
import { ReactLenis } from 'lenis/react';

export default function App() {
  return (
    <LanguageProvider>
      <Web3Provider>
        <Router>
          <ReactLenis root options={{ 
            duration: 0.8,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
            wheelMultiplier: 1.5,
          }}>
            <div className="min-h-screen bg-cyber-dark">
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create/*" element={<CreateTokenPage />} />
              </Routes>
            </div>
          </ReactLenis>
        </Router>
      </Web3Provider>
    </LanguageProvider>
  );
}