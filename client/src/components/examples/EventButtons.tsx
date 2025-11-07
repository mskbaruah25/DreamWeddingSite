import EventButtons from '../EventButtons';

export default function EventButtonsExample() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <EventButtons
        googleMapsUrl="https://maps.google.com"
        eventDate="2026-02-06T09:00:00"
        eventTitle="Wedding Day"
        eventLocation="Rishta Wedding Venue, Guwahati"
        eventTime="9:00 AM"
      />
    </div>
  );
}
