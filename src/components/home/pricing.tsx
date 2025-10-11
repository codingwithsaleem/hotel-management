"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PricingPlan {
  name: string
  monthlyPrice: number
  annualPrice: number
  description: string
  features: string[]
  isPopular?: boolean
  buttonVariant?: "default" | "secondary"
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    monthlyPrice: 40,
    annualPrice: 400,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Easily create, assign, and track tasks in real time.",
      "Chat, share files, and collaborate seamlessly with your team.",
      "Gain insights with detailed performance dashboards.",
      "Automate repetitive tasks with custom workflow rules.",
    ],
    buttonVariant: "default",
  },
  {
    name: "Pro",
    monthlyPrice: 50,
    annualPrice: 500,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Easily create, assign, and track tasks in real time.",
      "Chat, share files, and collaborate seamlessly with your team.",
      "Gain insights with detailed performance dashboards.",
      "Automate repetitive tasks with custom workflow rules.",
    ],
    isPopular: true,
    buttonVariant: "secondary",
  },
  {
    name: "Advanced",
    monthlyPrice: 60,
    annualPrice: 600,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Easily create, assign, and track tasks in real time.",
      "Chat, share files, and collaborate seamlessly with your team.",
      "Gain insights with detailed performance dashboards.",
      "Automate repetitive tasks with custom workflow rules.",
    ],
    buttonVariant: "default",
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6 font-montserrat">
              <span className="text-primary">Choose The Ideal Plan</span>
            </h2>
        {/* Billing Toggle */}
        <div className="inline-flex items-center bg-white rounded-full  shadow-lg border border-primary">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-4 rounded-full font-medium transition-all duration-300 cursor-pointer text-primary text-md ${
              !isAnnual ? "bg-primary text-white shadow-md" : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-4 rounded-full text-md font-medium transition-all duration-300 cursor-pointer text-primary ${
              isAnnual ? "bg-primary text-white shadow-md" : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className="relative">
            {/* Most Popular Badge */}
            {plan.isPopular && (
              <div className="absolute right-[-60px] transform -translate-x-1/2 z-10">
                <div className="bg-[#000000]/[0.06] text-white px-6 py-2 rounded-xl text-sm font-medium shadow-lg">
                  Most Popular
                </div>
              </div>
            )}

            <Card
              className={`relative h-full transition-all duration-300 hover:shadow-xl rounded-2xl ${
                plan.isPopular
                  ? "bg-primary text-white border-primary shadow-lg scale-105"
                  : "bg-white border-gray-200 hover:border-primary/30"
              }`}
            >
              <CardContent className="p-8">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                    <span className={`ml-2 text-sm ${plan.isPopular ? "text-white/80" : "text-gray-500"}`}>
                      / Per {isAnnual ? "Year" : "Month"}
                    </span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${plan.isPopular ? "text-white/90" : "text-gray-600"}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.isPopular ? "bg-white/20" : "bg-green-100"
                          }`}
                        >
                          <Check className={`w-3 h-3 ${plan.isPopular ? "text-white" : "text-green-600"}`} />
                        </div>
                        <span
                          className={`text-sm leading-relaxed ${plan.isPopular ? "text-white/90" : "text-gray-600"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Upgrade Button */}
                <Button
                  className={`w-full h-12 text-base font-medium rounded-full transition-all duration-300 cursor-pointer ${
                    plan.isPopular
                      ? "bg-white text-primary hover:bg-gray-50 shadow-md"
                      : "bg-primary text-white hover:bg-[#7785e8] shadow-md hover:shadow-lg"
                  }`}
                >
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
