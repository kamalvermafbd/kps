import React from "react";

interface Doctor {
  id: string | number;
  doctor_name: string;
  designation: string;
  experience?: string;
  specialization?: string;
  short_intro?: string;
  image_url?: string;
}

interface AboutProps {
  doctors: Doctor[];
}

export default function About({ doctors }: AboutProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div>
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
            About KRP Health Care
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            KRP Health Care is dedicated to transforming lives through compassionate,
            personalized, and comprehensive healthcare services. Our mission is to
            provide high-quality medical solutions that prioritize safety, comfort,
            trust, and long-term well-being.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Our multidisciplinary team includes senior physiotherapists,
            rehabilitation specialists, dieticians, psychologists, gynecologists,
            urologists, and healthcare experts who work together to deliver
            complete care under one roof.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed">
            From pain management and physiotherapy to preventive wellness and
            specialist consultations, we focus on building trust, confidence,
            and long-lasting recovery for every patient we serve.
          </p>

<div className="mt-12 rounded-[32px] border border-blue-200 bg-blue-50/40 p-6 md:p-10">
  <div className="space-y-0">
    {[
      {
        title: "Compassionate Care",
        desc: "Personalized care focused on comfort, trust, and safety.",
      },
      {
        title: "Expert Team",
        desc: "Senior specialists working together for complete wellness.",
      },
      {
        title: "Complete Healing",
        desc: "Recovery, prevention, and long-term patient confidence.",
      },
    ].map((item, i) => (
      <React.Fragment key={i}>
        <div className="bg-white border border-blue-200 rounded-3xl p-6 md:p-7 shadow-sm text-center">
          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto md:mx-0 mb-4 font-bold text-xl">
            0{i + 1}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-relaxed">
            {item.desc}
          </p>
        </div>

        {i !== 2 && (
          <div className="h-10 flex justify-center md:justify-start md:pl-7">
            <div className="w-[2px] bg-blue-200 rounded-full" />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {(doctors || []).map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {doctor.image_url && (
                <img
                  src={doctor.image_url}
                  alt={doctor.doctor_name}
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              )}

              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900">
                  {doctor.doctor_name}
                </h4>

                <p className="text-blue-600 font-semibold mt-1">
                  {doctor.designation}
                </p>

                {doctor.experience && (
                  <p className="text-sm text-slate-500 mt-2">
                    {doctor.experience}
                  </p>
                )}

                {doctor.specialization && (
                  <p className="text-sm text-slate-500 mt-1">
                    {doctor.specialization}
                  </p>
                )}

                {doctor.short_intro && (
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {doctor.short_intro}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
