import React from "react";
import "../App.css";

const MarqueeSlider = () => {
  const photos = [
    "https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-6.png?lossy=0&webp=90&avif=90&ssl=1",
    "https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-5.png?lossy=0&webp=90&avif=90&ssl=1",
    "https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-4.png?lossy=0&webp=90&avif=90&ssl=1",
    "https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-1.png?lossy=0&webp=90&avif=90&ssl=1",
    "https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-3.png?lossy=0&webp=90&avif=90&ssl=1",
    "https://emcgtdx36wv.exactdn.com/storage/2024/10/certification-2.png?lossy=0&webp=90&avif=90&ssl=1",
    ];

  return (
      <div className="marquee w-[100%]  ">
      <div className="marquee-track  w-[100%] p-2 flex justify-between">
        {photos.concat(photos).map((photo, index) => (
          <div key={index} className="marquee-item">
            <img className="" src={photo} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
