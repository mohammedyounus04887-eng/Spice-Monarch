"use client";

import { useState } from "react";
import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { spiceProducts } from "@/lib/spice-data";

export function InquiryForm({ email, phone, initialProduct = "", selectedSlugs = [] }: { email: string; phone: string; initialProduct?: string; selectedSlugs?: string[] }) {
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const selectedProducts = spiceProducts.filter(p => selectedSlugs.includes(p.slug));
  const product = selectedProducts.length > 1 ? "Multiple products / custom blend" : selectedProducts[0]?.name || spiceProducts.find((entry) => entry.slug === initialProduct)?.name || "";
  const [chosenProduct, setChosenProduct] = useState(product);
  const multiple = chosenProduct === "Multiple products / custom blend" && selectedProducts.length > 1;
  const showSelection = multiple || (selectedProducts.length === 1 && selectedProducts[0].name === chosenProduct);
  const fieldClass = "w-full rounded-xl border border-input bg-background px-3 py-2 text-sm";

  function prepareInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft([
      "Spice Monarch — sourcing inquiry", "",
      `Name: ${data.get("name")}`, `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`, `Destination: ${data.get("country")}`,
      `Product: ${data.get("product")}`, ...(multiple ? [`Selected spices: ${selectedProducts.map(p => p.name).join(", ")}`] : []), `Quantity: ${data.get("quantity")}`,
      `Packaging: ${data.get("packaging")}`, "", `Requirements: ${data.get("message")}`,
    ].join("\n"));
    setCopied(false);
    setCopyError(false);
  }

  return (
    <form onSubmit={prepareInquiry} onChange={() => { if (draft) { setDraft(""); setCopied(false); setCopyError(false); } }} className="space-y-5">
      <h2 className="font-display text-2xl font-semibold">Tell us what you need</h2>
      {showSelection && <p className="rounded-xl bg-muted p-3 text-sm">Your selection: {selectedProducts.map(p => p.name).join(", ")}</p>}
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { name: "name", label: "Your name", type: "text", autoComplete: "name" },
          { name: "company", label: "Company", type: "text", autoComplete: "organization" },
          { name: "email", label: "Work email", type: "email", autoComplete: "email" },
          { name: "country", label: "Destination country", type: "text", autoComplete: "country-name" },
        ].map((field) => <div key={field.name}><label htmlFor={field.name} className="mb-2 block text-sm font-medium">{field.label} <span aria-hidden="true">*</span></label><Input id={field.name} name={field.name} type={field.type} autoComplete={field.autoComplete} required maxLength={150} /></div>)}
        <div><label htmlFor="product" className="mb-2 block text-sm font-medium">Product *</label><select id="product" name="product" value={chosenProduct} onChange={event => setChosenProduct(event.target.value)} required className={fieldClass}><option value="">Select a product</option>{spiceProducts.map((entry) => <option key={entry.slug}>{entry.name}</option>)}<option>Multiple products / custom blend</option></select></div>
        <div><label htmlFor="quantity" className="mb-2 block text-sm font-medium">Quantity *</label><Input id="quantity" name="quantity" placeholder="e.g. 500 kg or 1 container" required maxLength={100} /></div>
      </div>
      <div><label htmlFor="packaging" className="mb-2 block text-sm font-medium">Preferred packaging</label><Input id="packaging" name="packaging" placeholder="Bulk bags, retail packs, or private label" maxLength={200} /></div>
      <div><label htmlFor="message" className="mb-2 block text-sm font-medium">Additional requirements</label><textarea id="message" name="message" rows={4} maxLength={2000} className={fieldClass} placeholder="Grade, samples, delivery timeline, and documentation needed" /></div>
      <p className="text-xs leading-5 text-muted-foreground">Required fields are marked *. Preparing an inquiry keeps your details in this browser until you copy them or open your email app.</p>
      <Button type="submit" variant="gold">Prepare inquiry</Button>
      {draft && <div className="space-y-4 rounded-2xl border border-brand-green/30 bg-muted p-5" role="status">
        <h3 className="font-semibold">Your inquiry is ready to review</h3>
        <textarea aria-label="Prepared inquiry" value={draft} readOnly rows={10} className={fieldClass} />
        <div className="flex flex-wrap gap-3">
          {email && <Button asChild variant="gold"><a href={`mailto:${email}?subject=${encodeURIComponent("Spice sourcing inquiry")}&body=${encodeURIComponent(draft)}`}><Mail className="size-4" /> Open email app</a></Button>}
          {phone && <Button asChild variant="gold"><a href={`https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(draft)}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4" /> Open WhatsApp</a></Button>}
          <Button type="button" variant="outline" onClick={async () => { try { await navigator.clipboard.writeText(draft); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }}>{copied ? <Check className="size-4" /> : <Copy className="size-4" />}{copied ? "Copied" : "Copy inquiry"}</Button>
        </div>
        <p className="text-sm text-muted-foreground">{email || phone ? "This has not been sent. Review and send it from your email or WhatsApp app to complete your inquiry." : "Email delivery will be available when the export contact is configured. You can copy your inquiry now."}</p>
        {copyError && <p className="text-sm text-destructive">Copy is unavailable in this browser. Select and copy the text above.</p>}
      </div>}
    </form>
  );
}
