import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TransitionOverlayProps {
  isActive: boolean;
}

export default function TransitionOverlay({ isActive }: TransitionOverlayProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!show) return null;

  return (
    <div className={cn(
      'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500',
      isActive ? 'opacity-100' : 'opacity-0'
    )}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Red flash effect */}
      <div className={cn(
        'absolute inset-0 bg-squid-pink transition-opacity duration-300',
        isActive ? 'opacity-30' : 'opacity-0'
      )} />

      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/assets/generated/geometric-overlay.dim_1024x1024.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center">
        <div className={cn(
          'transition-all duration-500',
          isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        )}>
          <img 
            src="/assets/generated/round-complete-icon.dim_64x64.png" 
            alt="Round Complete" 
            className="w-24 h-24 mx-auto mb-6 animate-pulse"
          />
          <h2 className="text-4xl font-bold text-squid-pink mb-2 tracking-wider">
            ROUND COMPLETE
          </h2>
          <p className="text-foreground/70 text-lg">
            Advancing to next challenge...
          </p>
        </div>
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          'absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-squid-pink to-transparent',
          'transition-all duration-1000',
          isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        )} />
      </div>
    </div>
  );
}
