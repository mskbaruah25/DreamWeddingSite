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
      <Button
        size="icon"
        variant="ghost"
        className="fixed top-4 left-4 z-50 text-white hover:scale-110 transition-transform p-0"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-menu-toggle"
        style={{ background: 'none' }}
      >
        {isOpen ? <X className="h-8 w-8 stroke-[2.5] drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]" /> : <Menu className="h-8 w-8 stroke-[2.5] drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]" />}
      </Button>

      {isOpen && (
        <div 
          className="fixed top-20 left-6 z-50 bg-black/80 backdrop-blur-sm rounded-lg py-4 px-2 border border-white/10"
          style={{
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="block w-full text-lg text-white hover:text-purple-200 px-6 py-2 text-left transition-colors whitespace-nowrap"
              data-testid={`link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
