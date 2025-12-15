import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HamburgerMenuProps {
  onNavigate: (section: string) => void;
}

export default function HamburgerMenu({ onNavigate }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Invitation', id: 'invitation' },
    { label: 'Snapshot of Events', id: 'snapshot' },
    { label: 'Wedding Day', id: 'wedding-day' },
    { label: "Reception(Groom's)", id: 'reception-groom' },
    { label: "Reception(Bride's)", id: 'reception-bride' },
    { label: 'Thank You Note', id: 'thank-you' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-start items-center px-6 pt-4 z-[1200] pointer-events-none mix-blend-normal">
        <Button
          size="icon"
          variant="ghost"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="pointer-events-auto text-white bg-white/10 hover:bg-white/20 border border-white/60 shadow-lg rounded-full backdrop-blur-2xl h-14 w-14 transition-all relative flex items-center justify-center focus:ring-2 focus:ring-white/80 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-menu-toggle"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </Button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            data-testid="overlay-menu"
          />
          <div className="fixed left-0 top-0 bottom-0 w-full md:w-96 z-40 flex flex-col items-start justify-center px-12 gap-6 bg-white/5 border-r border-white/20 backdrop-blur-lg shadow-2xl">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-2xl md:text-3xl font-serif text-white hover:text-white/80 py-3 text-left transition-all tracking-wide"
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
