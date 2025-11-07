import invitationImage from '@assets/image_1762524556952.png';

export default function InvitationSection() {
  return (
    <section id="invitation" className="min-h-screen bg-[#E8E4D9] flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="flex-shrink-0 lg:w-1/5">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black tracking-wide">
            INVITATION
          </h2>
        </div>

        <div className="flex-shrink-0 lg:w-2/5">
          <img
            src={invitationImage}
            alt="Couple at waterfall"
            className="w-full h-auto object-cover"
            data-testid="img-invitation"
          />
        </div>

        <div className="flex-shrink-0 lg:w-1/3">
          <p className="text-base md:text-lg leading-relaxed text-black" data-testid="text-invitation">
            Hello there! Hope this finds you in great health. As we are tying the knot on the 6<sup>th</sup> of Feb, 2026, want you to be a part of our wedding celebrations. Please feel free to explore this website as it contains all the important information regarding our wedding celebrations
          </p>
        </div>
      </div>
    </section>
  );
}
