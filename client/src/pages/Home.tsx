import { useRef } from 'react';
import HamburgerMenu from '@/components/HamburgerMenu';
import HeroSection from '@/components/HeroSection';
import InvitationSection from '@/components/InvitationSection';
import PhotoGallerySection from '@/components/PhotoGallerySection';
import SnapshotSection from '@/components/SnapshotSection';
import EventSection from '@/components/EventSection';
import ThankYouSection from '@/components/ThankYouSection';

import weddingDayImage from '@assets/91A23D80-D07A-4476-AC66-45881BF83E45_1_105_c_1762525345802.jpg';
import receptionGroomImage from '@assets/D377A750-1835-4C49-AA68-B7E9B371F47F_1_105_c_1762525856688.jpg';
import receptionBrideImage from '@assets/1F4B6736-C226-43A5-80E7-0C777518A549_1_105_c_1762527861269.jpg';

export default function Home() {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="scroll-smooth">
      <HamburgerMenu onNavigate={handleNavigate} />
      
      <HeroSection />
      
      <InvitationSection />
      
      <PhotoGallerySection />
      
      <SnapshotSection />
      
      <EventSection
        id="wedding-day"
        title="THE WEDDING DAY"
        date="6TH FEB"
        venue="Rishta Wedding Venue, Below Boragaon Flyover, Boragaon, Guwahati 781011"
        timeline={[
          { time: '9:00 AM', event: 'JUROON' },
          { time: '6:30 PM ONWARDS', event: 'WEDDING RITUALS' },
        ]}
        imageUrl={weddingDayImage}
        imageAlt="Wedding Day Celebration"
        googleMapsUrl="https://www.google.com/maps/search/?api=1&query=Rishta+Wedding+Venue+Below+Boragaon+Flyover+Boragaon+Guwahati+781011"
        eventDateTime="2026-02-06T09:00:00"
      />
      
      <EventSection
        id="reception-groom"
        title="RECEPTION (GROOM'S)"
        date="8TH FEB"
        venue="Rohikaa Hotel, Resham Nagar, Khanapara, Guwahati 781022"
        timeline={[
          { time: '5:30 PM ONWARDS', event: 'RECEPTION' },
        ]}
        imageUrl={receptionGroomImage}
        imageAlt="Groom's Reception"
        googleMapsUrl="https://www.google.com/maps/search/?api=1&query=Rohikaa+Hotel+Resham+Nagar+Khanapara+Guwahati+781022"
        eventDateTime="2026-02-08T17:30:00"
      />
      
      <EventSection
        id="reception-bride"
        title="RECEPTION (BRIDE'S)"
        date="13TH FEB"
        venue="Bride's residence, Ward no 8, Suruj Nagar, Bihpuria, 784161"
        timeline={[
          { time: '1:00 PM ONWARDS', event: 'RECEPTION' },
        ]}
        imageUrl={receptionBrideImage}
        imageAlt="Bride's Reception"
        googleMapsUrl="https://www.google.com/maps/search/?api=1&query=Ward+no+8+Suruj+Nagar+Bihpuria+784161"
        eventDateTime="2026-02-13T13:00:00"
      />
      
      <ThankYouSection />
    </div>
  );
}
