import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Users, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" ref={ref} className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership & Collaboration</h2>
          <p className="text-muted-foreground text-lg">Experiences leading teams and driving impact</p>
        </motion.div>

        <div className="space-y-8">
          {portfolioData.leadership.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < portfolioData.leadership.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-px bg-border md:left-1/2" />
              )}

              <div className={`flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0 md:w-1/2 flex justify-start md:justify-end">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center shadow-glow">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 md:w-1/2">
                  <div className="bg-card border border-border rounded-xl p-8 hover:shadow-glow transition-all duration-300">
                    <Badge className="mb-3">{experience.period}</Badge>
                    <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
                    <p className="text-primary mb-4">{experience.organization}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                        Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {experience.outcomes.map((outcome, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
