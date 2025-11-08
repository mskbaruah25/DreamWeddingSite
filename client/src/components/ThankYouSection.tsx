export default function ThankYouSection() {
  return (
    <section
      id="thank-you"
      className="min-h-screen relative flex items-center justify-center py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 25%),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.4) 0%, transparent 25%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="max-w-3xl text-center space-y-12 relative z-10">
        <h2 
          className="text-5xl md:text-7xl font-serif tracking-wide text-white"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          Thank You
        </h2>
        <div className="space-y-6">
          <p 
            className="text-xl md:text-2xl leading-relaxed text-white backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-xl" 
            data-testid="text-thank-you"
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
            }}
          >
            We are truly blessed to have wonderful friends and family like you. Your presence at our wedding would make this celebration even more special. We cannot wait to share our joy with you and create beautiful memories together on this momentous occasion. Please keep visiting this website for any updates to the schedule or event details as we get closer to the date.
          </p>
          <div 
            className="backdrop-blur-sm bg-white/20 p-4 rounded-lg shadow-xl border border-white/30 animate-pulse"
            style={{
              animation: 'pulse 3s infinite'
            }}
          >
            <p className="text-lg text-white font-medium">
              ⚡ Stay tuned for live schedule updates and event details! ⚡
            </p>
          </div>
        </div>
        
        <div className="mt-12 space-y-8">
          <h3 
            className="text-3xl md:text-4xl font-serif tracking-wide text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Contact Us
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-xl transition-transform hover:scale-105">
              <p className="text-white font-semibold mb-3">Phone</p>
              <div className="space-y-2 text-lg md:text-xl text-white/90">
                <p className="hover:text-white transition-colors">(+91) 9101435826 (Monisankar)</p>
                <p className="hover:text-white transition-colors">(+91) 9678575192 (Sukanyaa)</p>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-xl transition-transform hover:scale-105">
              <p className="text-white font-semibold mb-3">Email</p>
              <p className="text-lg md:text-xl text-white/90 hover:text-white transition-colors">
                mskbaruah@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
