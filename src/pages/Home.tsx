import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  ShieldCheck, 
  Users, 
  Stethoscope,
  Star,
  CheckCircle2
} from "lucide-react";
import { Service } from "../types";

interface HomeProps {
  services: Service[];
}

export default function Home({ services }: HomeProps) {
 const heroImage = "https://picsum.photos/seed/krp-clinic/1600/900";

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage ? (
            <img 
              src={heroImage} 
              alt="KRP Healthcare Clinic" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-slate-200 animate-pulse" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-blue-400/30 mb-6">
              <Activity size={16} className="text-blue-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Top Rated in Faridabad</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Advanced <span className="text-blue-400">Physiotherapy</span> & Rehabilitation
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Specialized recovery programs by expert physiotherapists in Faridabad. We help you move better, feel better, and live better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center"
              >
                Book Consultation <ArrowRight size={20} className="ml-2" />
              </Link>
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 border border-slate-100">
          {[
            { label: "Patients Treated", value: "10,000+", icon: Users },
            { label: "Expert Doctors", value: "15+", icon: Stethoscope },
            { label: "Years Experience", value: "12+", icon: ShieldCheck },
            { label: "Success Rate", value: "98%", icon: Activity },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

{/* Intro Video Section */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    {/* Video */}
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
   <div className="aspect-video lg:h-[520px]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/39zCdwhUm3s"
          title="KRP Healthcare Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>

    {/* Content */}
    <div>
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
        Welcome to KRP Health Care
      </h2>

      <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
        Complete Healthcare Under One Roof
      </h3>

      <p className="text-lg text-slate-600 leading-relaxed mb-10">
        KRP Health Care offers expert physiotherapy, nutrition, psychology,
        gynecology, and urology consultations — all in one trusted center.
        Our mission is personalized, affordable, and reliable care for complete recovery.
      </p>

      <div className="space-y-8">
        {[
          {
            no: "01",
            title: "Multidisciplinary Team of Experts",
            desc: "From physiotherapists to dieticians, psychologists, and specialists, we provide coordinated care."
          },
          {
            no: "02",
            title: "Patient-Centered Care Approach",
            desc: "Every treatment plan is designed around your personal recovery journey and comfort."
          }
        ].map((item, i) => (
          <div key={i} className="border-t border-slate-200 pt-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-slate-400 font-bold">{item.no}</span>
              <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
            </div>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>




      {/* Highlight Video 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-w-5xl mx-auto">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qeCmfpvyg5k"
              title="KRP Healthcare Highlight"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      
      
      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Comprehensive Treatment for Every Condition
          </h3>
          <p className="text-lg text-slate-600">
            We combine clinical excellence with personalized care to ensure your journey to recovery is smooth and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>
        

  
      
      {/* Why Choose Us */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Why KRP Healthcare</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
                The Gold Standard in Physiotherapy
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our clinic in Sector 16 Faridabad is equipped with state-of-the-art rehabilitation technology and staffed by senior specialists.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Evidence-Based Practice", desc: "We use the latest clinical research to design your treatment plan." },
                { title: "Personalized Care", desc: "One-on-one sessions tailored to your specific goals and lifestyle." },
                { title: "Modern Technology", desc: "Advanced modalities for faster recovery and pain relief." },
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
       
    
      <div className="relative">
  <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white p-10 h-full">
    <div className="flex flex-col md:flex-row gap-8 items-start">
      
    {/*
<img
  src="https://i.pravatar.cc/300?img=12"
  alt="Rajiv Parashar"
  className="w-28 h-28 rounded-full object-cover border-4 border-white/20"
/>
*/}

      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-white/90">
          “After spending more than 20 years in Australia, my heart always longed
          for my homeland. I returned to India with one purpose – to give my
          people the same world-class healthcare I had seen abroad, but with the
          warmth of our own soil.”
        </p>

        <p className="text-lg leading-relaxed text-white/90">
          <span className="font-bold text-white">
            KRP Health Care is my commitment to the nation
          </span>{" "}
          – to help every patient live a healthier, pain-free life. Physiotherapy
          is our strength, but we also care for the mind and body through Diet &
          Nutrition, Psychology, Urology, and Gynaecology services.
        </p>

        <p className="text-lg leading-relaxed text-white/90">
          This is not just a company for me,{" "}
          <span className="font-bold text-white">
            it is my way of serving the nation
          </span>{" "}
          – by healing one person at a time, and building a healthier India.
        </p>

        <p className="text-base font-semibold text-white">
          — Rajiv Parashar
          <span className="text-white/70 font-normal">
            {" "}
            Co-Founder & Director KRP Health Care
          </span>
        </p>
      </div>
    </div>
  </div>
</div>

          
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-10">
    <h3 className="text-3xl font-bold text-slate-900">
      Loved by Our Patients
    </h3>
    <p className="text-slate-600 mt-2">
      Real recovery stories from orthopedic, sports, and pain rehabilitation patients
    </p>
  </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        initials: "RS",
        name: "Rahul Sharma",
        role: "Back Pain Recovery - Faridabad",
        text: "The best physiotherapy experience in Faridabad. My chronic back pain is finally gone after 2 years."
      },
      {
        initials: "NV",
        name: "Neha Verma",
        role: "Knee Rehab Patient",
        text: "Very professional sessions and fast recovery support. Highly recommended."
      },
      {
        initials: "AG",
        name: "Amit Gupta",
        role: "Sports Injury Rehab",
        text: "Excellent treatment plan and great exercise guidance from the team."
      },
      {
        initials: "SV",
        name: "Sneha Verma",
        role: "Post Surgery Rehab",
        text: "The clinic gave me confidence and helped me recover faster than expected."
      }
    ].map((review, i) => (
      <div
        key={i}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div className="flex items-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map(n => (
            <Star key={n} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          "{review.text}"
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            {review.initials}
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">{review.name}</h4>
            <p className="text-sm text-slate-500">{review.role}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
        
</section>
      
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {

  const image =
  service.image_url ||
  `https://picsum.photos/seed/${service.slug}/800/600`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >

<div className="relative aspect-[4/3] overflow-hidden">
  <img
    src={image}
    alt={service.service_name}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    referrerPolicy="no-referrer"
  />
</div>
      
      
      <div className="p-8 flex flex-col flex-1">
        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {service.service_name}
        </h4>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed">
          {service.short_summary}
        </p>
        
      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
  {(Array.isArray(service.symptoms)
    ? service.symptoms
    : String(service.symptoms || "").split(",")
  )
    .slice(0, 3)
    .map((symptom, i) => (
      <span
        key={i}
        className="bg-slate-50 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-md border border-slate-100"
      >
        {symptom.trim()}
      </span>
    ))}
</div>

        <Link 
          to={`/services/${service.slug}`}
          className="flex items-center justify-between w-full text-sm font-bold text-blue-600 group-hover:translate-x-2 transition-transform"
        >
          Explore Treatment <ChevronRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}
