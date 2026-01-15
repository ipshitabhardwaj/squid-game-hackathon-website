import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LandingPageProps {
  onNavigate: (screen: 'landing' | 'selection' | 'demo1' | 'demo2' | 'demo3' | 'demo4') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-squid-dark">
      {/* Nighttime playground background with subtle red flicker */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/assets/generated/playground-background.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
        {/* Red flicker effect */}
        <div className="absolute inset-0 bg-squid-red/5 animate-pulse-slow" />
      </div>

      {/* Grain overlay for cinematic texture */}
      <div className="fixed inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
        <img 
          src="/assets/generated/grain-overlay.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Barely visible doll silhouette in background */}
      <div className="fixed top-1/4 right-1/4 z-0 opacity-5">
        <img 
          src="/assets/generated/doll-character.dim_400x600.png" 
          alt="" 
          className="w-64 h-auto object-contain"
        />
      </div>

      {/* Static masked guards on sides with breathing animation */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-0 opacity-40 animate-breathing">
        <img 
          src="/assets/generated/circle-guard.dim_400x600.png" 
          alt="" 
          className="w-32 md:w-48 h-auto object-contain"
        />
      </div>
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-0 opacity-40 animate-breathing animation-delay-1000">
        <img 
          src="/assets/generated/triangle-guard.dim_400x600.png" 
          alt="" 
          className="w-32 md:w-48 h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top text section */}
        <div className={cn(
          'flex-1 flex flex-col items-center justify-center px-4 py-12 transition-all duration-1000',
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        )}>
          <div className="text-center space-y-6 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-foreground/80 tracking-[0.3em] uppercase">
              ONE HACKATHON MULTIPLE THRILLERS
            </h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-squid-red tracking-tight game-of-squids">
              SQUID GAME HACKATHON
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold text-squid-red tracking-wider">
              Code. Conquer. Win.
            </p>

            {/* Three static guards with metallic symbols */}
            <div className={cn(
              'flex items-center justify-center gap-8 md:gap-16 py-12 transition-all duration-1500 delay-300',
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            )}>
              <div className="relative group">
                <img 
                  src="/assets/generated/circle-guard.dim_400x600.png" 
                  alt="" 
                  className="w-24 md:w-32 h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-squid-red/20 blur-2xl rounded-full group-hover:bg-squid-red/40 transition-all" />
              </div>
              <div className="relative group">
                <img 
                  src="/assets/generated/triangle-guard.dim_400x600.png" 
                  alt="" 
                  className="w-24 md:w-32 h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-squid-red/20 blur-2xl rounded-full group-hover:bg-squid-red/40 transition-all" />
              </div>
              <div className="relative group">
                <img 
                  src="/assets/generated/square-guard.dim_400x600.png" 
                  alt="" 
                  className="w-24 md:w-32 h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-squid-red/20 blur-2xl rounded-full group-hover:bg-squid-red/40 transition-all" />
              </div>
            </div>

            {/* Interactive buttons with spotlight effect */}
            <div className={cn(
              'flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 transition-all duration-1000 delay-500',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}>
              <div className="relative">
                <Button
                  onClick={() => onNavigate('selection')}
                  onMouseEnter={() => setHoveredButton('enter')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="game-button w-full sm:w-auto px-8 py-6 text-lg font-bold relative z-10"
                >
                  ENTER THE GAME
                </Button>
                {hoveredButton === 'enter' && (
                  <div className="absolute inset-0 -z-10">
                    <img 
                      src="/assets/generated/spotlight-effect.dim_800x600.png" 
                      alt="" 
                      className="w-full h-full object-cover opacity-30 animate-pulse-fast"
                    />
                  </div>
                )}
              </div>
              
              <div className="relative">
                <Button
                  onClick={() => onNavigate('selection')}
                  onMouseEnter={() => setHoveredButton('view')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="game-button w-full sm:w-auto px-8 py-6 text-lg font-bold relative z-10"
                >
                  VIEW ROUNDS
                </Button>
                {hoveredButton === 'view' && (
                  <div className="absolute inset-0 -z-10">
                    <img 
                      src="/assets/generated/spotlight-effect.dim_800x600.png" 
                      alt="" 
                      className="w-full h-full object-cover opacity-30 animate-pulse-fast"
                    />
                  </div>
                )}
              </div>
              
              <div className="relative">
                <Button
                  onClick={() => window.open('#', '_blank')}
                  onMouseEnter={() => setHoveredButton('register')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="game-button w-full sm:w-auto px-8 py-6 text-lg font-bold relative z-10"
                >
                  REGISTER
                </Button>
                {hoveredButton === 'register' && (
                  <div className="absolute inset-0 -z-10">
                    <img 
                      src="/assets/generated/spotlight-effect.dim_800x600.png" 
                      alt="" 
                      className="w-full h-full object-cover opacity-30 animate-pulse-fast"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={cn(
          'py-8 text-center transition-all duration-1000 delay-700',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}>
          <p className="text-sm md:text-base text-foreground/60 tracking-[0.2em] uppercase">
            DEPARTMENT OF EMERGING TECHNOLOGIES — EMERGIANS PRESENTS
          </p>
        </footer>
      </div>
    </div>
  );
}
