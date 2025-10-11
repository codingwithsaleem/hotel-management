"use client"

import { Button } from "@/components/ui/button"

export default function ExploreCta() {
  return (
    <section
      aria-labelledby="explore-hotels"
      className="relative overflow-hidden"
      style={{
        // Background image (use a hotel/pool placeholder). If you want to embed the provided image,
        // you MUST use its Source URL: https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cv23PieEs7FcHuUiMgrDNBBVKtkUOm.png
        backgroundImage: "url('/images/home/explore.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue overlay for legibility */}
      <div className="absolute inset-0 bg-[#0079FF]/70" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 id="explore-hotels" className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Ready to Explore our Hotels?
          </h2>
          <p className="mt-3 text-sm md:text-base/relaxed text-white/90">
            Sign up today and start enjoying our services!
          </p>

          <div className="mt-6 flex justify-center">
            <Button size="lg" className="rounded-xl bg-white text-[#0B1220] hover:bg-white/90 font-semibold">
              Get Started →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
