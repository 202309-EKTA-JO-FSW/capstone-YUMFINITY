"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const FadeInImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div
      className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <Image src={src} alt={alt} {...props} />
    </div>
  );
};

export default FadeInImage;
