import { useState } from "react";
import Img1 from "../assets/images/image-product-1.jpg";
import Img2 from "../assets/images/image-product-2.jpg";
import Img3 from "../assets/images/image-product-3.jpg";
import Img4 from "../assets/images/image-product-4.jpg";
import Thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumb4 from "../assets/images/image-product-4-thumbnail.jpg";
import nextIcon from "../assets/images/icon-next.svg";
import prevIcon from "../assets/images/icon-previous.svg";
import closeIcon from "../assets/images/icon-close.svg";

function ProductImage() {
  const productThumbs = [Thumb1, Thumb2, Thumb3, Thumb4];
  const productImages = [Img1, Img2, Img3, Img4];

  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === productImages.length - 1 ? 0 : prevImage + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? productImages.length - 1 : prevImage - 1
    );
  };

  return (
    <>
      {/* Main Section */}
      <section className="image-section">
        <div className="product-images">
          <img
            src={productImages[currentImage]}
            alt={`Product ${currentImage + 1}`}
            className="main-image"
            onClick={() => setIsLightboxOpen(true)}
          />
        </div>

        <div className="nav-icons">
          <button className="prev-icon nav-icon" onClick={handlePrevImage}>
            <img src={prevIcon} alt="previous" />
          </button>

          <button className="next-icon nav-icon" onClick={handleNextImage}>
            <img src={nextIcon} alt="next" />
          </button>
        </div>

        <div className="thumbnails">
          {productThumbs.map((thumb, index) => (
            <div
              key={index}
              className={`thumbnail ${
                index === currentImage ? "active-thumb" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <img src={thumb} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox">
          <div
            className="overlay"
            onClick={() => setIsLightboxOpen(false)}
          ></div>
          <div className="lightbox-content">
            <button
              className="close-btn"
              onClick={() => setIsLightboxOpen(false)}
            >
              <img src={closeIcon} alt="close" />
            </button>

            <img
              src={productImages[currentImage]}
              alt={`Product ${currentImage + 1}`}
              className="lightbox-image"
            />

            <button className="prev-btn" onClick={handlePrevImage}>
              <img src={prevIcon} alt="previous" />
            </button>
            <button className="next-btn" onClick={handleNextImage}>
              <img src={nextIcon} alt="next" />
            </button>

            <div className="lightbox-thumbnails">
              {productThumbs.map((thumb, index) => (
                <div
                  key={index}
                  className={`thumb ${index === currentImage ? "active" : ""}`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductImage;
