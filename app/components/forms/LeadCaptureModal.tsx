"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormInput } from "@/app/lib/validations/lead";
import { submitLead } from "@/app/actions/lead";
import { Dialog } from "../ui/dialog";
import { Button } from "../ui/button";
import { useToast } from "@/app/providers";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormInput>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      companySize: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: LeadFormInput) => {
    startTransition(async () => {
      try {
        const response = await submitLead(data);
        if (response.success) {
          toast("Demo requested successfully! Our team will contact you shortly.", "success");
          reset();
          onClose();
        } else {
          toast(response.error || "Submission failed. Please check your details.", "error");
        }
      } catch (error) {
        toast("An unexpected error occurred. Please try again later.", "error");
        console.error("Form submit error:", error);
      }
    });
  };

  const companySizes = [
    { value: "1-10", label: "1 - 10 employees" },
    { value: "11-50", label: "11 - 50 employees" },
    { value: "51-200", label: "51 - 200 employees" },
    { value: "201-1000", label: "201 - 1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ];

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Request Enterprise Demo">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <p className="text-sm text-slate-500 dark:text-slate-400 -mt-2 mb-4 leading-relaxed">
          Provide your enterprise details below. Our learning solutions architects will prepare a custom pilot demonstration for your team.
        </p>

        {/* Name Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            disabled={isPending}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-xs font-semibold text-rose-500 mt-0.5">{errors.name.message}</span>
          )}
        </div>

        {/* Work Email Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@company.com"
            disabled={isPending}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs font-semibold text-rose-500 mt-0.5">{errors.email.message}</span>
          )}
        </div>

        {/* Phone Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1234567890"
            disabled={isPending}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-xs font-semibold text-rose-500 mt-0.5">{errors.phone.message}</span>
          )}
        </div>

        {/* Company Size Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="companySize" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Company Size
          </label>
          <select
            id="companySize"
            disabled={isPending}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50 cursor-pointer"
            {...register("companySize")}
          >
            <option value="" disabled className="text-slate-400">
              Select range...
            </option>
            {companySizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
          {errors.companySize && (
            <span className="text-xs font-semibold text-rose-500 mt-0.5">{errors.companySize.message}</span>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Optional Message
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us about your upskilling needs..."
            disabled={isPending}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50 resize-none"
            {...register("message")}
          />
          {errors.message && (
            <span className="text-xs font-semibold text-rose-500 mt-0.5">{errors.message.message}</span>
          )}
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-900 mt-6 shrink-0">
          <Button type="button" variant="outline" onClick={onClose} disabled={isPending}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isPending} className="shadow-lg shadow-blue-500/10">
            Submit Request
          </Button>
        </div>
      </form>
    </Dialog>
  );
}
