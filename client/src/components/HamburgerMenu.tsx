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
        className="fixed top-6 left-6 z-50 bg-transparent hover:bg-white/10 text-white"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-menu-toggle"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/95 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            data-testid="overlay-menu"
          />
          <div className="fixed left-0 top-0 bottom-0 w-full md:w-96 bg-sidebar z-40 flex flex-col items-start justify-center px-12 gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-2xl md:text-3xl font-serif text-sidebar-foreground hover-elevate py-3 text-left transition-all"
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
