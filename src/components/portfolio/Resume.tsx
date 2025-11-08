import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Briefcase, Award, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { downloadPDF } from "@/lib/utils";

export const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { resume } = portfolioData;

  return (
    <section id="resume" ref={ref} className="py-24 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume / CV</h2>
          <p className="text-muted-foreground text-lg mb-6">A comprehensive overview of my journey</p>
          <Button 
            className="bg-primary hover:bg-primary/90 shadow-glow"
            onClick={() => downloadPDF("resume.pdf", "Resume.pdf")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {resume.education.map((edu, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow">
                  <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period} • GPA: {edu.gpa}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary">{highlight}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-4">
              {resume.experience.map((exp, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow">
                  <h4 className="font-semibold text-lg mb-1">{exp.role}</h4>
                  <p className="text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-sm mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-primary/30">{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-card/50 backdrop-blur-glass border border-border rounded-xl p-8">
            <h4 className="text-xl font-bold mb-4">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {resume.skills.technical.map((skill, i) => (
                <Badge key={i} className="bg-primary/10 text-primary border-primary/30">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-glass border border-border rounded-xl p-8">
            <h4 className="text-xl font-bold mb-4">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {resume.skills.soft.map((skill, i) => (
                <Badge key={i} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Sections */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h4 className="font-bold">Certifications</h4>
            </div>
            <ul className="space-y-2 text-sm">
              {resume.certifications.map((cert, i) => (
                <li key={i} className="text-muted-foreground">• {cert}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h4 className="font-bold">Awards</h4>
            </div>
            <ul className="space-y-2 text-sm">
              {resume.awards.map((award, i) => (
                <li key={i} className="text-muted-foreground">• {award}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <h4 className="font-bold">Interests & Hobbies</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {resume.hobbies.map((hobby, i) => (
                <Badge key={i} variant="outline">{hobby}</Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
