export default function ThankYouSection() {
  return (
    <section
      id="thank-you"
      className="min-h-screen bg-gradient-to-br from-[#9CA89B] to-[#B8C4B0] flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-3xl text-center space-y-8">
        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-wide">
          Thank You
        </h2>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed" data-testid="text-thank-you">
          We look forward to celebrating with you!
        </p>
      </div>
    </section>
  );
}
