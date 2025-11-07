import HamburgerMenu from '../HamburgerMenu';

export default function HamburgerMenuExample() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-400 to-gray-600">
      <HamburgerMenu onNavigate={(section) => console.log('Navigate to:', section)} />
      <div className="flex items-center justify-center h-full text-white text-xl">
        Click the menu button in the top-left corner
      </div>
    </div>
  );
}
