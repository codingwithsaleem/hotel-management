import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function AboutUsSection() {
  const testimonials = [
    {
      id: 1,
      name: "David Pierce",
      company: "AUTODESK",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      avatar: "/images/david-pierce.png",
    },
    {
      id: 2,
      name: "David Pierce",
      company: "AUTODESK",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      avatar: "/images/david-pierce.png",
    },
    {
      id: 3,
      name: "David Pierce",
      company: "AUTODESK",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      avatar: "/images/sarah-johnson.png",
    },
    {
      id: 4,
      name: "David Pierce",
      company: "AUTODESK",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      avatar: "/images/sarah-johnson.png",
    },
  ];

  const faqs = [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="px-6">
      <div className="grid lg:grid-cols-7 gap-16 items-start">
        <div className="hidden lg:block h-full">
          <h2 className="text-2xl font-semibold text-[#383838] p-8">
            About Us
          </h2>
        </div>
        {/* Left Column - About Us */}

        <div className="space-y-8 bg-[#FFFFFF59] backdrop-blur-sm px-4  md:px-8 py-10 md:py-20 shadow-lg col-span-3">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-6 w-full">
              <h3 className="text-4xl font-bold leading-tight">
                <span className="text-[#8898f0]">Protect your paper.</span>
                <br />
                <span className="text-[#8898f0]">Secure your hustle.</span>
                <br />
                <span className="text-[#8898f0]">Finalize it with Fynlze.</span>
              </h3>
              <p className="text-[#383838] leading-relaxed text-sm">
                Fynlze is the fast, no-fuss way to protect your hustle. Built
                for gig workers, freelancers, and small business owners, our
                contract platform gives you on-demand access to legal,
                ready-to-send agreements—so you never have to choose between
                speed and security.
              </p>
            </div>
            <div>
              <Image
                src="/images/home/aboutus1.png"
                alt="Woman with phone - FyNyL Always On"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Contract Signing Section */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/home/aboutus2.png"
                alt="Contract signing with security verification"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <div>
              <p className="text-[#383838] text-sm leading-relaxed">
                From lash techs and MUAs to DJs and mobile bartenders, we meet
                you where the money moves: fast. Just answer a few guided
                questions and get a contract tailored to your industry, with
                protections baked in for deposits, cancellations, refunds, and
                more.
              </p>
            </div>
          </div>

          {/* Office Discussion Section */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-[#383838] text-sm leading-relaxed mb-4">
                Need a quick summary before signing? Want a heads-up on red
                flags? We&apos;ve got upgrades for that too.
              </p>
              <p className="text-[#383838] text-sm leading-relaxed">
                Fynlze keeps you informed, in control, and fully covered—without
                needing a law degree.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/home/aboutus3.png"
                alt="Business people discussing documents in office"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Testimonials & FAQ */}

        <div className="space-y-8 col-span-3">
          <div className="grid md:grid-cols-3 gap-6 bg-[#FFFFFF59] backdrop-blur-sm px-4 py-10 md:px-8 md:py-10 shadow-lg border rounded-b-xl">
            <div className="space-y-6 w-full">
              <div>
                <div>
                  <h3 className="text-3xl font-bold text-[#8898f0] mb-6">
                    What Our
                    <br />
                    Clients Say
                  </h3>
                  <p className="text-[#383838] text-sm mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
                <div>
                  <Image
                    src={"/images/home/aboutus4.png"}
                    alt="FyNyL Team Member"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-end col-span-2">
              <div className="grid grid-cols-2 gap-4 justify-center">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src={"/images/home/aboutus5.png"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-[#383838] text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-[#8898f0] font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <p className="text-[#383838] text-xs leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF59] backdrop-blur-sm p-6 shadow-lg border rounded-t-xl px-4 py-10 md:px-8 md:py-10">
            <h3 className="text-3xl font-bold text-[#8898f0] mb-6 text-center">
              Burning Questions
              <br />
              About FyNyL
            </h3>
            <p className="text-[#383838] text-sm text-center mb-8">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            {/* FAQ Section */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
              <Collapsible key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <CollapsibleTrigger
                className="flex items-center justify-between w-full p-4 text-left transition-all duration-300 ease-in-out hover:bg-[#f3f6fd] group focus:outline-none focus:ring-2 focus:ring-[#8898f0]"
                >
                <span className="text-[#383838] text-sm font-medium pr-4 group-hover:text-[#8898f0] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className="h-4 w-4 text-[#8898f0] shrink-0 transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180"
                />
                </CollapsibleTrigger>
                <CollapsibleContent
                className="overflow-hidden border-t border-gray-200 px-4 pb-4 pt-4 transition-all duration-500 ease-in-out data-[state=closed]:animate-out data-[state=closed]:slide-up-1 data-[state=open]:animate-in data-[state=open]:slide-down-1"
                >
                <p className="text-[#383838] text-sm leading-relaxed">
                  {faq.answer}
                </p>
                </CollapsibleContent>
              </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
