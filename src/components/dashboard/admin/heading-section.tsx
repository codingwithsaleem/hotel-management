import React from "react";

const HeadingSection = ({
  heading,
  description
}: {
  heading: string;
  description: string;
}) => {

  const bgImage = "/images/dashboard/bg-2.png";

  return (
    <div
      className="min-h-full px-10 py-14 md:p-14 space-y-8 rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Heading Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#383838] mb-2 leading-tight">
          {heading}
        </h1>
        <p className="text-[#383838]/70 text-base sm:text-lg lg:text-xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeadingSection;
