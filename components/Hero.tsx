"use client";

import Button from "./Button";

export default function Hero() {
  return (
    <main>
      <div className="relative w-full h-screen overflow-hidden">
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover object-top scale-110 pt-32 bg-black">
          <source src="/video/hero-video-bg.webm" type="video/webm" />
        </video>

        {/* <div className="absolute inset-0 bg-black/60" /> */}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          
          <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
            CONVERTING LIGHT <br /> INTO INSIGHT
          </h1>

          <p className="text-gray-300 mt-4 max-w-xl text-sm md:text-base">
            We implement advanced fibre optic sensing technology and AI processing
            to improve linear asset up-time and reduce operating cost
          </p>

          <div className="mt-6">
             <Button as="link" href="/contact">
          Contact Us
        </Button>
          </div>
        </div>
      </div>
    </main>
  );
}