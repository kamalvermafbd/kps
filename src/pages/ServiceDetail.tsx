import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ChevronRight,
  Activity,
  Stethoscope,
  Info,
  HelpCircle,
  PlayCircle
} from "lucide-react";
import { Service } from "../types";
import AppointmentForm from "../components/AppointmentForm";

interface ServiceDetailProps {
  services: Service[];
}

export default function ServiceDetail({ services }: ServiceDetailProps) {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
 
 

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold mb-4">Service not found</h2>
        <Link to="/" className="text-blue-600 font-bold flex items-center">
          Back to Services <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Service Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">

<div className="w-full h-full bg-slate-200" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <nav className="flex items-center space-x-2 text-sm font-medium text-blue-200 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-white">{service.name}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          {/* Overview */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <Info size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Treatment Overview</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">

<p className="text-lg mb-6">
  {service.intro_text}
</p>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">Who Needs This Treatment?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                {service.symptoms?.split(",").map((symptom, i) => (
                  <li key={i} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{symptom.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process */}
          <section className="bg-blue-50/50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Our Treatment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2 z-0" />
              {[
                { step: "01", title: "Assessment", desc: "Detailed clinical evaluation of your condition and lifestyle." },
                { step: "02", title: "Treatment", desc: "Personalized sessions using advanced techniques." },
                { step: "03", title: "Recovery", desc: "Home exercise programs and long-term prevention." },
              ].map((item, i) => (
                <div key={i} className="relative z-10 bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recovery Timeline */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <Clock size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Recovery Timeline</h2>
            </div>
            <div className="space-y-6">
              {[
                { phase: "Phase 1: Pain Relief", time: "Week 1-2", detail: "Focus on reducing inflammation and restoring basic range of motion." },
                { phase: "Phase 2: Strengthening", time: "Week 3-6", detail: "Building muscle support around the affected area to prevent recurrence." },
                { phase: "Phase 3: Functional Return", time: "Week 6+", detail: "Returning to sports, work, and daily activities with full confidence." },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 border-l-2 border-blue-100 pl-6 pb-8 last:pb-0">
                  <div className="w-4 h-4 bg-blue-600 rounded-full -ml-[33px] mt-1.5 border-4 border-white shadow-sm" />
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <h4 className="font-bold text-slate-900">{item.phase}</h4>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{item.time}</span>
                    </div>
                    <p className="text-sm text-slate-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          {Array.isArray(service.faq_json) && service.faq_json.length > 0 && (
            <section>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <HelpCircle size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-4">
                {service.faq_json.map((faq, i) => (
                  <details key={i} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-bold text-slate-900">{faq.q}</span>
                      <ChevronRight size={20} className="text-slate-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Booking Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden sticky top-24">
            <div className="bg-blue-600 p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Book Your Session</h3>
              <p className="text-sm text-blue-100">Get treated by Faridabad's top specialists</p>
            </div>
            <div className="p-6">
              <AppointmentForm selectedService={service.name} />
            </div>
          </div>

          {/* Doctor Info */}
          <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/doctor/200/200" alt="Dr. K.R. Prasad" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold">Dr. K.R. Prasad</h4>
                  <p className="text-xs text-blue-400">Senior Physiotherapist</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Expert in {service.name} with over 15 years of clinical experience in Faridabad.
              </p>
              <Link to="/contact" className="flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                Consult with Doctor <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <Activity size={100} className="absolute -bottom-10 -right-10 text-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
