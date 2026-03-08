"use client";

import { useState, useTransition } from "react";
import { ArrowRight } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverMessage, setServerMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  function validate(values: FormState) {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Name is required";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Phone is required";
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(values.phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }

    if (!values.service) nextErrors.service = "Select a service";
    if (!values.message.trim()) {
      nextErrors.message = "Message is required";
    } else if (values.message.trim().length < 20) {
      nextErrors.message = "Please add a little more detail";
    }

    return nextErrors;
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setServerMessage("");
    if (errors[name as keyof FormErrors]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) return;

    startTransition(async () => {
      setServerMessage("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !result.ok) {
        setSubmitted(false);
        setServerMessage(result.message || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      setForm(initialState);
      setErrors({});
      setServerMessage("");
    });
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-2xl border ${
      errors[field] ? "border-red-400 bg-red-400/5" : "border-white/10 bg-white/5"
    } px-5 py-4 text-[15px] font-light text-white placeholder-white/40 outline-none transition-all focus:border-[#c5a059] focus:bg-[#05120e] focus:ring-1 focus:ring-[#c5a059]/50`;

  if (submitted) {
    return (
      <div className="rounded-[28px] sm:rounded-[40px] border border-[#11352a]/20 bg-[#05120e] p-8 sm:p-10 text-center shadow-2xl lg:p-14 h-full flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#11352a_0%,transparent_80%)] opacity-30" />
        <div className="relative z-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#11352a] shadow-inner mb-8 text-[#c5a059]">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="font-serif text-[2rem] sm:text-[2.5rem] font-light text-white mb-4">Request Received</h3>
          <p className="text-[15px] font-light leading-relaxed text-white/70 max-w-md mx-auto">
            We have received your submission successfully. Please check your email for a confirmation from{" "}
            <span className="text-[#c5a059] font-medium">info@apacworldwide.com</span>.
          </p>
          <p className="mt-4 text-[13px] font-light leading-relaxed text-white/50 max-w-md mx-auto">
            If you don&apos;t see it in your inbox, please check your spam or promotions folder. Our team will reach out to you within one business day using this email channel.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="group relative mt-10 inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 bg-transparent px-8 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <span>Submit Another Request</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[40px] border border-[#11352a]/20 bg-[#05120e] p-8 shadow-2xl lg:p-12"
      noValidate
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="relative z-10 space-y-6">
        <div>
          <label htmlFor="name" className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
            Full name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass("name")}
            placeholder="John Smith"
          />
          {errors.name ? <p className="mt-2 text-xs font-medium text-red-400">{errors.name}</p> : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass("email")}
              placeholder="john@company.com"
            />
            {errors.email ? <p className="mt-2 text-xs font-medium text-red-400">{errors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="phone" className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              Mobile Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={inputClass("phone")}
              placeholder="+971 50 123 4567"
            />
            {errors.phone ? <p className="mt-2 text-xs font-medium text-red-400">{errors.phone}</p> : null}
          </div>
        </div>

        <div>
          <label htmlFor="service" className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
            Primary Area of Interest
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClass("service")} appearance-none cursor-pointer`}
            style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23c5a059%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem top 50%", backgroundSize: "0.65rem auto" }}
          >
            <option value="" disabled className="text-black">Select a service framework</option>
            <option value="company-formation" className="text-black">Company Formation</option>
            <option value="pro-and-immigration" className="text-black">Residency & PRO</option>
            <option value="legal-and-compliance" className="text-black">Legal & Compliance</option>
            <option value="banking-and-tax" className="text-black">Banking & Corporate Tax</option>
            <option value="business-licensing" className="text-black">Licensing & Approvals</option>
            <option value="office-solutions" className="text-black">Premium Office Solutions</option>
          </select>
          {errors.service ? <p className="mt-2 text-xs font-medium text-red-400">{errors.service}</p> : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
            Project Overview
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={`${inputClass("message")} resize-none`}
            placeholder="Outline your timeline, target activities, and overarching market objectives."
          />
          {errors.message ? <p className="mt-2 text-xs font-medium text-red-400">{errors.message}</p> : null}
        </div>

        {serverMessage ? (
          <p className="rounded-2xl border border-red-400/20 bg-red-400/5 px-5 py-3.5 text-sm font-light text-red-300">
            {serverMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isPending}
          className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#c5a059] py-4 text-[15px] font-bold tracking-wide text-[#05120e] transition-all hover:bg-[#d6b779] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span>{isPending ? "Connecting..." : "Initiate Request"}</span>
          {!isPending && (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#05120e]/10 transition-transform group-hover:translate-x-1">
              <ArrowRight size={14} />
            </div>
          )}
        </button>
        <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-widest text-white/40">
          Strictly Confidential • 24hr Turnaround
        </p>
      </div>
    </form>
  );
}
