import { Globe2, Package, Leaf, Layers } from "lucide-react";
import { spiceProducts } from "@/lib/spice-data";
import { cn } from "@/lib/utils";
const benefits = [
  { icon: Leaf, title: `${spiceProducts.length} spices`, detail: "One carefully selected range" },
  { icon: Package, title: "Your format", detail: "Bulk and retail packing options" },
  { icon: Layers, title: "Your brand", detail: "Discuss private-label sourcing" },
  { icon: Globe2, title: "Your market", detail: "Destination-led export planning" },
];
export function StatsStrip({ className }: { className?: string }) {
  return <div className={cn("grid gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-2 lg:grid-cols-4", className)}>{benefits.map(({ icon: Icon, title, detail }) => <div key={title} className="flex items-center gap-4 p-2"><Icon className="size-6 shrink-0 text-brand-green" aria-hidden="true" /><div><div className="font-display text-xl font-semibold">{title}</div><p className="mt-1 text-xs text-muted-foreground">{detail}</p></div></div>)}</div>;
}
