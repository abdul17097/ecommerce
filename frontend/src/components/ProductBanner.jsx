import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
// Desktop Images
import image1 from "../assest/banner/img1.webp";
import image2 from "../assest/banner/img2.webp";
import image3 from "../assest/banner/img3.jpg";
import image4 from "../assest/banner/img4.jpg";
import image5 from "../assest/banner/img5.webp";
// mobile Images
import mobileImage1 from "../assest/banner/img1_mobile.jpg";
import mobileImage2 from "../assest/banner/img2_mobile.webp";
import mobileImage3 from "../assest/banner/img3_mobile.jpg";
import mobileImage4 from "../assest/banner/img4_mobile.jpg";
import mobileImage5 from "../assest/banner/img5_mobile.png";
const ProductBanner = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const desktopImages = [image1, image2, image3, image4, image5];
  const mobileImages = [
    mobileImage1,
    mobileImage2,
    mobileImage3,
    mobileImage4,
    mobileImage5,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextBtn();
      } else {
        setCurrentImage(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const nextBtn = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage(currentImage + 1);
    }
  };
  const previousBtn = () => {
    if (currentImage != 0) {
      setCurrentImage(currentImage - 1);
    }
  };
  return (
    <div className="container mx-auto px-4 h-96 w-full flex">
      <div className="relative w-full h-full flex overflow-hidden">
        <div className="absolute top-0 right-0 w-full px-4 hidden md:flex justify-between items-center h-full  z-[999]">
          <button onClick={previousBtn} className="bg-white p-2 rounded-full">
            <GrPrevious className="text-2xl" />
          </button>
          <button onClick={nextBtn} className="bg-white p-2 rounded-full">
            <GrNext className="text-2xl" />
          </button>
        </div>
        {desktopImages?.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full min-h-full min-w-full translate translate-x-[-${
              currentImage * 100
            }%]`}
          >
            <img
              src={image}
              alt=""
              className="h-full w-full md:object-none object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBanner;
