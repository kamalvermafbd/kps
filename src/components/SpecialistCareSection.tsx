import React from "react";
import {
  HeartPulse,
  Stethoscope,
  Apple,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SpecialistCareSection() {
  const cards = [
    {
      icon: <HeartPulse size={34} />,
      title: "Gynecologist",
      desc: "Comprehensive women’s health support from adolescence to menopause with expert and confidential consultation.",
      link: "/services/gynecology",
    },
    {
      icon: <Stethoscope size={34} />,
      title: "Urologist",
      desc: "Advanced diagnosis and treatment for urinary tract conditions, kidney stones, prostate care, and male reproductive health.",
      link: "/services/urology",
    },
    {
      icon: <Apple size={34} />,
      title: "Diet & Nutrition",
      desc: "Personalized diet plans for weight, diabetes, pregnancy, immunity, and complete lifestyle transformation.",
      link: "/services/diet-nutrition",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-semibold text-blue-600 tracking-[0.15em] mb-4">
          Specialist Healthcare Services
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
          Expert Care Beyond Physiotherapy
        </h3>
        <p className="text-lg text-slate-600">
          Our experienced specialists provide compassionate women’s health,
          urology, and nutrition consultation under one trusted roof.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              {card.icon}
            </div>

            <h4 className="text-2xl font-bold text-slate-900 mb-4">
              {card.title}
            </h4>

            <p className="text-slate-600 leading-relaxed mb-6">
              {card.desc}
            </p>

            <Link
              to={card.link}
              className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Learn More <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
