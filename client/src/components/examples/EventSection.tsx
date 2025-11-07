import EventSection from '../EventSection';

export default function EventSectionExample() {
  return (
    <EventSection
      id="wedding-day"
      title="THE WEDDING DAY"
      date="6TH FEB"
      venue="Rishta Wedding Venue, Below Boragaon Flyover, Boragaon, Guwahati 781011"
      timeline={[
        { time: '9:00 AM', event: 'JJUROON' },
        { time: '4:30 PM ONWARDS', event: 'WEDDING RITUALS' },
      ]}
      imageUrl="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop"
      imageAlt="Wedding Day"
      googleMapsUrl="https://maps.google.com"
      eventDateTime="2026-02-06T09:00:00"
    />
  );
}
