"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

const properties = ["Hotel", "Motel", "Boutique Hotel", "Guesthouse", "Resort", "Serviced Apartment", "Other"];

export function LeadForm({ intent }: { intent: "demo" | "contact" }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-brand/20 bg-brand-soft p-8">
        <p className="font-display text-3xl text-charcoal">We received your request.</p>
        <p className="mt-3 text-sm text-muted">
          The Sovtels team will be in touch to understand your property and arrange a walkthrough of
          the system.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Property name" name="property" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <label className="block">
        <span className="mb-1.5 block text-[11px] tracking-[0.14em] text-muted uppercase">
          Property type
        </span>
        <select
          name="type"
          required
          className="h-12 w-full appearance-none rounded-md border border-line bg-white px-3 text-sm text-charcoal"
        >
          {properties.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[11px] tracking-[0.14em] text-muted uppercase">
          {intent === "demo" ? "What would you like to see?" : "How can we help?"}
        </span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border border-line bg-white px-3 py-3 text-sm text-charcoal"
          placeholder="Rooms, departments, and anything we should know."
        />
      </label>
      <Button type="submit" size="lg">
        {intent === "demo" ? "Request a Demo" : "Contact Sovtels"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] tracking-[0.14em] text-muted uppercase">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-md border border-line bg-white px-3 text-sm text-charcoal"
      />
    </label>
  );
}
