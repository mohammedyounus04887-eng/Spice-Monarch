import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { EditorialHero,EditorialCallout } from "@/components/site/editorial";
import { faqItems } from "@/lib/spice-data";
export const metadata:Metadata={title:"Frequently asked questions",description:"Answers about spice samples, orders, packing, and sourcing inquiries.",alternates:{canonical:"/faq"}};
export default function FaqPage(){return <div className="editorial-page"><EditorialHero eyebrow="A LITTLE CLARITY" title="GOOD QUESTIONS." description="The details you might want to know before your next sourcing conversation."/><section className="faq-editorial">{faqItems.map((q,i)=><details key={q.question}><summary><small>0{i+1}</small><span>{q.question}</span><Plus size={22}/></summary><p>{q.answer}</p></details>)}</section><EditorialCallout title="Still curious? Let’s talk." text="Tell us what you need to know. A useful conversation starts with a good question."/></div>}
