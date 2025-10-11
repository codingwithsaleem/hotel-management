"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type Partner = {
  id: string
  title: string
  subtitle?: string
  description: string
  image: string
}

const partners: Partner[] = [
  {
    id: "1",
    title: "Test Hotel",
    subtitle: "1757502047.559688",
    description: "This hotel was updated during API testing",
    image: "/images/home/partner-1.png",
  },
  {
    id: "2",
    title: "Updated Test Hotel",
    subtitle: "1757502047.559688",
    description: "This hotel was updated during API testing",
    image: "/images/home/partner-2.png",
  },
  {
    id: "3",
    title: "Lo Pota resort",
    subtitle: "Resort in Alazani valley",
    description: "Leisure and wellness destination with scenic views.",
    image: "/images/home/partner-3.png",
  },
  {
    id: "4",
    title: "Sevsamora",
    subtitle: "Hotel in Saguramo, overlooking river Aragvi Valley, with sights of Kazbegi in clear weather.",
    description: "Experience comfort and breathtaking landscapes year-round.",
    image: "/images/home/partner-4.png",
  },
]

export function OurPartners() {
  return (
    <section aria-labelledby="our-partners-heading" className="w-full py-12 md:py-16 lg:py-20 bg-primary/6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="our-partners-heading"
              className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Our Partner Hotels
            </h2>
            {/* underline accent */}
            <span
              className="mt-2 inline-block h-1 w-16 rounded bg-primary"
              aria-hidden="true"
            />
            <p className="mt-3 max-w-prose text-muted-foreground">
              Lorem Ipsum is simply dummy text of the printing...
            </p>
          </div>

          <Button 
            size="lg" 
            className="self-start sm:self-auto px-8 py-3 text-base font-semibold hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-300"
          >
            View All
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((item) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-border/80 shadow-sm h-80 sm:h-96"
            >
              {/* Full coverage image layer */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} hero`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                />
              </div>

              {/* Bottom overlay text */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                <div className="rounded-xl bg-primary/32 backdrop-blur-md p-4">
                  <h3 className="text-balance text-lg font-semibold leading-tight text-white">{item.title}</h3>
                  {item.subtitle ? (
                    <p className="mt-1 text-sm font-semibold tracking-wide text-white/90">{item.subtitle}</p>
                  ) : null}
                  <p className="mt-2 line-clamp-2 text-sm text-white/80">{item.description}</p>

                  <div className="pointer-events-auto mt-3">
                    <Button size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90 transition-all duration-300">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPartners
