import React from "react";
import { Link } from "react-router-dom";
import FitSphereIcon from "../components/icons/FitSphereIcon";

export default function FitSphere() {
  return (
    <div className="min-h-screen bg-[#eef8ea]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20">
        <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-20"
>
 <source
  src="https://videos.pexels.com/video-files/5865848/5865848-hd_1920_1080_25fps.mp4"
  type="video/mp4"
/>
</video>
        
        <div className="absolute inset-0 bg-green-50/10" />

        {/* floating decorative shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-green-200/40 blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-lime-200/40 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
          {/* brand heading */}
<div className="text-center">
  <h2 className="text-4xl md:text-6xl font-extrabold tracking-[0.08em] text-green-700 uppercase">
    FITSPHERE
  </h2>
  <p className="mt-3 text-base md:text-xl text-slate-600 font-medium leading-relaxed">
    Nourish your body, energize your soul,
    <span className="block">
      and let balance shape your journey.
    </span>
  </p>
</div>


          {/* heading */}
          <h1 className="mt-8 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Transform Your Health
            <span className="block text-green-700">
              Through Mindful Nutrition
            </span>
          </h1>

          {/* subtext */}
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Personalized nutrition plans, weight management, diabetes care,
            women’s wellness, pregnancy diets, kids nutrition, and sustainable
            fitness coaching designed for real long-term results.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              to="/contact#appointment"
              className="inline-flex items-center rounded-full bg-green-600 px-8 py-4 text-white font-semibold shadow-lg shadow-green-200 hover:bg-green-700 transition-all"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About Shweta */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* left content */}
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-green-600">
                About Shweta
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Science-Backed Nutrition With a Practical Lifestyle Approach
              </h2>

              <div className="mt-6 space-y-5 text-slate-600 leading-8 text-[17px]">
                <p>
                  Hi, I’m{" "}
                  <span className="font-semibold text-slate-900">Shweta</span>,
                  a Nutrition & Diet Consultant at KRP Healthcare & Wellness
                  Centre, Faridabad. With a strong academic foundation, multiple
                  certifications, and my ongoing Master’s in Dietetics and Food
                  Service Management, I blend evidence-based nutrition with
                  practical, sustainable solutions that help clients achieve
                  real and lasting health outcomes.
                </p>

                <p>
                  Having lived in Australia for several years, I personally
                  experienced the transformative power of a healthy, active
                  lifestyle. Today, I bring that same balanced and realistic
                  wellness philosophy to clients in India—helping them lose
                  weight, manage lifestyle disorders, improve confidence, and
                  build healthier habits for life.
                </p>

                <p>
                  At KRP Healthcare, our focus goes beyond diet charts. We
                  create personalised nutrition strategies, simple daily fitness
                  routines, and habit-based wellness systems that seamlessly fit
                  into modern lifestyles for all age groups.
                </p>
              </div>
            </div>

            {/* right services cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-3xl border border-green-100 bg-[#f8fcf6] p-6">
                <h3 className="font-bold text-slate-900">
                  Weight Management Programs
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  Safe and sustainable plans for healthy weight loss, gain, and
                  long-term maintenance.
                </p>
              </div>

              <div className="rounded-3xl border border-green-100 bg-[#f8fcf6] p-6">
                <h3 className="font-bold text-slate-900">
                  Diabetes & Lifestyle Care
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  Personalized food and lifestyle guidance for blood sugar,
                  cholesterol, and BP control.
                </p>
              </div>

              <div className="rounded-3xl border border-green-100 bg-[#f8fcf6] p-6">
                <h3 className="font-bold text-slate-900">
                  Children, Teens & Women’s Nutrition
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  Growth-focused nutrition plans for kids, pregnancy, postnatal
                  recovery, PCOS, and hormones.
                </p>
              </div>

              <div className="rounded-3xl border border-green-100 bg-[#f8fcf6] p-6">
                <h3 className="font-bold text-slate-900">
                  Therapeutic & Fitness Nutrition
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-6">
                  Expert diet plans for thyroid, fatty liver, digestion, sports
                  recovery, and active lifestyles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
