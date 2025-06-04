"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="hero" className="py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <Badge
              variant="secondary"
              className="w-fit bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
            >
              <MapPin size={12} className="mr-1" />
              Available for work
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Aditya Pippal
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-medium">Full Stack Developer</p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl"
          >
            I&apos;m a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful,
            functional, and user-friendly applications that solve real-world problems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
            >
              <a
                href="https://drive.google.com/file/d/1HHIa8Xw9rDAN0MKGO6rBONHj67DWUJzd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Download Resume
                <Download size={16} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              View My Work
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">2+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">10+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />

            {/* Profile image container */}
            <div className="relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
              <Image
                src="/f5.png"
                alt="Aditya Pippal"
                width={400}
                height={400}
                className="w-full h-auto rounded-2xl"
                priority
              />

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg"
              >
                <span className="text-sm font-semibold">React</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-xl shadow-lg"
              >
                <span className="text-sm font-semibold">Node.js</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
