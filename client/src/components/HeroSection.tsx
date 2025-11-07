import heroImage from '@assets/DSC_4394_1762524477389.jpg';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#9CA89B] to-[#B8C4B0] flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3 relative z-10 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide">
              SUKANYAA
            </h1>
            <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-white/90">&</p>
            <div className="relative inline-block">
              <div className="absolute -left-12 -top-8 w-48 h-48 md:w-64 md:h-64 bg-[#D4AF37] rounded-full -z-10" />
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#E8D5A0] tracking-wide relative">
                MONISANKAR
              </h2>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl font-light text-white/90 tracking-wide" data-testid="text-date">
            6<sup>th</sup> February, 2026
          </p>
        </div>

        <div className="lg:col-span-2 relative">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Sukanyaa and Monisankar"
              className="w-full h-auto object-cover"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
