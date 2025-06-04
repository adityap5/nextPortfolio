"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock } from "lucide-react"

const Contact = () => {
  const contactInfo = {
    email: "aditya.pippal@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA, USA",
    availability: "Available for freelance work",
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: contactInfo.email,
      description: "Send me an email anytime",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: contactInfo.phone,
      description: "Call me during business hours",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: contactInfo.address,
      description: "Based in San Francisco",
      color: "from-purple-500 to-violet-500",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <Badge variant="outline" className="mb-4 border-slate-300 dark:border-slate-600">
            Get In Touch
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can bring your ideas
            to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white`}>
                          <method.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">{method.title}</h4>
                          <p className="text-slate-600 dark:text-slate-300 font-medium">{method.value}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-6 border border-green-200 dark:border-green-800/30"
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <Clock size={16} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Current Status</h4>
                  <p className="text-slate-600 dark:text-slate-300">{contactInfo.availability}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="shadow-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900 dark:text-slate-100">
                  <MessageCircle className="text-blue-600" />
                  <span>Send me a message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <Input
                    placeholder="Project Discussion"
                    className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or how I can help you..."
                    rows={5}
                    className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
                  />
                </div>

                <Button
                  className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  size="lg"
                >
                  <Send size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <div className="text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Or schedule a call with me</p>
                  <Button
                    variant="outline"
                    className="mt-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <Calendar size={16} className="mr-2" />
                    Schedule a Meeting
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-12 border-t border-slate-200 dark:border-slate-700"
        >
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Aditya Pippal. Built with Next.js and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
