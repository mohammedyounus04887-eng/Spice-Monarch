import type { Metadata } from "next";
import { SpiceFinder } from "@/components/site/spice-finder";
export const metadata:Metadata={title:"Find your spice",description:"Discover spices for your next idea with three quick questions about flavour, application, and format.",alternates:{canonical:"/quiz"}};
export default function QuizPage(){return <SpiceFinder/>;}
