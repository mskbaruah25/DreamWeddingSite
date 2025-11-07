import { MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventButtonsProps {
  googleMapsUrl: string;
  eventDate: string;
  eventTitle: string;
  eventLocation: string;
  eventTime: string;
}

export default function EventButtons({
  googleMapsUrl,
  eventDate,
  eventTitle,
  eventLocation,
  eventTime,
}: EventButtonsProps) {
  const handleAddToCalendar = () => {
    const startDate = new Date(eventDate).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDate = new Date(new Date(eventDate).getTime() + 4 * 60 * 60 * 1000)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, '');
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      `Join us for ${eventTitle}`
    )}&location=${encodeURIComponent(eventLocation)}`;
    
    window.open(calendarUrl, '_blank');
  };

  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <Button
        variant="outline"
        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-3 text-sm tracking-wide uppercase transition-all"
        onClick={() => window.open(googleMapsUrl, '_blank')}
        data-testid="button-directions"
      >
        <MapPin className="w-4 h-4 mr-2" />
        Directions
      </Button>
      
      <Button
        variant="outline"
        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-3 text-sm tracking-wide uppercase transition-all"
        onClick={handleAddToCalendar}
        data-testid="button-add-calendar"
      >
        <Calendar className="w-4 h-4 mr-2" />
        Add to Calendar
      </Button>
    </div>
  );
}
