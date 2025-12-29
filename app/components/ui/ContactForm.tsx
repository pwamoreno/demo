"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Select } from "./Select";
import { Card } from "./Card";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <Card className="p-8 text-center bg-green-50 border-green-100">
        <h3 className="text-2xl font-bold text-green-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-700 mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Name" placeholder="John Doe" required />
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Project Type"
            options={[
              {
                value: "web",
                label: "Web Design & Dev",
              },
              {
                value: "branding",
                label: "Branding",
              },
              {
                value: "product",
                label: "Product Design",
              },
              {
                value: "other",
                label: "Other",
              },
            ]}
          />
          <Select
            label="Budget Range"
            options={[
              {
                value: "10-25k",
                label: "$10k - $25k",
              },
              {
                value: "25-50k",
                label: "$25k - $50k",
              },
              {
                value: "50-100k",
                label: "$50k - $100k",
              },
              {
                value: "100k+",
                label: "$100k+",
              },
            ]}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            className="w-full min-h-[150px] rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            placeholder="Tell us about your project..."
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full hover:cursor-pointer"
          isLoading={isSubmitting}
        >
          Send Message
        </Button>
      </form>
    </Card>
  );
}
