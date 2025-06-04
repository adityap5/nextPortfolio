"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const Education = () => {
  const education = [
    {
      year: "2019 - 2023",
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      location: "New York, NY",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Programming Club President", "Hackathon Winner"],
      coursework: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering"],
    },
    {
      year: "2017 - 2019",
      degree: "Higher Secondary Certificate",
      institution: "Central High School",
      location: "California, CA",
      gpa: "95%",
      achievements: ["Valedictorian", "Science Olympiad Gold Medal", "Mathematics Excellence Award"],
      coursework: ["Advanced Mathematics", "Physics", "Chemistry", "Computer Science"],
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-DEV-2023-001",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      credentialId: "META-REACT-2022-456",
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      year: "2021",
      credentialId: "FCC-FULLSTACK-2021-789",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Badge variant="outline" className="mb-4">
            Education & Certifications
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My educational background and professional certifications that shaped my technical expertise.
          </p>
        </motion.div>

        {/* Education */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                            <GraduationCap size={20} />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                            <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{edu.institution}</p>
                            <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 text-sm">
                              <div className="flex items-center space-x-1">
                                <Calendar size={14} />
                                <span>{edu.year}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={14} />
                                <span>{edu.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Award size={14} />
                                <span className="font-medium">GPA: {edu.gpa}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 ml-11">
                          <div>
                            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">
                              Key Achievements
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.achievements.map((achievement) => (
                                <Badge key={achievement} variant="secondary" className="text-xs">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">
                              Relevant Coursework
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course) => (
                                <Badge key={course} variant="outline" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
                        <Award size={20} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-lg leading-tight">{cert.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{cert.issuer}</p>
                        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                          <span>Issued: {cert.year}</span>
                          <Badge variant="outline" className="text-xs">
                            Verified
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">ID: {cert.credentialId}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
