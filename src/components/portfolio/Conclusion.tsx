import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { TrendingUp, AlertCircle, Target, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Conclusion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { conclusion } = portfolioData;

  const swotIcons = {
    strengths: TrendingUp,
    weaknesses: AlertCircle,
    opportunities: Target,
    threats: Shield,
  };

  return (
    <section id="conclusion" ref={ref} className="py-24 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Reflection & Self-Assessment</h2>
          <p className="text-muted-foreground text-lg">Looking back and looking forward</p>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-glass border border-border rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Journey Summary</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{conclusion.summary}</p>
          
          <h4 className="font-semibold mb-4">Key Achievements</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {conclusion.keyAchievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background/50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-sm">{achievement}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SWOT Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">SWOT Analysis</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(conclusion.swot).map(([category, items], index) => {
              const Icon = swotIcons[category as keyof typeof swotIcons];
              const colors = {
                strengths: "border-primary/50 bg-primary/5",
                weaknesses: "border-destructive/50 bg-destructive/5",
                opportunities: "border-accent/50 bg-accent/5",
                threats: "border-muted/50 bg-muted/5",
              };

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className={`border rounded-xl p-6 ${colors[category as keyof typeof colors]}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold capitalize">{category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {items.map((item: string, i: number) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Final Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-primary rounded-xl p-8 text-primary-foreground text-center"
        >
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
            "{conclusion.reflection}"
          </blockquote>
          <div className="flex justify-center gap-2 mt-6">
            <Badge className="bg-white/20 text-white border-white/30">Growth Mindset</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Ethical Tech</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Continuous Learning</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
