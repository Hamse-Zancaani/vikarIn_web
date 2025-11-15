import CTA from "@/sections/cta/cta";
import Features1 from "@/sections/aboutUs/features1";
import Features2 from "@/sections/team/testimonials";
import Features3 from "@/sections/workers/features4";
import Features4 from "@/sections/checklist/features3";
import Hero from "@/sections/hero/hero";
import Testimonials from "@/sections/team/testimonials";

export default function HomePage() {
  return (
    <div className="px-4 xl:px-0 max-w-5xl mx-auto space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40 scroll-smooth">
      <Hero />
      <Features1 />
      <Features3 />
      <Features4 />
     <Features2 />
      
      <CTA />
     
    </div>
  )
}