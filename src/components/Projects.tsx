"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      title: "FlatBase",
      description:
        "Created a feature-rich flat booking system allowing filtering by price and location, supporting over 500+ listings. Secured 100+ user sessions using JWT & bcrypt; handled 500+ image uploads via Multer & Cloudinary. Optimized React components for faster rendering and implemented lazy loading of images using Cloudinary,leading to a 20% improvement in page load time. Integrated Razorpay, achieving 95%+ payment success rate across 30+ transactions",
      image: "/flap.jpg",
      technologies: ["ReactJS", "Redux-toolkit", "TailwindCSS", "MongoDB", "ExpressJS", "NodeJS", "Cloudinary", "Multer", "JWT", "Bcrypt"],
      liveLink: "https://flatbase-1.onrender.com/",
      githubLink: "https://github.com/adityap5/flatbase",
      featured: true,
    },
    {
      title: "CineVerse",
      description:
        "Developed a movie discovery app with 1000+ listings; enabled filtering by genre, popularity, and rating. Used Redux Toolkit to cut API calls by 60% and boost performance for 100+ users. Implemented a movie filter algorithm that reduced customer search times by 30% by using the data from TMDB API and creating a smart search, boosting user engagement.",
      image: "/cine.jpg",
      technologies: ["ReactJS", "Redux-toolkit", "TailwindCSS", "SCSS", "API Integration"],
      liveLink: "https://cineverse-ap.netlify.app/",
      githubLink: "https://github.com/adityap5/cineverse",
      featured: true,
    },
    {
      title: "Book Store Application",
      description:
        "Designed a bookstore app managing 200+ books and 100+ users with full checkout flow. Wrote 10+ API endpoints for book search, purchase, and user management; improved query performance.",
      image: "https://images.unsplash.com/photo-1527908290749-8c9518e0db09?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "SQL", "TailwindCSS", "CSS3"],
      githubLink: "https://github.com/adityap5/React-SQL",
      featured: false,
    },
    {
      title: "Recommerce",
      description:
        "Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.",
      image: "/recommerce.jpg",
      technologies: ["ReactJS", "TailwindCSS", "Redux Toolkit", "SCSS"],
      liveLink: "http://recommerce-ap.netlify.app/",
      githubLink: "https://github.com/adityap5/Redux-Ecommerce-",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "/port.jpg",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
      liveLink: "https://apippaldev.netlify.app/",
      githubLink: "https://github.com/adityap5/nextPortfolio",
      featured: false,
    },
    {
      title: "Chat Application",
      description: "Real-time Messaging: Messages are sent and received instantly using WebSockets.User Join/Leave Notifications: Users are notified when someone joins or leaves the chat.Audio Notifications: Receive a sound notification for incoming messages.Responsive UI: The chat interface adjusts based on device size, ensuring a seamless experience on any screen.",
      image: "https://images.unsplash.com/photo-1662974770404-468fd9660389?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      // liveLink: "https://example.com",
      githubLink: "https://github.com/adityap5/ChatNest",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Badge variant="outline" className="mb-4">
            Featured Work
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Latest Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and creative solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <Eye size={16} className="mr-1" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">Featured</Badge>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-1" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-1" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button variant="ghost" size="sm" asChild className="flex-1 text-xs">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild className="flex-1 text-xs">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1" />
                          Code
                        </a>
                      </Button>
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

export default Projects
