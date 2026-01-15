import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Trophy, Code, Wrench, Swords, Radio, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoundDisplayProps {
  currentRound: number;
  isCompleted: boolean;
  onComplete: () => void;
}

const ROUNDS = [
  {
    title: 'ROUND 1: Red Light-Green Light Code',
    subtitle: 'Coding Under Pressure',
    icon: Code,
    description: 'Participants solve coding problems on the website. Random red lights appear every 10–15 seconds; typing while red eliminates the participant.',
    mechanism: 'Song plays and stops 1 second before light turns red.',
    time: '9:45–10:45 AM',
    result: 'Result announced at 11:00 AM',
    requirements: [
      'Solve coding problems on the platform',
      'Stop typing immediately when red light appears',
      'Listen for the song cue (stops 1 second before red)',
      'Complete as many problems as possible within time limit'
    ],
    color: 'from-red-600 to-red-800'
  },
  {
    title: 'ROUND 2: Broken Code Fix',
    subtitle: 'Debug with Precision',
    icon: Wrench,
    description: 'Participants correct logic errors in broken code. Only one submission allowed - make it count!',
    mechanism: 'Single submission constraint - no second chances.',
    time: '11:15 AM–12:45 PM',
    result: 'Result announced at 1:15 PM',
    requirements: [
      'Analyze the broken code carefully',
      'Identify all logic errors',
      'Fix the code correctly',
      'Submit only once - no retries allowed'
    ],
    color: 'from-amber-600 to-orange-700'
  },
  {
    title: 'ROUND 3: War of Code (Team Battle R–B)',
    subtitle: 'Red vs Blue Showdown',
    icon: Swords,
    description: 'Red vs Blue teams face identical challenges. Progress board tracks both teams in real-time. First team to complete all challenges wins.',
    mechanism: 'Live progress board showing both teams. Team coordination is key.',
    time: '2:15–4:30 PM',
    result: 'Results announced in the evening',
    requirements: [
      'Work as a coordinated team (Red or Blue)',
      'Complete identical challenges faster than opponents',
      'Monitor progress board for competitive advantage',
      'First team to finish all challenges wins'
    ],
    color: 'from-purple-600 to-violet-700'
  },
  {
    title: 'ROUND 4: Morse Coding',
    subtitle: 'Decode and Conquer',
    icon: Radio,
    description: 'Teams receive a paper with Morse code to decode a problem statement and complete it. Communication and decoding skills are essential.',
    mechanism: 'Physical paper with Morse code provided. Decode to reveal the challenge.',
    time: '10:00 AM–1:00 PM',
    result: 'Results announced afterwards',
    requirements: [
      'Receive and decode Morse code from paper',
      'Translate Morse code to reveal problem statement',
      'Understand the decoded challenge',
      'Complete the programming task within time limit'
    ],
    color: 'from-cyan-600 to-teal-700'
  },
  {
    title: 'ROUND 5: Evaluation Styled Round',
    subtitle: 'Final Judgment',
    icon: Award,
    description: 'The ultimate evaluation round. All your work is assessed, results are summarized, and the winners emerge in a cinematic finale.',
    mechanism: 'Comprehensive evaluation of all previous rounds and overall performance.',
    time: 'Final Session',
    result: 'Winners announced with ceremony',
    requirements: [
      'All previous rounds completed',
      'Code quality and correctness evaluated',
      'Problem-solving approach assessed',
      'Overall performance ranked'
    ],
    color: 'from-pink-600 to-rose-700'
  }
];

export default function RoundDisplay({ currentRound, isCompleted, onComplete }: RoundDisplayProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentRound]);

  if (currentRound >= ROUNDS.length) {
    return (
      <div className="w-full max-w-3xl">
        <Card className="bg-black/60 border-squid-pink shadow-[0_0_40px_rgba(220,38,38,0.3)] backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Trophy className="w-24 h-24 text-squid-pink animate-pulse" />
                <div className="absolute inset-0 bg-squid-pink/20 blur-2xl rounded-full" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold text-squid-pink mb-2">
              CONGRATULATIONS!
            </CardTitle>
            <CardDescription className="text-lg text-foreground/80">
              You've completed all rounds of the Squid Hackathon
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              You have survived every challenge and emerged victorious. 
              The final evaluation is complete.
            </p>
            <div className="flex justify-center">
              <img 
                src="/assets/generated/round-complete-icon.dim_64x64.png" 
                alt="Victory" 
                className="w-32 h-32 object-contain opacity-80"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const round = ROUNDS[currentRound];
  const Icon = round.icon;

  return (
    <div className={cn(
      'w-full max-w-3xl transition-all duration-600',
      isAnimating && 'opacity-0 scale-95',
      !isAnimating && 'opacity-100 scale-100'
    )}>
      <Card className="bg-black/60 border-squid-pink/40 shadow-[0_0_30px_rgba(220,38,38,0.2)] backdrop-blur-sm overflow-hidden">
        {/* Header gradient */}
        <div className={cn('h-2 bg-gradient-to-r', round.color)} />
        
        <CardHeader className="relative">
          {/* Spotlight effect */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
            <img 
              src="/assets/generated/spotlight-effect.dim_800x600.png" 
              alt="" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-start gap-4 relative z-10">
            <div className={cn(
              'p-4 rounded-lg bg-gradient-to-br shadow-lg',
              round.color
            )}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl md:text-3xl font-bold text-squid-pink mb-1">
                {round.title}
              </CardTitle>
              <CardDescription className="text-base text-foreground/70">
                {round.subtitle}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-foreground/90 text-lg leading-relaxed">
            {round.description}
          </p>

          <div className="bg-squid-pink/5 border border-squid-pink/20 rounded-lg p-4 space-y-2">
            <h3 className="text-squid-pink font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Mechanism
            </h3>
            <p className="text-foreground/80">{round.mechanism}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/40 border border-squid-pink/10 rounded-lg p-4">
              <h4 className="text-squid-pink font-semibold mb-2">⏰ Time</h4>
              <p className="text-foreground/80 text-sm">{round.time}</p>
            </div>
            <div className="bg-black/40 border border-squid-pink/10 rounded-lg p-4">
              <h4 className="text-squid-pink font-semibold mb-2">📢 Result</h4>
              <p className="text-foreground/80 text-sm">{round.result}</p>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-squid-pink" />
              Requirements
            </h3>
            <ul className="space-y-2">
              {round.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/80">
                  <span className="text-squid-pink mt-1">▸</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center border-t border-squid-pink/20 bg-black/40">
          {isCompleted ? (
            <div className="flex items-center gap-2 text-squid-pink">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-semibold">Round Completed</span>
            </div>
          ) : (
            <div className="text-muted-foreground text-sm">
              Complete all requirements to proceed
            </div>
          )}

          <Button
            onClick={onComplete}
            disabled={isCompleted}
            className={cn(
              'bg-squid-pink hover:bg-squid-pink-light text-white font-semibold px-8 transition-all',
              'shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]',
              isCompleted && 'opacity-50 cursor-not-allowed'
            )}
          >
            {isCompleted ? 'Completed' : 'Complete Round'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
