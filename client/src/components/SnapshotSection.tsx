import { Flower, Flower2, Bean } from 'lucide-react';

export default function SnapshotSection() {
  const events = [
    {
      icon: Flower,
      title: 'Wedding Day',
      description: "We will be having our wedding day on the 6th of February, 2026. Please shower us with your blessings with your presence",
    },
    {
      icon: Flower2,
      title: 'Reception(Groom)',
      description: '8th of February, 2026 will be the wedding reception day. Come join us for a night of celebrations',
    },
    {
      icon: Bean,
      title: 'Reception(Bride)',
      description: '13th February, 2026. Hosted in the residence of Sukanyaa, join us for further celebrations. Come with another day in hand and you can explore the Eastern Himalayan valleys.',
    },
  ];

  return (
    <section id="snapshot" className="min-h-screen bg-[#F5F1E8] py-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-16 tracking-wide">
          SNAPSHOT OF EVENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-6">
                <Icon className="w-16 h-16 text-foreground/70" strokeWidth={1} />
                <h3 className="text-2xl font-serif text-foreground">{event.title}</h3>
                <p className="text-base leading-relaxed text-foreground/80" data-testid={`text-event-${index}`}>
                  {event.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
