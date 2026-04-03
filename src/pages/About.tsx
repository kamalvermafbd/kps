{/* About Us + Expert Team */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    
    <div>
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
        About KRP Health Care
      </h2>

      <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
        Compassionate Care. Expert Team. Complete Healing.
      </h3>

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
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
        >
          {doctor.image_url && (
            <img
              src={doctor.image_url}
              alt={doctor.doctor_name}
              className="w-full h-64 object-cover"
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

      
