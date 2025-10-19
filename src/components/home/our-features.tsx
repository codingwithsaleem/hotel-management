import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Premise Reservations",
    icon: "/images/home/feature-icon-1.svg",
    description: "Book and manage hotel premises and spaces with ease.",
  },
  {
    icon: "/images/home/feature-icon-2.svg",
    title: "Hotel Services",
    description: "Access comprehensive hotel services and amenities.",
  },
  {
    icon: "/images/home/feature-icon-3.svg",
    title: "Explore Hotels",
    description: "Discover and explore hotels across different locations.",
  },
];

function FeatureCard({
  feature,
  className,
}: {
  feature: Feature;
  className?: string;
}) {
  const Icon = feature.icon;
  return (
    <Card className={cn("h-full border-border/80 shadow-sm", className)}>
      <CardContent className="p-6">
        {/* Decorative icon */}
        <div
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md"
          aria-hidden="true"
        >
          <Image
            src={Icon}
            alt={feature.title}
            className="h-15 w-15"
            width={60}
            height={60}
          />
        </div>
        <h3 className="text-lg font-semibold tracking-tight">
          {feature.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function OurFeatures() {
  return (
    <section aria-labelledby="our-features-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2
            id="our-features-title"
            className="text-pretty text-2xl md:text-3xl font-bold tracking-tight"
          >
            Our Features
          </h2>
          {/* underline accent - centered */}
          <div className="flex justify-center">
            <span
              className="mt-2 inline-block h-1 w-16 rounded bg-primary"
              aria-hidden="true"
            />
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
