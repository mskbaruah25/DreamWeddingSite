import tajMahalImage from '@assets/image_1762524848642.png';
import ringsImage from '@assets/DSC_4706_1762524863671.jpg';

export default function PhotoGallerySection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="relative h-full bg-[#F5F1E8] overflow-hidden">
        <img
          src={tajMahalImage}
          alt="Couple at Taj Mahal"
          className="w-full h-full object-cover"
          data-testid="img-gallery-taj"
        />
      </div>

      <div className="relative h-full bg-black overflow-hidden">
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
