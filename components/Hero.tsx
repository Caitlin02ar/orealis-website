"use client";

import Button from "./Button";

export default function Hero() {
  return (
    <main>
      <div id="hero" className="relative w-full h-screen overflow-hidden">        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover scale-110 pt-16 md:pt-44 bg-[var(--color-dark-gray)] [object-position:center_-100px] md:object-top">
          <source src="/video/hero-video-bg.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          
          <h1 className="text-[var(--color-light)] text-4xl md:text-6xl font-semibold leading-tight">
            CONVERTING LIGHT <br /> INTO INSIGHT
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-sm md:text-base">
            We implement advanced fibre optic sensing technology and AI processing
            to improve linear asset up-time and reduce operating cost
          </p>
          <div className="mt-6 w-full max-w-xs mx-auto">
            <Button
                    as="link"
                    href="https://mail.google.com/mail/?view=cm&to=caitlinliadi@gmail.com&subject=Project Inquiry&body=Hello Rob,"
                    target="_blank"
                  >
                    Contact Us
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}