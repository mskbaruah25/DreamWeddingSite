import tajMahalImage from '@assets/image_1762524848642.png';
import ringsImage from '@assets/DSC_4706_1762524863671.jpg';

export default function PhotoGallerySection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative min-h-[50vh] lg:min-h-[60vh] bg-[#F5F1E8] flex items-center justify-center p-8">
        <img
          src={tajMahalImage}
          alt="Couple at Taj Mahal"
          className="w-full h-auto max-w-2xl object-cover rounded-lg shadow-md"
          data-testid="img-gallery-taj"
        />
      </div>

      <div className="relative min-h-[50vh] lg:min-h-[60vh] bg-black flex items-center justify-center p-8">
        <img
          src={ringsImage}
          alt="Wedding rings with henna"
          className="w-full h-auto max-w-md object-cover rounded-lg shadow-md"
          data-testid="img-gallery-rings"
        />
      </div>
    </section>
  );
}
