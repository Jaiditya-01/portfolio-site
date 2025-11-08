import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Lightbulb } from "lucide-react";

export const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { introduction } = portfolioData;

  return (
    <section id="introduction" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Lightbulb className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{introduction.title}</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {introduction.content.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card/50 backdrop-blur-glass border border-border rounded-xl p-8 shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <p className="text-lg leading-relaxed text-foreground/90">{paragraph}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-8 bg-gradient-primary rounded-xl text-center"
        >
          <blockquote className="text-xl md:text-2xl font-medium text-primary-foreground">
            "The best way to predict the future is to invent it."
          </blockquote>
          <p className="mt-2 text-sm text-primary-foreground/80">— Alan Kay</p>
        </motion.div>
      </div>
    </section>
  );
};
