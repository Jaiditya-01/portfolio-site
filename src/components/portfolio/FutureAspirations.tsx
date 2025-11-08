import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Rocket, Target, BookOpen, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const FutureAspirations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { futureAspirations } = portfolioData;

  return (
    <section id="future" ref={ref} className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Future Aspirations</h2>
          <p className="text-muted-foreground text-lg">Where I'm headed and how I plan to get there</p>
        </motion.div>

        {/* Short-term Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Short-Term Goals</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {futureAspirations.shortTerm.map((goal, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold">{goal.goal}</h4>
                  <Badge variant="outline" className="border-primary/50">
                    <Calendar className="w-3 h-3 mr-1" />
                    {goal.timeline}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {goal.steps.map((step, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">→</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Long-term Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Long-Term Vision</h3>
          </div>

          <div className="space-y-6">
            {futureAspirations.longTerm.map((vision, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-8 overflow-hidden group hover:shadow-glow transition-shadow"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-bold">{vision.goal}</h4>
                    <Badge className="bg-primary/10 text-primary border-primary/30">
                      {vision.timeline}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{vision.vision}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lifelong Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-primary rounded-xl p-8 text-primary-foreground"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6" />
            <h3 className="text-2xl font-bold">Commitment to Lifelong Learning</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {futureAspirations.lifelongLearning.map((commitment, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
              >
                <p className="text-sm flex items-start gap-2">
                  <span className="text-lg">•</span>
                  {commitment}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
