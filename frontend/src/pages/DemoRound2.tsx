import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface DemoRound2Props {
  onBack: () => void;
}

const BROKEN_CODE = `function findMax(arr) {
  let max = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}`;

export default function DemoRound2({ onBack }: DemoRound2Props) {
  const [fixedCode, setFixedCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [guardTurn, setGuardTurn] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setGuardTurn(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-squid-dark">
      {/* Control room background */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/assets/generated/control-room.dim_1920x1080.png" 
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

      {/* Guard reflection behind glass frame */}
      <div className={cn(
        'fixed top-1/4 right-12 z-0 opacity-20 transition-transform duration-1000',
        guardTurn && 'rotate-12'
      )}>
        <div className="relative">
          <img 
            src="/assets/generated/square-guard.dim_400x600.png" 
            alt="" 
            className="w-32 h-auto object-contain"
          />
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
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
            BROKEN CODE FIX
          </h1>
          <p className="text-squid-red text-2xl font-bold mb-8 text-center tracking-wider">
            ONE SUBMISSION. NO MERCY.
          </p>

          {/* Split layout */}
          <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
            {/* Left: Broken code */}
            <div className="bg-black/80 border-2 border-squid-red/30 rounded-lg p-6 metallic-card">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/assets/generated/metallic-triangle-symbol.dim_64x64.png" 
                  alt="" 
                  className="w-8 h-8 object-contain opacity-60"
                />
                <h3 className="text-squid-red font-bold text-lg engraved-text">BROKEN CODE</h3>
              </div>
              <pre className="text-foreground/80 font-mono text-sm bg-black/60 p-4 rounded border border-foreground/10 overflow-x-auto">
                {BROKEN_CODE}
              </pre>
              <div className="mt-4 p-4 bg-squid-red/10 border border-squid-red/30 rounded">
                <p className="text-foreground/80 text-sm">
                  <strong className="text-squid-red">Errors:</strong> This function has multiple bugs that will cause it to fail or produce incorrect results.
                </p>
              </div>
            </div>

            {/* Right: Fix area */}
            <div className="bg-black/80 border-2 border-squid-red/30 rounded-lg p-6 metallic-card">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/assets/generated/metallic-circle-symbol.dim_64x64.png" 
                  alt="" 
                  className="w-8 h-8 object-contain opacity-60"
                />
                <h3 className="text-squid-red font-bold text-lg engraved-text">YOUR FIX</h3>
              </div>
              <Textarea
                value={fixedCode}
                onChange={(e) => setFixedCode(e.target.value)}
                placeholder="Paste the corrected code here..."
                className="min-h-[300px] font-mono text-sm bg-black/60 border-foreground/20"
                disabled={isSubmitted}
              />
              
              <Button
                onClick={handleSubmit}
                disabled={isSubmitted || !fixedCode.trim()}
                className={cn(
                  'w-full mt-4 game-button',
                  isSubmitted && 'opacity-50 cursor-not-allowed'
                )}
              >
                {isSubmitted ? 'SUBMITTED' : 'SUBMIT FINAL ANSWER'}
              </Button>

              {isSubmitted && (
                <p className="text-foreground/60 text-sm mt-4 text-center">
                  No more submissions allowed. Your answer has been locked.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Submission overlay with guard head-turn */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-squid-red/20 animate-fade-in pointer-events-none">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-squid-red game-of-squids animate-pulse glitch-text">
              FINAL SUBMISSION LOCKED
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
