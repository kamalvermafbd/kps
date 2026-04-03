import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Phone, User, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
  whatsappConsent: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

interface AppointmentFormProps {
  selectedService?: string;
}

export default function AppointmentForm({ selectedService }: AppointmentFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: selectedService || "",
      whatsappConsent: true,
      message: "",
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, city: "Faridabad" }),
      });
      if (response.ok) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Booking failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Booking Received!</h3>
        <p className="text-slate-600 text-sm">
          Our team will contact you shortly to confirm your appointment at Sector 16, Faridabad.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-blue-600 font-bold text-sm hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
        <div className="relative">
          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            {...register("name")}
            placeholder="Your Name"
            className={cn(
              "w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all",
              errors.name && "border-red-300 bg-red-50"
            )}
          />
        </div>
        {errors.name && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.name.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
        <div className="relative">
          <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            {...register("phone")}
            placeholder="98106 81140"
            className={cn(
              "w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all",
              errors.phone && "border-red-300 bg-red-50"
            )}
          />
        </div>
        {errors.phone && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.phone.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Date</label>
          <div className="relative">
            <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="date"
              {...register("date")}
              className={cn(
                "w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all",
                errors.date && "border-red-300 bg-red-50"
              )}
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Time</label>
          <div className="relative">
            <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <select 
              {...register("time")}
              className={cn(
                "w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all",
                errors.time && "border-red-300 bg-red-50"
              )}
            >
              <option value="">Select</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Special Request (Optional)</label>
        <div className="relative">
          <MessageSquare size={18} className="absolute left-4 top-4 text-slate-400" />
          <textarea 
            {...register("message")}
            placeholder="Any specific symptoms or requests?"
            rows={3}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 ml-1">
        <input 
          type="checkbox" 
          id="whatsapp" 
          {...register("whatsappConsent")}
          className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="whatsapp" className="text-[10px] font-medium text-slate-500">
          I consent to receive updates on WhatsApp
        </label>
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-blue-200 transition-all flex items-center justify-center"
      >
        {isSubmitting ? "Processing..." : "Confirm Appointment"}
      </button>
    </form>
  );
}
