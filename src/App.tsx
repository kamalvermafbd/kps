import React, { useState, useEffect, useRef } from "react";
import { apiGet } from "./lib/api";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2,
  Activity,
  ShieldCheck,
  Users,
  ArrowRight,
  Stethoscope
} from "lucide-react";
import { cn } from "./lib/utils";
import { Service } from "./types";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import BlogList from "./pages/BlogList";
import Contact from "./pages/Contact";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
 const [services, setServices] = useState<Service[]>([]);
const [doctors, setDoctors] = useState([]);
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
 
  useEffect(() => {
  apiGet("getServices").then((data) => {
    if (data.success) {
      setServices(data.services);
    }
  });
}, []);

useEffect(() => {
  apiGet("getDoctors").then((data) => {
    if (data.success) {
      setDoctors(data.doctors || []);
    }
  });
}, []);
  
 useEffect(() => {
  window.scrollTo(0, 0);
  setIsMenuOpen(false);
  setIsServicesOpen(false);
}, [location.pathname]);

  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      servicesRef.current &&
      !servicesRef.current.contains(event.target as Node)
    ) {
      setIsServicesOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Activity size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-blue-900">
                KRP <span className="text-blue-600 font-medium">Healthcare</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
             <div ref={servicesRef} className="relative">
              <button
  onClick={() => setIsServicesOpen(!isServicesOpen)}
  className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center"
>
  Services
<ChevronRight
  size={16}
  className={`ml-1 transition-transform ${
    isServicesOpen ? "rotate-90" : ""
  }`}
/>
</button>
<div
  className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-slate-100 transition-all duration-200 origin-top p-4 ${
    isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>
                  {services.map((s) => (
                    <Link 
  key={s.slug} 
  to={`/services/${s.slug}`}
  onClick={() => setIsServicesOpen(false)}
  className="block p-2 text-sm hover:bg-blue-50 rounded-lg transition-colors"
>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/blog" className="text-sm font-medium hover:text-blue-600 transition-colors">Health Blog</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <Link to="/" className="text-lg font-semibold border-b border-slate-100 pb-4">Home</Link>
           <div className="space-y-3">
  <button
    onClick={() => setIsServicesOpen(!isServicesOpen)}
    className="w-full flex items-center justify-between text-lg font-semibold border-b border-slate-100 pb-4"
  >
    <span>Our Services</span>
    <ChevronRight
      size={18}
      className={`transition-transform ${
        isServicesOpen ? "rotate-90" : ""
      }`}
    />
  </button>

  {isServicesOpen && (
    <div className="space-y-3 pl-4 border-l border-slate-200">
      {services.map((s) => (
        <Link
          key={s.slug}
          to={`/services/${s.slug}`}
          onClick={() => {
            setIsMenuOpen(false);
            setIsServicesOpen(false);
          }}
          className="block text-[15px] font-medium text-slate-600 leading-6 hover:text-blue-600 transition-colors"
        >
          {s.name}
        </Link>
      ))}
    </div>
  )}
</div>
              <Link to="/blog" className="text-lg font-semibold border-b border-slate-100 pb-4">Health Blog</Link>
              <Link to="/contact" className="text-lg font-semibold border-b border-slate-100 pb-4">Contact</Link>
              <Link 
                to="/contact" 
                className="hidden md:block bg-blue-600 text-white w-full py-4 rounded-xl text-center font-bold shadow-xl shadow-blue-200"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home services={services} doctors={doctors} />} />
          <Route path="/services/:slug" element={<ServiceDetail services={services} />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <Activity size={24} className="text-blue-400" />
              <span className="text-xl font-bold">KRP Healthcare</span>
            </div>
            <p className="text-sm leading-relaxed">
              Premium physiotherapy and rehabilitation center in Faridabad. Dedicated to restoring your mobility and quality of life through evidence-based practices.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Health Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              {services.slice(0, 4).map(s => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-blue-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 shrink-0" />
                <span>Sector 16, Faridabad, Haryana 121002</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <span>+91 98106 81140</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-blue-400 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} KRP Healthcare. All rights reserved. Designed for SEO Faridabad.</p>
        </div>
      </footer>

      {/* Sticky CTAs */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-100 p-3 flex gap-3">
        <a 
          href="tel:+919810681140" 
          className="flex-1 bg-slate-100 text-slate-900 py-3 rounded-xl flex items-center justify-center font-bold text-sm"
        >
          <Phone size={18} className="mr-2" /> Call Now
        </a>
        <Link 
          to="/contact" 
          className="flex-[2] bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-200"
        >
          Book Consultation
        </Link>
      </div>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919810681140" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageSquare size={30} fill="currentColor" />
      </a>
    </div>
  );
}
