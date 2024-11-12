import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "./Gallery.css";
import { BsInstagram } from "react-icons/bs";
const galleryimages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex_center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant" style={{ color: "#DCCA87" }}>
          Photo Gallery
        </h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          With these adjustments, the image should now float to the right in
          each AwardCard, and the layout should be responsive. If the image is
          not changing or displaying as expected, it could be due to a few
          possible reasons. Here’s a checklist to help
        </p>
        <button
          type="button"
          className="custom__button"
          style={{
            color: "#0C0C0C",
            borderColor: "#DCCA87",
            backgroundColor: "#DCCA87",
            padding: "14px",
            borderRadius: "3px",
            width: "180px",
            color: "#0C0C0C",
            borderColor: "#DCCA87",
            backgroundColor: "#DCCA87",
            padding: "14px",
            borderRadius: "8px",
            width: "150px",
            textAlign: "center",
          }}
        >
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryimages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index+1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon"></BsInstagram>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
