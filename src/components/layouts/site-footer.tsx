"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#000913] text-white">
      {/* Top content area */}
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <Image
                src="/images/footer-logo.svg"
                alt="MyHotel.space"
                width={200}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links" className="text-sm">
            <h3 className="mb-3 font-semibold text-white/90">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#hotels" className="hover:text-white">
                  Hotels
                </Link>
              </li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support" className="text-sm">
            <h3 className="mb-3 font-semibold text-white/90">Support</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-white">
                  Terms Of Service
                </Link>
              </li>
            </ul>
          </nav>

          {/* Updates */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white/90">Get Updates</h3>
            <form
              className="relative"
              onSubmit={(e) => {
                e.preventDefault()
                // ... you can wire up your action here
              }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg bg-white/10 h-11 w-70 text-white placeholder:text-white/60 pr-24 border-white/20 focus:border-[#0079FF]"
                required
              />
              <Button 
                type="submit" 
                className="absolute left-46 top-1 bottom-1 rounded-md bg-[#0079FF] hover:bg-[#0079FF]/90 px-4 text-sm font-medium"
              >
                Subscribe
              </Button>
            </form>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-5 text-white/80">
              <Link href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="X (Twitter)" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-10 border-white/10" />

        {/* Bottom line */}
        <p className="py-6 text-center text-xs text-white/60">Copyright © 2025 My Hotel Space. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
