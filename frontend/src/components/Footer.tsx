import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-squid-pink/20 bg-black/40 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          © 2025. Built with{' '}
          <Heart className="w-4 h-4 text-squid-pink fill-squid-pink animate-pulse" />{' '}
          using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-squid-pink hover:text-squid-pink-light transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
