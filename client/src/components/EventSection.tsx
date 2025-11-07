import EventButtons from './EventButtons';

interface TimelineItem {
  time: string;
  event: string;
}

interface EventSectionProps {
  id: string;
  title: string;
  date: string;
  venue: string;
  timeline: TimelineItem[];
  imageUrl: string;
  imageAlt: string;
  googleMapsUrl: string;
  eventDateTime: string;
}

export default function EventSection({
  id,
  title,
  date,
  venue,
  timeline,
  imageUrl,
  imageAlt,
  googleMapsUrl,
  eventDateTime,
}: EventSectionProps) {
  return (
    <section id={id} className="min-h-screen bg-black text-white py-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif tracking-wide" data-testid={`text-${id}-title`}>
            {title}: {date}
          </h2>

          <div className="space-y-4">
            <p className="text-lg md:text-xl" data-testid={`text-${id}-venue`}>
              <span className="font-medium">VENUE:</span> {venue}
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-baseline gap-8 border-b border-white/20 pb-4">
                <span className="text-base md:text-lg font-light min-w-[140px]" data-testid={`text-${id}-time-${index}`}>
                  {item.time}
                </span>
                <span className="text-base md:text-lg uppercase tracking-wide" data-testid={`text-${id}-event-${index}`}>
                  {item.event}
                </span>
              </div>
            ))}
          </div>

          <EventButtons
            googleMapsUrl={googleMapsUrl}
            eventDate={eventDateTime}
            eventTitle={title}
            eventLocation={venue}
            eventTime={timeline[0]?.time || ''}
          />
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto object-cover"
              data-testid={`img-${id}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
