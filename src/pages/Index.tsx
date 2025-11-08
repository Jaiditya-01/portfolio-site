import { Hero } from "@/components/portfolio/Hero";
import { TableOfContents } from "@/components/portfolio/TableOfContents";
import { Introduction } from "@/components/portfolio/Introduction";
import { Resume } from "@/components/portfolio/Resume";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Leadership } from "@/components/portfolio/Leadership";
import { GlobalAwareness } from "@/components/portfolio/GlobalAwareness";
import { FutureAspirations } from "@/components/portfolio/FutureAspirations";
import { Conclusion } from "@/components/portfolio/Conclusion";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TableOfContents />
      <Hero />
      <Introduction />
      <Resume />
      <Projects />
      <Skills />
      <Leadership />
      <GlobalAwareness />
      <FutureAspirations />
      <Conclusion />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
