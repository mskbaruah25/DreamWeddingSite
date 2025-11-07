export default function InvitationSection() {
  return (
    <section id="invitation" className="min-h-screen bg-[#F5F1E8] flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
          <h2 className="text-5xl md:text-6xl font-serif text-foreground tracking-wide lg:transform lg:-rotate-0">
            INVITATION
          </h2>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop"
              alt="Couple at waterfall"
              className="w-full h-auto object-cover"
              data-testid="img-invitation"
            />
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <p className="text-base md:text-lg leading-relaxed text-foreground" data-testid="text-invitation">
            Hello there! Hope this finds you in great health. As we are tying the knot on the 6<sup>th</sup> of Feb, 2026, want you to be a part of our wedding celebrations. Please feel free to explore this website as it contains all the important information regarding our wedding celebrations
          </p>
        </div>
      </div>
    </section>
  );
}
