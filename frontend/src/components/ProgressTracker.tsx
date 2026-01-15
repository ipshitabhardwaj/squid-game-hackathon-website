import { Check, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressTrackerProps {
  currentRound: number;
  completedRounds: number[];
}

const TOTAL_ROUNDS = 5;

export default function ProgressTracker({ currentRound, completedRounds }: ProgressTrackerProps) {
  return (
    <div className="w-full max-w-4xl mb-12">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-squid-pink/20 -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-squid-pink -translate-y-1/2 z-0 transition-all duration-1000 ease-out"
          style={{ width: `${(currentRound / (TOTAL_ROUNDS - 1)) * 100}%` }}
        />

        {/* Round indicators */}
        {Array.from({ length: TOTAL_ROUNDS }).map((_, index) => {
          const isCompleted = completedRounds.includes(index);
          const isCurrent = currentRound === index;
          const isLocked = index > currentRound;

          return (
            <div key={index} className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={cn(
                  'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500',
                  'backdrop-blur-sm',
                  isCompleted && 'bg-squid-pink border-squid-pink shadow-[0_0_20px_rgba(220,38,38,0.5)]',
                  isCurrent && !isCompleted && 'bg-squid-pink/20 border-squid-pink animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.3)]',
                  isLocked && 'bg-black/60 border-squid-pink/20'
                )}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6 text-white" />
                ) : isLocked ? (
                  <Lock className="w-5 h-5 text-squid-pink/40" />
                ) : (
                  <span className="text-lg font-bold text-squid-pink">{index + 1}</span>
                )}
              </div>
              <span className={cn(
                'text-xs font-medium uppercase tracking-wider transition-colors',
                isCurrent ? 'text-squid-pink' : 'text-muted-foreground'
              )}>
                Round {index + 1}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
