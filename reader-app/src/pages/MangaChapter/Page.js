import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { PHPageImage } from "#src/components/Placeholder";

const Page = ({ src, index }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imageLoaded = (index) => {
    const obj = isImageLoaded;
    obj.push(index);
    setIsImageLoaded(obj);
  };

  return (
    <>
      {!isImageLoaded && (
        <>
          <PHPageImage />
        </>
      )}
      <LazyLoad height={1000} resize={false}>
        <img
          referrerPolicy="no-referrer"
          src={src}
          onLoad={() => {
            setIsImageLoaded(true);
          }}
          onError={(e) => {
            e.target.src = "https://s3.zerochan.net/Touwa.Erio.240.620278.jpg";
            setIsImageLoaded(true);
          }}
        />
      </LazyLoad>
    </>
  );
};

export default Page;
