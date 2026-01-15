import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onReset: () => void;
}

export default function Header({ onReset }: HeaderProps) {
  return (
    <header className="border-b border-squid-pink/20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="/assets/generated/squid-hackathon-logo-transparent.dim_200x200.png" 
            alt="Squid Hackathon" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold text-squid-pink tracking-tight">
              SQUID HACKATHON
            </h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              College Edition
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="border-squid-pink/30 hover:bg-squid-pink/10 hover:border-squid-pink/50 transition-all"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Progress
        </Button>
      </div>
    </header>
  );
}
