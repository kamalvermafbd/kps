import React from "react";
import { ArrowRight } from "lucide-react";

export default function LeadingCareBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#1e3a5f] via-[#2f4f6f] to-[#1e293b] text-white px-8 md:px-16 py-16 md:py-20">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_40%)]" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-blue-200 mb-4">
              Every Patient Is Our Priority
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Leading With Physiotherapy,
              <br />
              Healing With Complete Care
            </h2>

            <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-xl">
              From the moment you enter KRP Health Care, your care becomes our
              top priority. We combine expert treatment with a caring atmosphere,
              advanced machines, and a smiling team — everything is designed to
              help you recover faster and feel better, both physically and mentally.
            </p>

           <a
  href="#services"
  className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
>
  Explore More <ArrowRight size={18} className="ml-2" />
</a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              
                <img
  src="https://plus.unsplash.com/premium_photo-1663012948067-0478e4f9d9c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Physiotherapy care"
  className="w-full h-[420px] object-cover"
  referrerPolicy="no-referrer"
/>
                alt="Physiotherapy care"
                className="w-full h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
