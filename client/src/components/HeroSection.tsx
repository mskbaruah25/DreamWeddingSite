import heroImage from '@assets/DSC_4394_1762524477389.jpg';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden -mt-[20px]"
    >
      <img
        src={heroImage}
        alt="Sukanyaa and Monisankar"
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="img-hero"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide">
            SUKANYAA
          </h1>
          <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-white/90">&</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide">
            MONISANKAR
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl font-light text-white/90 tracking-wide mt-8" data-testid="text-date">
          6<sup>th</sup> February, 2026
        </p>
      </div>
    </section>
  );
}
