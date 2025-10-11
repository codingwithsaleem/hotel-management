import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative isolate min-h-[80vh] flex items-center" aria-label="Hero">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/images/home/hero-bg.png')",
        }}
      />
      {/* Blue gradient overlay with light black shadow from top and right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-black/25 via-transparent to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8">
          {/* Welcome Badge */}
          <div className="bg-primary h-4 px-2 text-white text-2xl">
           <p> WELCOME TO</p>
          </div>
          
          {/* Main Heading with Shadow */}
          <h1 className="text-balance text-white text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-none px-2">
            <span className="inline-block drop-shadow-2xl shadow-black/50" style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)'
            }}>
              MYHOTEL.SPACE
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/95 text-lg sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl font-medium drop-shadow-md px-4">
            Discover amazing services and experiences for your stay
          </p>
          
          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <Button 
              size="lg" 
              className=" cursor-pointer rounded-xl bg-white text-blue-600 hover:bg-primary hover:text-white font-semibold text-base sm:text-base md:text-lg sm:px-8 h-12 sm:py-4 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Get Started 
              <ArrowRight className="ml-2 h-5 w-5 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
