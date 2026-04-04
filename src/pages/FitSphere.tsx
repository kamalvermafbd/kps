import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import FitSphereIcon from "../components/icons/FitSphereIcon";

export default function FitSphere() {
  const serviceCardClass =
    "rounded-[28px] overflow-hidden bg-white shadow-lg border border-green-100 hover:shadow-xl transition-all";

  return (
    <div className="min-h-screen bg-[#eef8ea]">
      {/* Hero */}
    <section className="relative overflow-hidden pt-28 pb-20 bg-[#dff5d8]">
        <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-40"
>
 <source
    src="https://videos.pexels.com/video-files/5865848/5865848-hd_1920_1080_25fps.mp4"
 type="video/mp4"
/>
</video>
        
       <div className="absolute inset-0 bg-green-100/10" />
        {/* floating decorative shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-green-200/40 blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-lime-200/40 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
          {/* brand heading */}
<div className="text-center">
  <h2 className="text-4xl md:text-6xl font-extrabold tracking-[0.08em] text-green-700 uppercase">
    FITSPHERE
  </h2>
  <p className="mt-3 text-base md:text-xl text-slate-900 drop-shadow-sm font-semibold leading-relaxed">
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
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-900 drop-shadow-sm leading-8 font-medium">
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
          <div className="space-y-12">
            {/* left content */}
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-green-600">
                About Shweta
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Science-Backed Nutrition With a Practical Lifestyle Approach
              </h2>

              <div className="mt-6 space-y-5 text-slate-600 leading-8 text-[17px] text-left md:text-justify">
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

<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
  Personalized Nutrition Services We Offer
</h2>

            
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className={serviceCardClass}>
    <img
      src="https://i.ibb.co/jPMXRXWD/weight-management.png"
      alt="Weight Management Programs"
      className="w-full h-80 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-slate-900 text-xl">
        Weight Management Programs
      </h3>
      <p className="mt-3 text-slate-600 leading-7">
        Helping clients lose, gain, or maintain weight safely and sustainably.
      </p>
    </div>
  </div>

  <div className={serviceCardClass}>
    <img
      src="https://i.ibb.co/j91ZYQ7X/diabities.png"
      alt="Diabetes & Lifestyle Disorder Management"
      className="w-full h-80 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-slate-900 text-xl">
        Diabetes & Lifestyle Disorder Management
      </h3>
      <p className="mt-3 text-slate-600 leading-7">
        Guiding patients in controlling blood sugar, cholesterol, and blood pressure through food and lifestyle changes.
      </p>
    </div>
  </div>

  <div className={serviceCardClass}>
    <img
      src="https://i.ibb.co/5XJ8C6YZ/child-nutrition.png"
      alt="Nutrition for Children & Teens"
      className="w-full h-80 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-slate-900 text-xl">
        Nutrition for Children & Teens
      </h3>
      <p className="mt-3 text-slate-600 leading-7">
        Supporting growth, immunity, and healthy eating habits for school-going children.
      </p>
    </div>
  </div>

  <div className={serviceCardClass}>
    <img
      src="https://i.ibb.co/tpF5SRKg/maternal-women-health-nutrition.png"
      alt="Maternal & Women’s Health Nutrition"
      className="w-full h-80 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-slate-900 text-xl">
        Maternal & Women’s Health Nutrition
      </h3>
      <p className="mt-3 text-slate-600 leading-7">
        Special diet plans for pregnancy, postnatal recovery, PCOS, and hormonal balance.
      </p>
    </div>
  </div>

  <div className={serviceCardClass}>
    <img
      src="https://i.ibb.co/35bJCpDF/Geriatric-Nutrition.png"
      alt="Geriatric Nutrition"
      className="w-full h-80 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-slate-900 text-xl">
        Geriatric Nutrition
      </h3>
      <p className="mt-3 text-slate-600 leading-7">
        Helping elderly clients maintain strength, bone health, and digestion.
      </p>
    </div>
  </div>

  <div className={serviceCardClass}>
    <img
      src="https://i.ibb.co/tRwKD0F/Therapeutic-Diets.png"
      alt="Therapeutic Diets"
      className="w-full h-80 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-slate-900 text-xl">
        Therapeutic Diets
      </h3>
      <p className="mt-3 text-slate-600 leading-7">
        Tailored plans for thyroid disorders, hypertension, fatty liver, and digestive issues.
      </p>
    </div>
  </div>

  <div className={serviceCardClass}>
    <img
      src="https://i.ibb.co/G4NHJPxV/Sports-fitness.png"
      alt="Sports & Fitness Nutrition"
      className="w-full h-80 object-cover"
    />
    <div className="p-6">
      <h3 className="font-bold text-slate-900 text-xl">
        Sports & Fitness Nutrition
      </h3>
      <p className="mt-3 text-slate-600 leading-7">
        Fueling energy, stamina, and recovery for active individuals.
      </p>
    </div>
  </div>
</div>

<div className="mt-16 rounded-3xl bg-[#f8fcf6] border border-green-100 p-8">
  <p className="text-slate-700 leading-8 text-[17px] text-left md:text-justify">
    Currently, I’m working with clients of all ages—children, mid-aged adults,
    and the elderly—helping them adopt healthier, sustainable habits designed
    to improve their overall health and quality of life.
  </p>

  <p className="mt-5 text-slate-700 leading-8 text-[17px] text-left md:text-justify">
    When I’m not helping clients transform their health, you’ll find me
    traveling and exploring new cultures—always on the lookout for fresh,
    healthy, and creative food inspirations to bring back to my practice.
  </p>

  <p className="mt-5 text-slate-700 leading-8 text-[17px] font-medium text-left md:text-justify">
    If you’re ready to take charge of your health and experience a positive
    transformation, I’d love to work with you. Book your consultation today—your
    journey to a healthier, happier you starts here!
  </p>
</div>


<div className="mt-16">
  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
    Why Choose FitSphere?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-3xl bg-[#f8fcf6] border border-green-100 p-6 shadow-sm flex gap-4">
      <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-xl">
          Certified & Experienced
        </h3>
        <p className="mt-2 text-slate-600 leading-7">
          Masters + certifications in nutrition with evidence-based practical guidance.
        </p>
      </div>
    </div>

    <div className="rounded-3xl bg-[#f8fcf6] border border-green-100 p-6 shadow-sm flex gap-4">
      <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-xl">
          Holistic Approach
        </h3>
        <p className="mt-2 text-slate-600 leading-7">
          A complete system combining diet, fitness, motivation, and sustainable lifestyle habits.
        </p>
      </div>
    </div>

    <div className="rounded-3xl bg-[#f8fcf6] border border-green-100 p-6 shadow-sm flex gap-4">
      <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-xl">
          Personal Support & Guidance
        </h3>
        <p className="mt-2 text-slate-600 leading-7">
          One-on-one support, regular follow-ups, and practical accountability.
        </p>
      </div>
    </div>

    <div className="rounded-3xl bg-[#f8fcf6] border border-green-100 p-6 shadow-sm flex gap-4">
      <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-xl">
          Trusted Wellness Centre
        </h3>
        <p className="mt-2 text-slate-600 leading-7">
          Based at KRP Healthcare & Wellness Centre, Faridabad.
        </p>
      </div>
    </div>

    <div className="rounded-3xl bg-[#f8fcf6] border border-green-100 p-6 shadow-sm flex gap-4 md:col-span-2">
      <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-xl">
          Passionate Lifestyle Transformation
        </h3>
        <p className="mt-2 text-slate-600 leading-7">
          Focused on helping you build healthier routines that create long-term life-changing results.
        </p>
      </div>
    </div>
  </div>
</div>




 <div className="mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
    Your Client Journey
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-3xl bg-white border border-green-100 shadow-sm p-6 flex gap-4">
      <div className="w-14 h-14 rounded-2xl bg-[#f8fcf6] shadow flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-xl">
          1. Book a Consultation
        </h3>
        <p className="mt-2 text-slate-600 leading-7">
          Share your health goals, challenges, and lifestyle concerns.
        </p>
      </div>
    </div>

    <div className="rounded-3xl bg-white border border-green-100 shadow-sm p-6 flex gap-4">
      <div className="w-14 h-14 rounded-2xl bg-[#f8fcf6] shadow flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-xl">
          2. Get Your Plan
        </h3>
        <p className="mt-2 text-slate-600 leading-7">
          Receive a fully customized nutrition and fitness roadmap.
        </p>
      </div>
    </div>

    <div className="rounded-3xl bg-white border border-green-100 shadow-sm p-6 flex gap-4">
      <div className="w-14 h-14 rounded-2xl bg-[#f8fcf6] shadow flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-xl">
          3. Stay on Track
        </h3>
        <p className="mt-2 text-slate-600 leading-7">
          Regular follow-ups, guidance, and motivation to stay consistent.
        </p>
      </div>
    </div>

    <div className="rounded-3xl bg-white border border-green-100 shadow-sm p-6 flex gap-4">
      <div className="w-14 h-14 rounded-2xl bg-[#f8fcf6] shadow flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-xl">
          4. See the Change
        </h3>
        <p className="mt-2 text-slate-600 leading-7">
          Better energy, improved habits, and a healthier lifestyle transformation.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
    What Clients Say About FitSphere
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-3xl border border-green-100 bg-[#f8fcf6] p-8 shadow-sm">
      <div className="flex gap-1 text-green-500 text-xl">
        ★★★★★
      </div>

      <p className="mt-5 text-slate-700 text-xl leading-9">
        “I lost 8 kg in 3 months with a practical diet plan that fit my
        lifestyle perfectly. The regular guidance kept me motivated.”
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
          PV
        </div>
        <div>
          <h3 className="font-bold text-slate-900">
            Priya Verma
          </h3>
          <p className="text-slate-500">
            Weight Management Client
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-3xl border border-green-100 bg-[#f8fcf6] p-8 shadow-sm">
      <div className="flex gap-1 text-green-500 text-xl">
        ★★★★★
      </div>

      <p className="mt-5 text-slate-700 text-xl leading-9">
        “My sugar levels improved significantly within weeks. The meal plans
        were realistic and easy for my family to follow.”
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
          RG
        </div>
        <div>
          <h3 className="font-bold text-slate-900">
            Rajesh Gupta
          </h3>
          <p className="text-slate-500">
            Diabetes Care Client
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-3xl border border-green-100 bg-[#f8fcf6] p-8 shadow-sm">
      <div className="flex gap-1 text-green-500 text-xl">
        ★★★★★
      </div>

      <p className="mt-5 text-slate-700 text-xl leading-9">
        “The pregnancy nutrition guidance helped me stay energetic and healthy
        throughout my journey.”
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
          NK
        </div>
        <div>
          <h3 className="font-bold text-slate-900">
            Neha Kapoor
          </h3>
          <p className="text-slate-500">
            Maternal Wellness Client
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-3xl border border-green-100 bg-[#f8fcf6] p-8 shadow-sm">
      <div className="flex gap-1 text-green-500 text-xl">
        ★★★★★
      </div>

      <p className="mt-5 text-slate-700 text-xl leading-9">
        “The follow-up support and motivation made it easy to stay consistent
        with workouts and healthy eating.”
      </p>

      <div className="mt-8 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
          AS
        </div>
        <div>
          <h3 className="font-bold text-slate-900">
            Aman Singh
          </h3>
          <p className="text-slate-500">
            Fitness Coaching Client
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


            
            
          </div>
        </div>
      </section>
    </div>
  );
}
