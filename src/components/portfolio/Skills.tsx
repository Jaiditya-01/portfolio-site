import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Code2, Users, Palette } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const icons = {
    "Technical Mastery": Code2,
    "Soft Skills": Users,
    "Creative Skills": Palette,
  };

  return (
    <section id="skills" ref={ref} className="py-24 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced Skills</h2>
          <p className="text-muted-foreground text-lg">Expertise across technical, creative, and interpersonal domains</p>
        </motion.div>

        <div className="space-y-12">
          {portfolioData.advancedSkills.map((category, categoryIndex) => {
            const Icon = icons[category.category as keyof typeof icons];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
                className="bg-card/50 backdrop-blur-glass border border-border rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + skillIndex * 0.1 }}
                      className="bg-background/50 rounded-lg p-6 hover:bg-background/80 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                        {skill.level && (
                          <span className="text-primary font-bold text-sm">{skill.level}%</span>
                        )}
                      </div>

                      {skill.level && (
                        <Progress 
                          value={skill.level} 
                          className="h-2 mb-3" 
                        />
                      )}

                      <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>

                      <div className="text-xs text-muted-foreground">
                        {skill.projects && `${skill.projects} projects completed`}
                        {skill.impact && skill.impact}
                        {skill.tools && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {skill.tools.map((tool, i) => (
                              <span key={i} className="px-2 py-1 bg-primary/10 rounded text-primary">
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
