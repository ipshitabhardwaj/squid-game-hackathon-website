import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import RoundDisplay from './components/RoundDisplay';
import ProgressTracker from './components/ProgressTracker';
import TransitionOverlay from './components/TransitionOverlay';

export default function App() {
  const [currentRound, setCurrentRound] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [completedRounds, setCompletedRounds] = useState<number[]>([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedRound = localStorage.getItem('squid-hackathon-round');
    const savedCompleted = localStorage.getItem('squid-hackathon-completed');
    
    if (savedRound) {
      setCurrentRound(parseInt(savedRound, 10));
    }
    if (savedCompleted) {
      setCompletedRounds(JSON.parse(savedCompleted));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('squid-hackathon-round', currentRound.toString());
    localStorage.setItem('squid-hackathon-completed', JSON.stringify(completedRounds));
  }, [currentRound, completedRounds]);

  const handleCompleteRound = () => {
    if (!completedRounds.includes(currentRound)) {
      setCompletedRounds([...completedRounds, currentRound]);
    }
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentRound(prev => prev + 1);
      setIsTransitioning(false);
    }, 2000);
  };

  const handleResetProgress = () => {
    setCurrentRound(0);
    setCompletedRounds([]);
    localStorage.removeItem('squid-hackathon-round');
    localStorage.removeItem('squid-hackathon-completed');
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
        {/* Background effects */}
        <div className="fixed inset-0 z-0">
          <img 
            src="/assets/generated/arena-background.dim_1920x1080.png" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
        </div>

        {/* Geometric overlay */}
        <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
          <img 
            src="/assets/generated/geometric-overlay.dim_1024x1024.png" 
            alt="" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header onReset={handleResetProgress} />
          
          <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
            <ProgressTracker 
              currentRound={currentRound} 
              completedRounds={completedRounds}
            />
            
            <RoundDisplay 
              currentRound={currentRound}
              isCompleted={completedRounds.includes(currentRound)}
              onComplete={handleCompleteRound}
            />
          </main>

          <Footer />
        </div>

        {/* Transition overlay */}
        <TransitionOverlay isActive={isTransitioning} />

        <Toaster />
      </div>
    </ThemeProvider>
  );
}
