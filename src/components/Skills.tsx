"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Database, Palette, Server, Smartphone, Cloud } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Microservices"],
    },
    {
      icon: Database,
      title: "Database & Storage",
      color: "from-purple-500 to-violet-500",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      color: "from-orange-500 to-red-500",
      skills: ["AWS", "Docker", "Git", "GitHub Actions", "Vercel", "Netlify"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "from-pink-500 to-rose-500",
      skills: ["Progressive Web Apps", "Responsive Design"],
    },
    {
      icon: Code,
      title: "Coding Languages",
      color: "from-indigo-500 to-blue-500",
      skills: ["C", "C++", "JavaScript"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Badge variant="outline" className="mb-4">
            Skills & Technologies
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital
            experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                      <category.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "React/Next.js", level: 90 },
              { skill: "Node.js", level: 85 },
              { skill: "C++", level: 75 },
              { skill: "MongoDB", level: 85 },
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-slate-600 dark:text-slate-400">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
