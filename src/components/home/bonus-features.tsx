"use client";

import React from "react";
import Image from "next/image";
import Container from "../Container";

const BonusFeatures = () => {
  const bonusFeatures = [
    {
      icon: "/images/howItWorks/icon1.png",
      title: "Industry-Specific Clauses",
      description: "Tailored legal clauses for your specific industry and business needs"
    },
    {
      icon: "/images/howItWorks/icon2.png",
      title: "Red Flag Alerts",
      description: "Automatic detection of potential issues in contract terms"
    },
    {
      icon: "/images/howItWorks/icon3.png",
      title: "4th-Grade Level Summary",
      description: "Complex legal language simplified for easy understanding"
    },
    {
      icon: "/images/howItWorks/icon4.png",
      title: "Lock It Up: Tamper-proof after signing",
      description: "Secure, immutable contracts that cannot be altered post-signature"
    }
  ];

  return (
    
     
        <div className="p-10 bg-[#8F8DEB]/34 rounded-4xl mb-20">
             <Container>
        <div className="text-center">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Bonus Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonusFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 hover:rounded-4xl  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={30}
                    className="object-contain w-60 h-30 p-6"
                  />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
    </Container>
      </div>
  );
};

export default BonusFeatures;
