type GalleryProductType = {
  images: string[]
}

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images[0];

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
          <div key={images} className="product-gallery__thumb">
            <img src={images} alt="" />
          </div>
      </div>

      <div className="product-gallery__image">
        <img src={images} alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;
  