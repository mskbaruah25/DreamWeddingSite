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
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide" data-testid={`text-${id}-title`}>
            {title}:{' '}
            <span className="text-3xl md:text-4xl lg:text-5xl">{date}</span>
          </h2>

          <div className="space-y-4">
            <p className="text-base md:text-lg" data-testid={`text-${id}-venue`}>
              <span className="font-medium">VENUE:</span> {venue}
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-baseline gap-8 border-b border-white/20 pb-4">
                <span className="text-base md:text-lg font-light min-w-[160px]" data-testid={`text-${id}-time-${index}`}>
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

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md overflow-hidden">
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
