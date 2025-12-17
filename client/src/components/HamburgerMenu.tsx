interface NavigationBarProps {
  onNavigate: (section: string) => void;
}

const menuItems = [
  { label: "Home", id: "home" },
  { label: "Invitation", id: "invitation" },
  { label: "Snapshot of Events", id: "snapshot" },
  { label: "Wedding Day", id: "wedding-day" },
  { label: "Reception (Groom)", id: "reception-groom" },
  { label: "Reception (Bride)", id: "reception-bride" },
  { label: "Thank You", id: "thank-you" },
];

export default function HamburgerMenu({ onNavigate }: NavigationBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[1200] bg-gradient-to-b from-black/60 via-transparent to-transparent backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 text-white">
        <div className="flex w-full items-center gap-4 text-[11px] md:text-sm font-semibold tracking-[0.3em] uppercase whitespace-nowrap overflow-x-auto md:overflow-visible justify-start md:justify-between">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="text-white/80 hover:text-white transition-colors text-left"
              data-testid={`link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
