import React from "react";
import { Link } from "react-router-dom";
import FitSphereIcon from "../components/icons/FitSphereIcon";

export default function FitSphere() {
  return (
    <div className="min-h-screen bg-[#eef8ea]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eef8ea] via-[#f7fcf5] to-[#e4f3de]" />

        {/* floating decorative shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-green-200/40 blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-lime-200/40 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-green-100 rounded-full px-5 py-2 shadow-sm">
            <FitSphereIcon className="w-8 h-8" />
            <span className="text-sm font-semibold text-green-700">
              FitSphere by Shweta
            </span>
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

          {/* quick cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-green-50">
              <h3 className="font-bold text-slate-900">
                Personalized Nutrition
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Custom meal plans for weight loss, diabetes, PCOS and lifestyle
                improvement.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-green-50">
              <h3 className="font-bold text-slate-900">
                Weight Management
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Sustainable plans to lose, gain, or maintain healthy weight
                without crash dieting.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-green-50">
              <h3 className="font-bold text-slate-900">
                Women & Fitness Wellness
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                Pregnancy, PCOS, hormonal balance, sports recovery and active
                lifestyle support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
