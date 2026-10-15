import type { Metadata } from "next";
import { MonarchExperience } from "@/components/home/monarch-experience";
export const metadata: Metadata={alternates:{canonical:"/"}};
export default function Home(){return <MonarchExperience/>;}
