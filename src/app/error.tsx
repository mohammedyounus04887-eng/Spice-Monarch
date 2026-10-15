"use client";
import { Button } from "@/components/ui/button";
export default function ErrorPage({ reset }: { reset: () => void }) { return <div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="font-display text-4xl">Something went wrong.</h1><p className="my-6 text-muted-foreground">Please try loading this page again.</p><Button variant="gold" onClick={reset}>Try again</Button></div>; }
