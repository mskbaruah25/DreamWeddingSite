import invitationImage from '@assets/image_1762548091150.png';

export default function InvitationSection() {
  return (
    <section id="invitation" className="min-h-screen bg-white flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-16">
        <div className="lg:order-1">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black tracking-wide text-center lg:text-left">
            INVITATION
          </h2>
        </div>

        <div className="lg:order-2 mx-auto">
          <div className="w-64 md:w-80 lg:w-96">
            <img
              src={invitationImage}
              alt="Couple at waterfall"
              className="w-full h-auto object-cover shadow-xl rounded-md"
              data-testid="img-invitation"
            />
          </div>
        </div>

        <div className="lg:order-3">
          <p className="text-base md:text-lg leading-relaxed text-black text-center lg:text-left" data-testid="text-invitation">
            Hello there! Hope this finds you in great health. As we are tying the knot on the 6<sup>th</sup> of Feb, 2026, want you to be a part of our wedding celebrations. Please feel free to explore this website as it contains all the important information regarding our wedding celebrations
          </p>
        </div>
      </div>
    </section>
  );
}
