"use client";

import NextImage from "next/image";
import { useRef, useState, useEffect } from "react";

const FadeInImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div
      className={`relative h-96 w-full transition-opacity duration-1000 md:w-96 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} h-full w-full rounded-lg object-cover`}
      />
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white-YUMFINITY py-10">
      <SectionWithImage
        title="Our Vision at YUMFINITY"
        paragraph="Here at YUMFINITY, it all started with a vision that sprouted in the minds of few college students. A group of enterprising students, united by their shared passion for technology and good food, set out to create more than just a meal delivery service. We envisioned a platform that would revolutionize the way people access their favorite foods, while also offering fellow students a flexible way to earn money during their college journey. YUMFINITY was born from the belief that everyone deserves to savor delicious meals without the wait, and that's exactly what we deliver, one order at a time."
        imgSrcs={["/images/YUMFINITY MOBILE APP.jpg"]}
        imgAlt="Vision Image"
        reverse={false}
      />

      {/* Updated to accept multiple images */}
      <SectionWithImage
        title="Four Years of Culinary Connections"
        paragraph="Since laying our digital cornerstone four years ago, YUMFINITY has grown from a simple idea into a flourishing community staple. We've been riding a wave of unrelenting growth, seeing our workforce expand and our partnerships with local restaurants strengthen. With each passing year, we reaffirm our commitment to the communities we serve, forging links that turn first-time users into lifelong fans. YUMFINITY isn't just a business; it's an integral thread in the fabric of local dining, continuously woven over four years of dedicated service and innovation."
        imgSrcs={[
          "/images/chef at a local restaurant.jpg",
          "/images/Table filled with food.jpg",
        ]}
        imgAlt="Connections Image"
        reverse={true}
      />

      <SectionWithImage
        title="Team Dynamics and Service Excellence"
        paragraph="Teamwork is the heart of YUMFINITY's operations. Our team is a mosaic of skill and enthusiasm, where every player, from our delivery heroes to our coordination maestros, contributes to the seamless tapestry of our service. We operate with the precision of a well-oiled machine and the warmth of a family dinner table, ensuring that our customer service doesn't just meet expectations—it sets new benchmarks. Around the clock, across all weather, YUMFINITY stands ready. Because when you choose YUMFINITY, you're not just ordering food; you're embracing an experience that's meticulously curated and lovingly delivered, right to your doorstep."
        imgSrcs={["/images/Deliveryguy.jpg", "/images/DeliveryOutfit.jpg"]}
        imgAlt="Team Image"
        reverse={false}
      />

      <SectionWithImage
        title="Beyond the Meal - A Mission Woven into Every Delivery"
        paragraph="At YUMFINITY, we’re more than a business; we're a team that values community and connection as much as we relish a good feast. Our core values—teamwork, community contribution, and the joy of delivering delectable delights to your door—are the ingredients we mix into the recipe of our operation. We cherish the moments we create with every delivery, knowing that with each dish, we're not just fueling bodies; we're feeding souls. Welcome to YUMFINITY—where every bite is a journey, and every delivery is a promise fulfilled."
        imgSrcs={["/images/TeamWork.jpg"]}
        imgAlt="Mission Image"
        reverse={true}
      />
    </div>
  );
}

function SectionWithImage({ title, paragraph, imgSrcs, imgAlt, reverse }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} my-10 items-center justify-center gap-8 md:gap-4
                  ${isVisible ? "animate-fade-in-up" : "opacity-0"} transition-opacity duration-1000`}
    >
      <div className="flex-1 px-4">
        <h2 className="mb-4 text-3xl font-bold text-black-YUMFINITY">
          {title}
        </h2>
        <p className="text-lg text-black-YUMFINITY">{paragraph}</p>
      </div>
      <div className="mt-4 flex flex-1 justify-center px-4 md:mt-0 md:justify-center">
        <div className="flex w-full md:w-auto md:space-x-4">
          {imgSrcs.map((src, index) => (
            <FadeInImage
              key={index}
              src={src}
              alt={imgAlt + index}
              className="shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
