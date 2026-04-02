import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import AppointmentForm from "../components/AppointmentForm";

export default function Contact() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Have questions about our treatments or want to book a consultation? We're here to help you on your journey to recovery.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                <p className="text-slate-600">Sector 16, Faridabad, Haryana 121002</p>
                <p className="text-sm text-blue-600 font-medium mt-1">Near Metro Station</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                <p className="text-slate-600">+91 98765 43210</p>
                <p className="text-sm text-blue-600 font-medium mt-1">Mon-Sat, 9am - 8pm</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                <p className="text-slate-600">contact@krphealthcare.com</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 opacity-20" />
                <p className="text-sm font-medium">Interactive Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Book Appointment</h2>
            <p className="text-sm text-slate-500">Fill out the form below and we'll get back to you.</p>
          </div>
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
