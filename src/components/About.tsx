"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Coffee, Lightbulb, Users } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Finding creative solutions to complex challenges",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams",
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Passionate About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Creating Digital Experiences
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I&apos;m a dedicated full-stack developer who loves turning ideas into reality through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20" />
              <Image
                src="/f6.png"
                alt="About Aditya"
                width={400}
                height={500}
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                With over 2 years of experience in web development, I specialize in creating modern, responsive
                applications using cutting-edge technologies. My passion lies in building user-centric solutions that
                make a real impact.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and
                best practices. When I&apos;m not coding, you&apos;ll find me exploring new technologies or contributing to
                open-source projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 space-y-2">
                      <item.icon className="w-8 h-8 text-blue-600" />
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
