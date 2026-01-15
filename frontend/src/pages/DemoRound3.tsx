import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface DemoRound3Props {
  onBack: () => void;
}

export default function DemoRound3({ onBack }: DemoRound3Props) {
  const [redProgress, setRedProgress] = useState(0);
  const [blueProgress, setBlueProgress] = useState(0);
  const [winner, setWinner] = useState<'red' | 'blue' | null>(null);
  const [ropePosition, setRopePosition] = useState(50);
  const [guardsStep, setGuardsStep] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (winner) return;

      // Simulate progress updates
      const redIncrease = Math.random() > 0.4 ? 5 : 0;
      const blueIncrease = Math.random() > 0.5 ? 5 : 0;

      setRedProgress(prev => {
        const newVal = Math.min(prev + redIncrease, 100);
        if (newVal >= 100 && !winner) {
          setWinner('red');
          setGuardsStep(true);
        }
        return newVal;
      });

      setBlueProgress(prev => {
        const newVal = Math.min(prev + blueIncrease, 100);
        if (newVal >= 100 && !winner) {
          setWinner('blue');
          setGuardsStep(true);
        }
        return newVal;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [winner]);

  useEffect(() => {
    // Update rope position based on progress difference
    const diff = redProgress - blueProgress;
    setRopePosition(50 + diff / 4);
  }, [redProgress, blueProgress]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-squid-dark">
      {/* Full arena background */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/assets/generated/arena-background.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/95" />
      </div>

      {/* Grain overlay */}
      <div className="fixed inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
        <img 
          src="/assets/generated/grain-overlay.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="p-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-foreground/60 hover:text-squid-red hover:bg-squid-red/10"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-black text-squid-red mb-4 game-of-squids text-center">
            WAR OF CODE
          </h1>
          <p className="text-foreground/60 mb-12 text-center text-xl">
            RED vs BLUE — First to Complete Wins
          </p>

          {/* Arena */}
          <div className="w-full max-w-5xl">
            {/* Rope visualization with layered rope image */}
            <div className="mb-12 relative h-32 bg-black/60 border-2 border-squid-red/30 rounded-lg overflow-hidden">
              {/* Center line */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-full bg-foreground/20" />
              </div>
              
              {/* Rope image layered dynamically */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 transition-all duration-500"
                style={{ left: `${ropePosition}%`, transform: `translate(-50%, -50%)` }}
              >
                <img 
                  src="/assets/generated/arena-rope.dim_1920x1080.png" 
                  alt="" 
                  className="w-24 h-auto object-contain opacity-80"
                />
              </div>

              {/* Team labels */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 font-bold text-2xl">
                RED
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 font-bold text-2xl">
                BLUE
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-8">
              {/* Red team */}
              <div className={cn(
                'bg-black/80 border-2 border-red-500/50 rounded-lg p-6 metallic-card transition-all duration-500',
                winner === 'blue' && 'opacity-40'
              )}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/assets/generated/metallic-square-symbol.dim_64x64.png" 
                      alt="" 
                      className="w-8 h-8 object-contain opacity-60"
                    />
                    <h3 className="text-red-500 font-bold text-2xl engraved-text">RED TEAM</h3>
                  </div>
                  <span className="text-red-500 font-mono text-3xl">{redProgress}%</span>
                </div>
                <Progress value={redProgress} className="h-6 bg-black/60" />
                {redProgress > blueProgress && redProgress < 100 && (
                  <p className="text-red-500 font-bold mt-2 animate-pulse">RED TEAM +1</p>
                )}
              </div>

              {/* Blue team */}
              <div className={cn(
                'bg-black/80 border-2 border-blue-500/50 rounded-lg p-6 metallic-card transition-all duration-500',
                winner === 'red' && 'opacity-40'
              )}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/assets/generated/metallic-circle-symbol.dim_64x64.png" 
                      alt="" 
                      className="w-8 h-8 object-contain opacity-60"
                    />
                    <h3 className="text-blue-500 font-bold text-2xl engraved-text">BLUE TEAM</h3>
                  </div>
                  <span className="text-blue-500 font-mono text-3xl">{blueProgress}%</span>
                </div>
                <Progress value={blueProgress} className="h-6 bg-black/60" />
                {blueProgress > redProgress && blueProgress < 100 && (
                  <p className="text-blue-500 font-bold mt-2 animate-pulse">BLUE TEAM +1</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winner overlay with guards stepping forward */}
      {winner && (
        <div className={cn(
          'fixed inset-0 z-50 flex items-center justify-center animate-fade-in',
          winner === 'red' ? 'bg-red-900/80' : 'bg-blue-900/80'
        )}>
          <div className="text-center space-y-6">
            <h2 className={cn(
              'text-6xl md:text-8xl font-black game-of-squids',
              winner === 'red' ? 'text-red-500' : 'text-blue-500'
            )}>
              {winner.toUpperCase()} TEAM WINS
            </h2>
            <h3 className="text-4xl font-bold text-squid-red glitch-text">
              {winner === 'red' ? 'BLUE TEAM' : 'RED TEAM'} ELIMINATED
            </h3>
            {/* Guards stepping forward */}
            {guardsStep && (
              <div className="flex justify-center gap-8 mt-8 animate-guard-step">
                <img 
                  src="/assets/generated/circle-guard.dim_400x600.png" 
                  alt="" 
                  className="w-24 h-auto object-contain opacity-60"
                />
                <img 
                  src="/assets/generated/triangle-guard.dim_400x600.png" 
                  alt="" 
                  className="w-24 h-auto object-contain opacity-60"
                />
              </div>
            )}
            <Button
              onClick={onBack}
              className="game-button mt-8"
            >
              Return to Selection
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
