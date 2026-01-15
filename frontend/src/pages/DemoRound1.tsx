import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface DemoRound1Props {
  onBack: () => void;
}

export default function DemoRound1({ onBack }: DemoRound1Props) {
  const [lightColor, setLightColor] = useState<'green' | 'red'>('green');
  const [isEliminated, setIsEliminated] = useState(false);
  const [code, setCode] = useState('');
  const [showDoll, setShowDoll] = useState(false);
  const [shake, setShake] = useState(false);
  const [guardsAnimate, setGuardsAnimate] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const cycleLights = () => {
      const randomDelay = Math.random() * 2000 + 2000; // 2-4 seconds
      
      timerRef.current = setTimeout(() => {
        setLightColor('red');
        setShowDoll(true);
        setGuardsAnimate(true);
        
        setTimeout(() => {
          setLightColor('green');
          setShowDoll(false);
          setGuardsAnimate(false);
          cycleLights();
        }, 3000);
      }, randomDelay);
    };

    cycleLights();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (lightColor === 'red' && !isEliminated) {
      setIsEliminated(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else if (lightColor === 'green') {
      setCode(e.target.value);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-squid-dark">
      {/* Full playground backdrop */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/assets/generated/playground-background.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
      </div>

      {/* Grain overlay */}
      <div className="fixed inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
        <img 
          src="/assets/generated/grain-overlay.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Red flash on elimination */}
      {isEliminated && (
        <div className="fixed inset-0 z-40 bg-squid-red/50 animate-pulse pointer-events-none" />
      )}

      {/* Two static guards on sides */}
      <div className={cn(
        'fixed left-8 top-1/2 -translate-y-1/2 z-5 opacity-50 transition-all duration-300',
        guardsAnimate && 'animate-guard-step'
      )}>
        <img 
          src="/assets/generated/circle-guard.dim_400x600.png" 
          alt="" 
          className="w-32 md:w-40 h-auto object-contain"
        />
      </div>
      <div className={cn(
        'fixed right-8 top-1/2 -translate-y-1/2 z-5 opacity-50 transition-all duration-300',
        guardsAnimate && 'animate-guard-step animation-delay-200'
      )}>
        <img 
          src="/assets/generated/triangle-guard.dim_400x600.png" 
          alt="" 
          className="w-32 md:w-40 h-auto object-contain"
        />
      </div>

      {/* Shake effect */}
      <div className={cn('relative z-10 min-h-screen', shake && 'animate-shake')}>
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-foreground/60 hover:text-squid-red hover:bg-squid-red/10"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>

          {/* Light indicator */}
          <div className="flex items-center gap-4">
            <span className="text-foreground/80 font-semibold">LIGHT STATUS:</span>
            <div className={cn(
              'w-16 h-16 rounded-full border-4 transition-all duration-300',
              lightColor === 'green' 
                ? 'bg-green-500 border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.8)]' 
                : 'bg-squid-red border-red-600 shadow-[0_0_30px_rgba(214,40,40,0.8)] animate-pulse'
            )} />
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-black text-squid-red mb-4 game-of-squids text-center">
            RED LIGHT — GREEN LIGHT
          </h1>
          <p className="text-foreground/60 mb-8 text-center max-w-2xl">
            Type your code while the light is GREEN. Stop immediately when it turns RED or face elimination.
          </p>

          {/* Doll character - hidden until red light */}
          {showDoll && (
            <div className="mb-8 animate-zoom-in">
              <img 
                src="/assets/generated/doll-character.dim_400x600.png" 
                alt="Doll" 
                className="w-48 h-auto object-contain"
              />
            </div>
          )}

          {/* Code editor */}
          <div className="w-full max-w-3xl">
            <div className={cn(
              'bg-black/80 border-2 rounded-lg p-6 transition-all duration-300 metallic-card',
              lightColor === 'green' 
                ? 'border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
                : 'border-squid-red shadow-[0_0_20px_rgba(214,40,40,0.5)]'
            )}>
              <div className="mb-4">
                <h3 className="text-foreground font-semibold mb-2 engraved-text">Problem: Reverse a String</h3>
                <p className="text-foreground/60 text-sm">Write a function that reverses a string.</p>
              </div>
              
              <Textarea
                value={code}
                onChange={handleCodeChange}
                placeholder="function reverseString(str) {&#10;  // Your code here&#10;}"
                className={cn(
                  'min-h-[300px] font-mono text-sm bg-black/60 border-foreground/20',
                  lightColor === 'red' && 'cursor-not-allowed opacity-50'
                )}
                disabled={lightColor === 'red'}
              />

              {lightColor === 'red' && (
                <p className="text-squid-red font-bold mt-4 text-center animate-pulse">
                  🚫 STOP TYPING! RED LIGHT!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Elimination overlay with red glitch and rifle silhouette */}
      {isEliminated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="relative">
              <h2 className="text-6xl md:text-8xl font-black text-squid-red game-of-squids glitch-text">
                PLAYER 067
              </h2>
              {/* Rifle silhouette overlay */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-30">
                <div className="w-32 h-32 bg-squid-red/20 rounded-full blur-xl" />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-squid-red glitch-text">
              ELIMINATED
            </h3>
            <p className="text-foreground/60 text-xl">
              You typed during red light
            </p>
            {/* Guard stepping forward */}
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
