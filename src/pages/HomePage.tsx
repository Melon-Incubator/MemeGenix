import { useEffect, useRef } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Community } from '../components/Community';
import { Footer } from '../components/Footer';
import { useLenis } from 'lenis/react';

export function HomePage() {
  const lenis = useLenis();
  
  // Refs for scroll animations
  const featuresRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scroll = lenis?.scroll || 0;
      
      // Apply scroll-based animations to sections
      const sections = [
        { ref: featuresRef, offset: window.innerHeight * 0.25 },
        { ref: howItWorksRef, offset: window.innerHeight * 0.5 },
        { ref: communityRef, offset: window.innerHeight * 0.75 }
      ];

      sections.forEach(({ ref, offset }) => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight - offset;
        
        if (inView) {
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0)';
        }
      });
    };

    // Subscribe to scroll updates
    lenis?.on('scroll', handleScroll);

    return () => {
      lenis?.off('scroll', handleScroll);
    };
  }, [lenis]);

  return (
    <>
      <Hero />
      <div 
        ref={featuresRef} 
        className="transition-all duration-1000 opacity-0 transform translate-y-10"
      >
        <Features />
      </div>
      <div 
        ref={howItWorksRef}
        className="transition-all duration-1000 opacity-0 transform translate-y-10"
      >
        <HowItWorks />
      </div>
      <div 
        ref={communityRef}
        className="transition-all duration-1000 opacity-0 transform translate-y-10"
      >
        <Community />
      </div>
      <Footer />
    </>
  );
}