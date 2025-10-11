"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {  ArrowUp } from "lucide-react";
import Container from "../Container";
import BonusFeatures from "./bonus-features";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      title: "Tell Us What You Do",
      description: "Answer 3 two-quick questions about your service, payment schedules, refund policy, and main type. No legal jargon — just real talk.",
      image: "/images/howItWorks/img1.png",
      position: "right"
    },
    {
      id: 2,
      title: "Get a Custom Contract",
      description: "Our smart system builds a contract tailored to your industry. It flags risky clauses and suggests the fine print that keeps you covered.",
      image: "/images/howItWorks/img2.png",
      position: "left"
    },
    {
      id: 3,
      title: "Send & Sign in Minutes",
      description: "Send your contract straight from the platform. Your client gets a clean, mobile-friendly version to sign digitally — no downloads or printing needed.",
      image: "/images/howItWorks/img3.png",
      position: "right"
    },
    {
      id: 4,
      title: "Track It All in One Place",
      description: "See who's viewed, signed, or ghosted. Everything is time-stamped and stored, so you're never caught slipping.",
      image: "/images/howItWorks/img4.png",
      position: "left"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const sectionStart = sectionTop - windowHeight / 2;
      const sectionEnd = sectionTop + sectionHeight - windowHeight / 2;
      const progress = Math.max(0, Math.min(100, ((scrollY - sectionStart) / (sectionEnd - sectionStart)) * 100));

      setScrollProgress(progress);

      // Update active step based on scroll position
      const stepProgress = (progress / 100) * (steps.length - 1);
      setActiveStep(Math.round(stepProgress));

      // Show scroll to top button when near bottom of page
      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = scrollY + windowHeight;
      setShowScrollTop(currentScroll > documentHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div ref={sectionRef} className="pt-20  relative overflow-hidden">
        <Container>
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
              How It Works – Fynlyze
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protect Your Paper. Secure Your Hustle.
            </p>
          </div>

          {/* Steps Section */}
          <div className="relative">
            {/* Vertical Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden lg:block">
              <div 
                className="w-full bg-gradient-to-b from-[#89DDF1] via-[#8F8DEB] to-[#6977C5] transition-all duration-300 ease-out"
                style={{ height: `${scrollProgress}%` }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-32">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center gap-20 ${
                    step.position === "left" ? "lg:flex-row-reverse" : ""
                  }`}
                >

                   {/* Image */}
                  <div className="flex-1 flex justify-center">
                    <div className={`relative transition-all duration-500 ${
                      activeStep >= index ? "opacity-100 scale-100" : "opacity-60 scale-95"
                    }`}>
                      <div className="w-60 h-60 flex items-center justify-center">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={300}
                          height={300}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#89DDF1] to-[#8F8DEB] text-white rounded-full text-xl font-bold mb-6">
                      {step.id.toString().padStart(2, '0')}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>

                 

                  {/* Step Progress Indicator for Mobile */}
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className="flex space-x-2">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i <= activeStep
                              ? "bg-gradient-to-r from-[#89DDF1] to-[#8F8DEB]"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <div
            onClick={scrollToTop}
            className="flex justify-center items-center cursor-pointer fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#89DDF1] to-[#8F8DEB] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="mx-auto" />
          </div>
        )}
      </div>

      {/* Bonus Features Section */}
      <div className="md:p-20">
        <BonusFeatures />
      </div>
    </>
  );
};

export default HowItWorks;