import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiPost, apiGet } from "../lib/api";
import * as z from "zod";
import { Calendar, Phone, User, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

const formSchema = z.object({
phone: z
  .string()
  .transform((val) => {
    let cleaned = val.replace(/\D/g, "");

    // remove leading zero(s)
    cleaned = cleaned.replace(/^0+/, "");

    // remove India country code if present
    if (cleaned.startsWith("91") && cleaned.length > 10) {
      cleaned = cleaned.slice(2);
    }

    return cleaned;
  })
  .refine((val) => /^[6-9]\d{9}$/.test(val), {
    message: "Enter valid Indian mobile number",
  }),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  name: z.string().min(2, "Name is required"),
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
const [services, setServices] = React.useState<any[]>([]);
  const [clinic, setClinic] = React.useState<any>(null);
  const [selectedCharge, setSelectedCharge] = React.useState<number>(0);
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch, getValues } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: selectedService || "",
      message: "",
    }
  });

React.useEffect(() => {
  apiGet("getServices").then((res) => {
  console.log("getServices response =>", res);

  if (res.success) {
    const loadedServices = res.services || [];
    console.log("loadedServices =>", loadedServices);

    setServices(loadedServices);
  }
});

  apiGet("getClinicInfo").then((res) => {
    if (res.success) {
      setClinic(res.clinic);
    }
  });
}, []);

const handleMobileBlur = async () => {
  const phone = watch("phone");
  if (!phone || phone.length < 10) return;

  try {
    const res = await apiGet("getMobileInfo", { phone });

    if (res.success && res.patient) {
      setValue("name", res.patient.name || "");
      setValue("email", res.patient.email || "");
    }
  } catch (err) {
    console.error("Mobile lookup failed", err);
  }
};
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
    const response = await apiPost("bookAppointment", data);

if (response.success) {
  setIsSuccess(true);
  reset();
  setSelectedCharge(0);
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
          Our team will contact you shortly to confirm your appointment at {clinic?.address || "our clinic"}.
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
   <form
  onSubmit={handleSubmit(onSubmit)}
  className="flex flex-col max-h-[70vh]"
>
     <div className="flex-1 overflow-y-auto pr-2 pl-1 pb-6 space-y-4 custom-scrollbar">
      

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
        <div className="relative">
          <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
  type="tel"
  inputMode="numeric"
  autoComplete="tel"
  maxLength={13}
  {...register("phone", {
    onChange: (e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
    },
  })}
  onKeyDown={(e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ];

    if (allowedKeys.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  }}
 onPaste={(e) => {
  e.preventDefault();
  const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
  document.execCommand("insertText", false, pasted);
}}
  onBlur={handleMobileBlur}
  placeholder="Mobile number"
  className={cn(
    "w-full bg-slate-50 border border-blue-100 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all",
    errors.phone && "border-red-300 bg-red-50"
  )}
/>
        </div>
        {errors.phone && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.phone.message}</p>}
      </div>


<div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
        <div className="relative">
          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            {...register("name")}
            placeholder="Your Name"
            className={cn(
              "w-full bg-slate-50 border border-blue-100 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all",
              errors.name && "border-red-300 bg-red-50"
            )}
          />
        </div>
        {errors.name && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.name.message}</p>}
      </div>
       
<div className="space-y-1">
  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
    Email ID
  </label>
  <input
    {...register("email")}
    placeholder="your@email.com"
    className="w-full bg-slate-50 border border-blue-100 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
  />
  {errors.email && (
    <p className="text-[10px] text-red-500 font-bold ml-1">
      {errors.email.message}
    </p>
  )}
</div>

{/* ✅ Service Dropdown */}
<div className="space-y-1">
  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
    Service
  </label>

  <select
    {...register("service")}
    onChange={(e) => {
      const value = e.target.value;
      console.log("selected service =>", value);
      console.log("services state =>", services);

      setValue("service", value);

      const selected = services.find(
        (s) => (s.name || s.service_name) === value
      );

      console.log("matched service =>", selected);
      console.log("matched charges =>", selected?.charges);

      setSelectedCharge(Number(selected?.charges || 0));
    }}
    className={cn(
      "w-full bg-slate-50 border border-blue-100 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all",
      errors.service && "border-red-300 bg-red-50"
    )}
  >
    <option value="">Select Service</option>
    {services.map((s, idx) => (
      <option key={s.slug || idx} value={s.name || s.service_name}>
        {s.name || s.service_name}
      </option>
    ))}
  </select>

  {errors.service && (
    <p className="text-[10px] text-red-500 font-bold ml-1">
      {errors.service.message}
    </p>
  )}
</div>


       
      {console.log("selectedCharge render =>", selectedCharge)}
{selectedCharge > 0 && (
  <p className="text-sm font-bold text-red-600 ml-1">
    Consultation Charges: ₹{selectedCharge}
  </p>
)}

      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Date</label>
          <div className="relative">
            <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="date"
              {...register("date")}
              className={cn(
                "w-full bg-slate-50 border border-blue-100 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all",
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
                "w-full bg-slate-50 border border-blue-100 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all",
                errors.time && "border-red-300 bg-red-50"
              )}
            >
              <option value="">Select</option>
              <option value="09:00:00">09:00</option>
<option value="11:00:00">11:00</option>
<option value="14:00:00">14:00</option>
<option value="16:00:00">16:00</option>
<option value="18:00:00">18:00</option>
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
            className="w-full bg-slate-50 border border-blue-100 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
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
     </div>
    </form>
  );
}
