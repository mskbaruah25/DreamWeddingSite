import invitationImage from '@assets/image_1762524556952.png';

export default function InvitationSection() {
  return (
    <section id="invitation" className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      <img
        src={invitationImage}
        alt="Couple at waterfall"
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="img-invitation"
      />
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
          <h2 className="text-5xl md:text-6xl font-serif text-white tracking-wide">
            INVITATION
          </h2>
        </div>

        <div className="lg:col-span-9 space-y-4">
          <p className="text-lg md:text-xl leading-relaxed text-white" data-testid="text-invitation">
            Hello there! Hope this finds you in great health. As we are tying the knot on the 6<sup>th</sup> of Feb, 2026, want you to be a part of our wedding celebrations. Please feel free to explore this website as it contains all the important information regarding our wedding celebrations
          </p>
        </div>
      </div>
    </section>
  );
}
