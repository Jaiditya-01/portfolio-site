import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Github, Target, Lightbulb, TrendingUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const project = selectedProject !== null ? portfolioData.projects[selectedProject] : null;

  return (
    <section id="projects" ref={ref} className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects & Research</h2>
          <p className="text-muted-foreground text-lg">Interdisciplinary work solving real-world problems</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-primary/10 text-primary border-primary/30">
                    {proj.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{proj.overview}</p>
                <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                  View Details →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {project && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
                <Badge className="w-fit">{project.category}</Badge>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Overview</h4>
                  <p className="text-muted-foreground">{project.overview}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-bold">Objectives</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="text-muted-foreground text-sm">• {obj}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Methodology</h4>
                  <p className="text-muted-foreground text-sm">{project.methodology}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-bold">Outcomes</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="text-muted-foreground text-sm">• {outcome}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-bold">Innovations</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.innovations.map((innovation, i) => (
                      <Badge key={i} variant="secondary">{innovation}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <h4 className="text-lg font-bold">Challenges & Solutions</h4>
                  </div>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, i) => (
                      <div key={i} className="bg-secondary/50 rounded-lg p-4">
                        <p className="text-sm font-medium mb-2">Challenge: {challenge.problem}</p>
                        <p className="text-sm text-muted-foreground">Solution: {challenge.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.links.github && (
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button className="flex-1 bg-primary" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
