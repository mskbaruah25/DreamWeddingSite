import invitationImage from '@assets/image_1762524556952.png';

export default function InvitationSection() {
  return (
    <section id="invitation" className="min-h-screen bg-[#E8E4D9] flex items-center justify-center py-20 px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black tracking-wide whitespace-nowrap">
            INVITATION
          </h2>
        </div>

        <div className="flex-shrink-0 max-w-md lg:max-w-lg">
          <img
            src={invitationImage}
            alt="Couple at waterfall"
            className="w-full h-auto object-cover shadow-lg"
            data-testid="img-invitation"
          />
        </div>

        <div className="flex-1 max-w-md">
          <p className="text-base md:text-lg leading-relaxed text-black font-serif" data-testid="text-invitation">
            Hello there! Hope this finds you in great health. As we are tying the knot on the 6<sup>th</sup> of Feb, 2026, want you to be a part of our wedding celebrations. Please feel free to explore this website as it contains all the important information regarding our wedding celebrations
          </p>
        </div>
      </div>
    </section>
  );
}
