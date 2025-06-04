"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      description:
        "Led development of multiple web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and mentored junior developers.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"],
      type: "Full-time",
    },
    {
      year: "2022 - 2023",
      role: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      description:
        "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Figma"],
      type: "Full-time",
    },
    {
      year: "2021 - 2022",
      role: "Junior Web Developer",
      company: "StartUp Ventures",
      location: "San Francisco, CA",
      description:
        "Built and maintained company websites, implemented new features, and optimized application performance.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
      type: "Full-time",
    },
    {
      year: "2021",
      role: "Web Development Intern",
      company: "Creative Studios",
      location: "Los Angeles, CA",
      description:
        "Assisted in developing client websites and learned modern web development practices under senior developer guidance.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"],
      type: "Internship",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Badge variant="outline" className="mb-4">
            Professional Experience
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional growth and the amazing teams I&apos;ve worked with.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-2 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} className="text-slate-500" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">{experience.year}</span>
                            <Badge variant="secondary" className="text-xs">
                              {experience.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{experience.role}</h3>
                          <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
                            <div className="flex items-center space-x-1">
                              <Building size={14} />
                              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                {experience.company}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span className="text-sm">{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{experience.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-950 dark:hover:border-blue-800 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
