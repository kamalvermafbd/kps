import React, { useState } from "react";
import {
  HeartPulse,
  Stethoscope,
  Apple,
  ArrowRight,
  X,
} from "lucide-react";

export default function SpecialistCareSection() {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const cards = [
    {
      icon: <HeartPulse size={34} />,
      title: "Gynecologist",
      desc: "Comprehensive women’s health support from adolescence to menopause with expert and confidential consultation.",
      details: {
        heading:
          "Comprehensive Women’s Health, from adolescence to menopause with our AIIMS trained Expert.",
        intro:
          "Our expert Gynecologists provide compassionate and confidential care for all women’s health issues. Whether you need a routine check-up or treatment for specific conditions, we are here for you.",
        label: "Services include:",
        services: [
          "Menstrual Disorders Treatment",
          "PCOS/PCOD Management",
          "Pregnancy Checkups & Antenatal Care",
          "Family Planning & Contraception",
          "Menopause Counseling",
          "Female Fertility Evaluation",
        ],
        footer: "",
      },
    },
    {
      icon: <Stethoscope size={34} />,
      title: "Urologist",
      desc: "Advanced diagnosis and treatment for urinary tract conditions, kidney stones, prostate care, and male reproductive health.",
      details: {
        heading:
          "Expert Care for Urinary and Reproductive Health with our AIIMS trained Expert.",
        intro:
          "Our Urology department offers advanced diagnosis and treatment for urinary tract and male reproductive system disorders. We ensure complete privacy and personalized care for all patients.",
        label: "We treat:",
        services: [
          "Urinary Tract Infections (UTI)",
          "Kidney Stones",
          "Prostate Enlargement",
          "Male Infertility",
          "Erectile Dysfunction",
          "Bladder Control Problems",
        ],
        footer: "",
      },
    },
    {
      icon: <Apple size={34} />,
      title: "Diet & Nutrition",
      desc: "Personalized diet plans for weight, diabetes, pregnancy, immunity, and complete lifestyle transformation.",
      details: {
        heading: "Eat better, live stronger.",
        intro:
          "Our certified Dieticians help you achieve your health goals through personalized diet plans. Whether it’s weight management, diabetes, hypertension, or sports nutrition — we guide you with practical, result-oriented solutions.",
        label: "Our specialties:",
        services: [
          "Therapeutic Diet Planning",
          "Weight Loss/Gain Programs",
          "Diet for Lifestyle Diseases",
          "Nutrition for Pregnant Women & Children",
          "Detox & Immunity Boosting Diets",
        ],
        footer:
          "Get a custom diet chart based on your medical reports and lifestyle.",
      },
    },
  ];

  return (
    <>
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

              <button
                onClick={() => setSelectedCard(card)}
                className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-6 right-6 text-slate-500 hover:text-slate-900"
            >
              <X size={24} />
            </button>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {selectedCard.title}
            </h3>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {selectedCard.details.heading}
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              {selectedCard.details.intro}
            </p>

            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">
                {selectedCard.details.label}
              </h4>

              <ul className="space-y-3">
                {selectedCard.details.services.map(
                  (service: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-center text-slate-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                      {service}
                    </li>
                  )
                )}
              </ul>

              {selectedCard.details.footer && (
                <p className="text-slate-600 italic mt-6 leading-relaxed">
                  {selectedCard.details.footer}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
