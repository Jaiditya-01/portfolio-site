import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Globe, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const GlobalAwareness = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { globalAwareness } = portfolioData;

  return (
    <section id="global" ref={ref} className="py-24 px-4 bg-gradient-dark relative overflow-hidden">
      {/* Background Globe Effect */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-primary animate-spin" style={{ animationDuration: '60s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Global Awareness & Ethics</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{globalAwareness.intro}</p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8 mb-12">
          {globalAwareness.caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card/50 backdrop-blur-glass border border-border rounded-xl p-8 hover:shadow-glow transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-primary" />
                {study.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                    Context
                  </h4>
                  <p className="text-sm">{study.context}</p>
                </div>

                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-destructive mb-2">
                    Ethical Dilemma
                  </h4>
                  <p className="text-sm">{study.dilemma}</p>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                    Decision & Action
                  </h4>
                  <p className="text-sm">{study.decision}</p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Outcome</h4>
                    <p className="text-sm text-muted-foreground">{study.outcome}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <blockquote className="italic text-sm text-primary">
                    "{study.lesson}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Issues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card border border-border rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Global Issues I'm Passionate About</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {globalAwareness.globalIssues.map((issue, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-sm">{issue}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
