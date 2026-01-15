import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface DemoRound4Props {
  onBack: () => void;
}

const MORSE_CODE = '... --- ...';
const CORRECT_DECODE = 'SOS';

export default function DemoRound4({ onBack }: DemoRound4Props) {
  const [decodedText, setDecodedText] = useState('');
  const [isDecoded, setIsDecoded] = useState(false);
  const [solution, setSolution] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [guardStepAside, setGuardStepAside] = useState(false);

  const handleDecode = () => {
    if (decodedText.toUpperCase() === CORRECT_DECODE) {
      setIsDecoded(true);
      setGuardStepAside(true);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-squid-dark">
      {/* Underground bunker background */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/assets/generated/bunker-interior.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95" />
      </div>

      {/* Grain overlay */}
      <div className="fixed inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
        <img 
          src="/assets/generated/grain-overlay.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Flickering light effect */}
      <div className="fixed inset-0 z-0 bg-squid-red/5 animate-flicker pointer-events-none" />

      {/* Scanline effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(214,40,40,0.1)_2px,rgba(214,40,40,0.1)_4px)]" />
      </div>

      {/* Guard silhouette in doorway */}
      <div className={cn(
        'fixed top-1/4 right-12 z-0 opacity-30 transition-all duration-1000',
        guardStepAside && 'translate-x-32 opacity-10'
      )}>
        <img 
          src="/assets/generated/square-guard.dim_400x600.png" 
          alt="" 
          className="w-32 h-auto object-contain"
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
            MORSE CODING
          </h1>
          <p className="text-foreground/60 mb-12 text-center text-xl">
            Decode the Message. Solve the Challenge.
          </p>

          <div className="w-full max-w-3xl space-y-8">
            {/* Morse code display */}
            <div className="bg-black/80 border-2 border-squid-red/50 rounded-lg p-8 metallic-card">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img 
                  src="/assets/generated/metallic-triangle-symbol.dim_64x64.png" 
                  alt="" 
                  className="w-8 h-8 object-contain opacity-60"
                />
                <h3 className="text-squid-red font-bold text-lg text-center engraved-text">INCOMING TRANSMISSION</h3>
              </div>
              <div className="text-center">
                <p className="text-5xl font-mono text-squid-red tracking-widest animate-pulse">
                  {MORSE_CODE}
                </p>
              </div>
            </div>

            {/* Decode input */}
            {!isDecoded && (
              <div className="bg-black/80 border-2 border-squid-red/30 rounded-lg p-6 metallic-card">
                <h3 className="text-foreground font-bold mb-4 engraved-text">DECODE MESSAGE</h3>
                <div className="flex gap-4">
                  <Input
                    value={decodedText}
                    onChange={(e) => setDecodedText(e.target.value)}
                    placeholder="Enter decoded text..."
                    className="flex-1 bg-black/60 border-foreground/20 font-mono"
                  />
                  <Button
                    onClick={handleDecode}
                    className="game-button"
                  >
                    DECODE
                  </Button>
                </div>
              </div>
            )}

            {/* Access granted animation with CONFIDENTIAL stamp */}
            {isDecoded && !isSubmitted && (
              <div className="bg-black/80 border-2 border-green-500/50 rounded-lg p-6 animate-flicker metallic-card">
                <div className="relative">
                  <h3 className="text-green-500 font-bold text-2xl mb-4 text-center animate-pulse">
                    ✓ ACCESS GRANTED
                  </h3>
                  {/* CONFIDENTIAL stamp */}
                  <div className="absolute -top-4 -right-4 rotate-12">
                    <div className="border-4 border-squid-red rounded px-4 py-2 bg-squid-red/20">
                      <span className="text-squid-red font-black text-xl tracking-wider">CONFIDENTIAL</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded p-4 mb-6">
                  <p className="text-foreground/80 text-center">
                    <strong className="text-green-500">PROBLEM STATEMENT:</strong><br />
                    Count the number of characters in the decoded message.
                  </p>
                </div>

                <Textarea
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  placeholder="Write your solution here..."
                  className="min-h-[200px] font-mono text-sm bg-black/60 border-foreground/20 mb-4"
                />

                <Button
                  onClick={handleSubmit}
                  disabled={!solution.trim()}
                  className="w-full game-button"
                >
                  SUBMIT SOLUTION
                </Button>
              </div>
            )}

            {/* Submission confirmation */}
            {isSubmitted && (
              <div className="bg-black/80 border-2 border-squid-red/50 rounded-lg p-8 text-center metallic-card">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <img 
                    src="/assets/generated/metallic-circle-symbol.dim_64x64.png" 
                    alt="" 
                    className="w-10 h-10 object-contain opacity-60"
                  />
                  <h3 className="text-squid-red font-bold text-3xl game-of-squids engraved-text">
                    MESSAGE ACCEPTED
                  </h3>
                </div>
                <p className="text-foreground/60">
                  Your solution has been recorded and will be evaluated.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
