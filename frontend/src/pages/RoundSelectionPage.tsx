import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RoundSelectionPageProps {
  onNavigate: (screen: 'landing' | 'selection' | 'demo1' | 'demo2' | 'demo3' | 'demo4') => void;
  onBack: () => void;
}

const ROUNDS = [
  {
    id: 'demo1',
    title: 'RED LIGHT — GREEN LIGHT',
    subtitle: 'Code Under Pressure',
    description: 'Type code while the light is green. Stop when it turns red or face elimination.',
    image: '/assets/generated/playground-background.dim_1920x1080.png',
    guardSymbol: '/assets/generated/metallic-circle-symbol.dim_64x64.png',
  },
  {
    id: 'demo2',
    title: 'BROKEN CODE FIX',
    subtitle: 'One Submission. No Mercy.',
    description: 'Fix the broken code. You only get one chance to submit.',
    image: '/assets/generated/control-room.dim_1920x1080.png',
    guardSymbol: '/assets/generated/metallic-triangle-symbol.dim_64x64.png',
  },
  {
    id: 'demo3',
    title: 'WAR OF CODE',
    subtitle: 'Red vs Blue Battle',
    description: 'Team battle. Red versus Blue. First to complete wins.',
    image: '/assets/generated/arena-background.dim_1920x1080.png',
    guardSymbol: '/assets/generated/metallic-square-symbol.dim_64x64.png',
  },
  {
    id: 'demo4',
    title: 'MORSE CODING',
    subtitle: 'Decode and Execute',
    description: 'Decode the Morse message. Solve the hidden challenge.',
    image: '/assets/generated/terminal-background.dim_1920x1080.png',
    guardSymbol: '/assets/generated/metallic-circle-symbol.dim_64x64.png',
  },
];

export default function RoundSelectionPage({ onNavigate, onBack }: RoundSelectionPageProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-squid-dark">
      {/* Dark hallway background with guards */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/assets/generated/guard-hallway.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
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

      {/* Guards placed intermittently */}
      <div className="fixed left-12 top-1/4 z-0 opacity-20">
        <img 
          src="/assets/generated/circle-guard.dim_400x600.png" 
          alt="" 
          className="w-24 h-auto object-contain"
        />
      </div>
      <div className="fixed right-12 top-2/3 z-0 opacity-20">
        <img 
          src="/assets/generated/triangle-guard.dim_400x600.png" 
          alt="" 
          className="w-24 h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
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
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-black text-squid-red mb-4 tracking-tight game-of-squids text-center glow-text">
            CHOOSE YOUR GAME
          </h1>
          <p className="text-foreground/60 mb-12 text-center">Select a demo round to experience</p>

          {/* Round cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
            {ROUNDS.map((round) => (
              <div
                key={round.id}
                className={cn(
                  'relative group cursor-pointer transition-all duration-300',
                  'bg-black/60 border-2 border-squid-red/30 rounded-lg overflow-hidden',
                  'hover:border-squid-red hover:shadow-[0_0_30px_rgba(214,40,40,0.5)]',
                  hoveredCard === round.id && 'scale-105'
                )}
                onMouseEnter={() => setHoveredCard(round.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onNavigate(round.id as any)}
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={round.image} 
                    alt="" 
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* Guard silhouette watermark */}
                <div className="absolute top-4 left-4 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img 
                    src={round.guardSymbol} 
                    alt="" 
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 min-h-[280px] flex flex-col justify-end metallic-card">
                  <h2 className="text-2xl md:text-3xl font-black text-squid-red mb-2 game-of-squids engraved-text">
                    {round.title}
                  </h2>
                  <p className="text-foreground/80 font-semibold mb-3">
                    {round.subtitle}
                  </p>
                  <p className="text-foreground/60 text-sm">
                    {round.description}
                  </p>

                  {/* Hover indicator with spotlight */}
                  <div className={cn(
                    'absolute top-4 right-4 transition-all duration-300',
                    hoveredCard === round.id ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  )}>
                    <div className="relative">
                      <img 
                        src="/assets/generated/spotlight-effect.dim_800x600.png" 
                        alt="" 
                        className="w-20 h-20 object-contain opacity-40"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-squid-red text-2xl">▶</span>
                    </div>
                  </div>
                </div>

                {/* Red glow on hover */}
                <div className={cn(
                  'absolute inset-0 bg-squid-red/10 transition-opacity duration-300 pointer-events-none',
                  hoveredCard === round.id ? 'opacity-100' : 'opacity-0'
                )} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
