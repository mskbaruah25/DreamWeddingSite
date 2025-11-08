import tajMahalImage from '@assets/IMG_6818_1762523236766.jpg';
import ringsImage from '@assets/DSC_4706_1762524863671.jpg';

export default function PhotoGallerySection() {
  return (
    <section className="w-full">
      <div className="w-full h-screen relative">
        <img
          src={tajMahalImage}
          alt="Couple at Taj Mahal"
          className="w-full h-full object-cover"
          data-testid="img-gallery-taj"
        />
      </div>
      
      <div className="w-full h-screen relative">
        <img
          src={ringsImage}
          alt="Wedding rings with henna"
          className="w-full h-full object-cover"
          data-testid="img-gallery-rings"
        />
      </div>
    </section>
  );
}
