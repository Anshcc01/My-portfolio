"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { FloatingElements } from "@/components/ui/floating-elements"
import { SkillBar } from "@/components/ui/skill-bar"
import { GlowingCard } from "@/components/ui/glowing-card"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code,
  Download,
  Eye,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  Star,
  Target,
} from "lucide-react"
import { ResumeViewer } from "@/components/resume/resume-viewer"

// Custom hook for fade-in animation on scroll
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible] as const
}

// Animated section wrapper component
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResumeViewerOpen, setIsResumeViewerOpen] = useState(false)

  const skills = {
    languages: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 92 },
    ],
    frameworks: ["ReactJS", "Tailwind CSS", "Django", "MongoDB", "SQL", "Boost"],
    tools: ["Git", "VS Code", "IntelliJ", "GitHub", "GCP", "Jupyter", "OpenCV", "Cisco Packet Tracer"],
    os: ["Windows", "Linux", "GCC", "MSVC"],
  }

  const projects = [
    {
      title: "Healthcare Monitoring System",
      description:
        "Built comprehensive IoT system to monitor vital signs including heart rate, oxygen level, and temperature with real-time cloud synchronization and emergency notifications.",
      tech: ["ESP32", "Firebase", "Biomedical Sensors", "IoT", "Real-time Analytics"],
      github: "https://github.com/Anshcc01/healthcare_monitoring_System",
      deployed: "https://health-monitoring-system.netlify.app/",
      highlights: ["Real-time cloud sync", "Emergency notification system", "Health analytics dashboard"],
      color: "red",
      category: "IoT & Healthcare",
    },
    {
      title: "Yoga Fit App",
      description:
        "AI-powered full-stack web application for Smart India Hackathon 2025 that helps users perform yoga postures correctly using live camera detection with real-time feedback.",
      tech: ["React.js", "OpenCV", "AI/ML", "Pose Detection", "Computer Vision"],
      github: "https://github.com/Anshcc01/Excercise/tree/main",
      deployed: null, // No deployed link provided
      highlights: ["Live camera detection", "Real-time posture feedback", "Visual cues system"],
      color: "green",
      category: "AI & Computer Vision",
    },
    {
      title: "Scratch Clone",
      description:
        "Engineered a dynamic drag-and-drop programming interface inspired by MIT Scratch, enabling users to build logic using code blocks.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "React DnD"],
      github: "https://github.com/Anshcc01",
      deployed: "https://scratch-new.vercel.app/",
      highlights: ["Modular state management", "Multi-sprite interactions", "Deployed via Vercel"],
      color: "blue",
      category: "Web Development",
    },
    {
      title: "OLX Form Clone",
      description:
        "Built a fully functional, mobile-responsive real estate form with cascading dropdowns, image reordering, and client-side validation.",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Anshcc01",
      deployed: "https://olx-form-clone.vercel.app/",
      highlights: ["Mobile-responsive design", "Dynamic input handling", "Form UX best practices"],
      color: "purple",
      category: "Web Development",
    },
    {
      title: "AI Agent Project",
      description:
        "Developed an intelligent AI agent capable of conversational interactions using transformer-based NLP models.",
      tech: ["Python", "Deep Learning", "Transformers"],
      github: "https://github.com/Anshcc01",
      deployed: null, // No deployed link provided
      highlights: ["Custom grammar evaluation", "Fine-tuned scoring metrics", "Improved feedback precision"],
      color: "yellow",
      category: "AI & Machine Learning",
    },
  ]

  const communityActivities = [
    {
      title: "Microsoft Azure Developer Community Meetup",
      description:
        "Attended CareerMaker Meetup at Microsoft Office, gaining insights into Product Management and cloud technologies from industry experts.",
      date: "April 2024",
      type: "Workshop",
      image: "/images/microsoft-meetup.png",
      highlights: ["Product Management insights", "Azure cloud technologies", "Industry networking"],
      color: "blue",
      icon: "🏢",
    },
    {
      title: "GeeksforGeeks Hackfest Hackathon",
      description:
        "Participated in competitive hackathon organized by GeeksforGeeks, collaborating with talented developers and showcasing problem-solving skills.",
      date: "2024",
      type: "Hackathon",
      image: "/images/geeksforgeeks-event.png",
      highlights: ["Team collaboration", "Competitive programming", "Technical innovation"],
      color: "green",
      icon: "🏆",
    },
    {
      title: "Smart India Hackathon 2024",
      description:
        "Successfully shortlisted in top 30 for Internal SIH NIET screening process, demonstrating exceptional problem-solving and innovation capabilities.",
      date: "2024",
      type: "Competition",
      image: "/images/sih-achievement.png",
      highlights: ["Top 30 finalist", "Innovation showcase", "National competition"],
      color: "purple",
      icon: "🥇",
    },
    {
      title: "Developer Community Events Crew",
      description:
        "Actively involved as crew member in organizing developer community events, facilitating knowledge sharing and networking opportunities.",
      date: "Ongoing",
      type: "Organization",
      image: "/images/hackathon-workshop.png",
      highlights: ["Event organization", "Community building", "Technical workshops"],
      color: "yellow",
      icon: "🎯",
    },
  ]

  const achievements = [
    "Smart India Hackathon Finalist",
    "Google Gen AI Cloud Study Jam Program",
    "Google Arcade Session April-May 2025 With Legend Milestone",
    "Microsoft Odyssey AI Level 1 And 2 Certifications",
  ]

  const certifications = [
    "CCNA: Introduction to Networks – Cisco Networking Academy",
    "CCNA: Switching, Routing, and Wireless Essentials – Cisco Networking Academy",
    "C++ Foundation – Infosys Springboard",
    "React.js – Infosys Springboard",
    "Java Fundamentals – Infosys Springboard",
    "Python Essentials 1 – Cisco Networking Academy",
    "Python Essentials 2 – Cisco Networking Academy",
    "Introduction to Cybersecurity – Cisco Networking Academy",
  ]

  const experiences = [
    {
      title: "DevOps Intern",
      company: "Celebal Technologies",
      location: "Remote",
      duration: "Currently Working Here",
      status: "current",
      image: "/images/celebal-internship.jpg",
      responsibilities: [
        "Working on DevOps practices including CI/CD pipeline development and infrastructure automation",
        "Gaining hands-on experience with containerization, orchestration, and cloud deployment strategies",
        "Collaborating with development teams to streamline deployment processes and improve system reliability",
        "Learning industry-standard DevOps tools and methodologies in a professional environment",
      ],
      highlights: ["Current Position", "DevOps Focus", "Remote Collaboration", "Industry Tools"],
    },
    {
      title: "Cloud Intern",
      company: "Edunet Foundation",
      location: "Remote",
      duration: "Jul. 2024 – Aug. 2024",
      status: "completed",
      responsibilities: [
        "Collaborated on multiple real-world projects using IBM Cloud and Watson services, focusing on scalable deployment and optimization",
        "Enhanced proficiency in cloud infrastructure, application deployment pipelines, and troubleshooting under real-time constraints",
      ],
      highlights: ["IBM Cloud", "Watson Services", "Scalable Deployment"],
    },
  ]

  const stats = [
    { label: "Projects Completed", value: 20, suffix: "+" },
    { label: "Technologies Mastered", value: 25, suffix: "+" },
    { label: "Current Internships", value: 1, suffix: "", highlight: true },
    { label: "CGPA", value: 7.06, suffix: "" },
  ]

  // Social links with proper URLs
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:anshjais90@gmail.com",
      color: "text-red-500",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+919795766893",
      color: "text-green-500",
      label: "Phone",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anshjaiswal01/",
      color: "text-blue-600",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Anshcc01",
      color: "text-gray-800",
      label: "GitHub",
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/iam_ansh01/",
      color: "text-purple-600",
      label: "LeetCode",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "resume", "community", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleContactClick = () => {
    window.open("mailto:anshjais90@gmail.com", "_blank")
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/anshjaiswal01/", "_blank")
  }

  const handleGitHubClick = () => {
    window.open("https://github.com/Anshcc01", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-x-hidden">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Smooth Background Gradient Animation */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 animate-gradient-x"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass-effect z-50 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gradient">Ansh Jaiswal</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Resume", "Community", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${
                    activeSection === item.toLowerCase() ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 rounded-lg glass-effect hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 glass-effect">
              {["Home", "About", "Projects", "Skills", "Resume", "Community", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-pulse-glow relative">
              <img src="/images/profile-main.jpg" alt="Ansh Jaiswal" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Ansh Jaiswal</span>
            </h1>

            <div className="text-xl md:text-2xl text-slate-600 mb-6 h-8">
              <TypingAnimation text="Computer Science Student & DevOps Enthusiast" speed={50} />
            </div>

            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate about building innovative solutions with modern technologies. Experienced in full-stack
              development, cloud computing, and AI/ML projects.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <GlowingCard key={index} className="glass-effect rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                </GlowingCard>
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : "_self"}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`${social.color} hover:scale-125 transition-all duration-300 p-2 rounded-full glass-effect hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-full glass-effect hover:shadow-lg"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">About Me</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="md:col-span-2 mb-8" delay={200}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-blue-200 shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <img src="/images/profile-main.jpg" alt="Ansh Jaiswal" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  
                  <p className="text-slate-600 leading-relaxed">
                    A passionate Computer Science Final year student specializing in IoT, with hands-on experience in DevOps, Cloud
                    computing, Full-stack development, and AI/ML projects. Currently pursuing B.Tech from Noida Institute of Engineering And Technology and
                    working as a DevOps Intern at Celebal Technologies, focusing on building innovative solutions using
                    modern technologies and industry-standard practices.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Current Work Highlight */}
            <AnimatedSection className="md:col-span-2 mb-8" delay={400}>
              <GlowingCard glowColor="green">
                <Card className="glass-effect border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-green-200 flex-shrink-0">
                        <img
                          src="/images/celebal-internship.jpg"
                          alt="Celebal Technologies"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <h3 className="text-lg font-semibold text-slate-800">Currently Working</h3>
                          <Badge className="bg-green-100 text-green-800">Live</Badge>
                        </div>
                        <p className="text-slate-600 text-sm">
                          DevOps Intern at <span className="font-semibold">Celebal Technologies</span> - Working on
                          CI/CD pipelines, infrastructure automation, and modern DevOps practices in a professional
                          remote environment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GlowingCard>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <GlowingCard glowColor="blue">
                <Card className="glass-effect border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      Bachelor of Technology
                    </CardTitle>
                    <CardDescription>Computer Science (IoT)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4" />
                        Noida Institute of Engineering and Technology, Greater Noida, UP
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4" />
                        Nov. 2022 – June 2026
                      </div>
                      <div className="text-sm font-medium text-slate-800">CGPA: 7.06</div>
                    </div>
                  </CardContent>
                </Card>
              </GlowingCard>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <GlowingCard glowColor="purple">
                <Card className="glass-effect border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-purple-600" />
                      Cloud Intern
                    </CardTitle>
                    <CardDescription>Edunet Foundation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4" />
                        Jul. 2024 – Aug. 2024 (Remote)
                      </div>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Collaborated on real-world projects using IBM Cloud and Watson services</li>
                      <li>• Enhanced proficiency in cloud infrastructure and deployment pipelines</li>
                      <li>• Focused on scalable deployment and optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </GlowingCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
              A showcase of diverse projects spanning IoT, AI/ML, and web development, demonstrating proficiency across
              multiple technology stacks and problem domains.
            </p>
          </AnimatedSection>

          {/* Project Categories Filter */}
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["All", "IoT & Healthcare", "AI & Computer Vision", "Web Development", "AI & Machine Learning"].map(
                (category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 transition-colors px-4 py-2"
                  >
                    {category}
                  </Badge>
                ),
              )}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <GlowingCard glowColor={project.color}>
                  <Card className={`glass-effect border-${project.color}-200 h-full group relative overflow-hidden`}>
                    {/* Project Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge
                        variant="secondary"
                        className={`bg-${project.color}-100 text-${project.color}-800 text-xs`}
                      >
                        {project.category}
                      </Badge>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between pr-20">
                        <span className="flex items-center gap-2">
                          <div className={`w-3 h-3 bg-${project.color}-500 rounded-full animate-pulse`}></div>
                          {project.title}
                        </span>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-600 transform hover:scale-110 transition-all duration-300 absolute top-0 right-0"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-slate-600 mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className={`text-xs hover:bg-${project.color}-50 transition-colors cursor-pointer`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Project Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                        <ul className="text-xs text-slate-500 space-y-1">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div
                                className={`w-1.5 h-1.5 bg-${project.color}-500 rounded-full mt-1.5 flex-shrink-0`}
                              ></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* GitHub Link Button and Deployed App Button */}
                      <div className="mt-4 pt-3 border-t border-slate-200 space-y-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-sm text-${project.color}-600 hover:text-${project.color}-700 font-medium transition-colors`}
                        >
                          <Github size={16} />
                          View Source Code
                        </a>
                        {project.deployed && (
                          <div>
                            <a
                              href={project.deployed}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors`}
                            >
                              <ExternalLink size={16} />
                              View Deployed App
                            </a>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </GlowingCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Project Stats */}
          <AnimatedSection delay={600}>
            <div className="mt-16 grid md:grid-cols-4 gap-6">
              {[
                { label: "Total Projects", value: 20, suffix: "+", icon: "💻", color: "blue" },
                { label: "Tech Stacks Used", value: 15, suffix: "+", icon: "⚡", color: "purple" },
                { label: "GitHub Repositories", value: 25, suffix: "+", icon: "📁", color: "green" },
                { label: "Lines of Code", value: 10000, suffix: "+", icon: "🚀", color: "yellow" },
              ].map((stat, index) => (
                <GlowingCard key={index} glowColor={stat.color} className="text-center">
                  <Card className={`glass-effect border-${stat.color}-200 p-6`}>
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gradient">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                  </Card>
                </GlowingCard>
              ))}
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection delay={800}>
            <div className="mt-12 text-center">
              <GlowingCard glowColor="blue">
                <Card className="glass-effect border-blue-200 p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Explore More Projects</h3>
                  <p className="text-slate-600 mb-6">
                    Check out my GitHub profile for more projects and contributions to open-source initiatives.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleGitHubClick}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Visit GitHub Profile
                    </Button>
                    <Button onClick={handleGitHubClick} variant="outline" className="glass-effect bg-transparent">
                      <Code className="mr-2 h-4 w-4" />
                      View All Repositories
                    </Button>
                  </div>
                </Card>
              </GlowingCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Technical Skills</span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skill Bars */}
            <AnimatedSection delay={200}>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  Programming Languages
                </h3>
                <GlowingCard glowColor="blue">
                  <Card className="glass-effect border-blue-200 p-6">
                    {skills.languages.map((skill, index) => (
                      <SkillBar
                        key={index}
                        skill={skill.name}
                        percentage={skill.level}
                        color={`bg-gradient-to-r ${
                          index % 4 === 0
                            ? "from-blue-500 to-blue-600"
                            : index % 4 === 1
                              ? "from-purple-500 to-purple-600"
                              : index % 4 === 2
                                ? "from-green-500 to-green-600"
                                : "from-yellow-500 to-yellow-600"
                        }`}
                      />
                    ))}
                  </Card>
                </GlowingCard>
              </div>
            </AnimatedSection>

            {/* Skill Categories */}
            <div className="space-y-6">
              {[
                { title: "Frameworks", items: skills.frameworks, color: "purple" },
                { title: "Tools", items: skills.tools, color: "green" },
                { title: "OS & Toolchains", items: skills.os, color: "yellow" },
              ].map((category, index) => (
                <AnimatedSection key={index} delay={400 + index * 200}>
                  <GlowingCard glowColor={category.color}>
                    <Card className={`glass-effect border-${category.color}-200`}>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Star className={`h-5 w-5 text-${category.color}-500`} />
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className={`hover:bg-${category.color}-100 transition-colors cursor-pointer transform hover:scale-105`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </GlowingCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gradient-to-r from-slate-50/50 to-blue-50/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">Resume</span>
              </h2>
              <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                View or download my complete resume to learn more about my experience, skills, and achievements.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1XRCqA-Tj63RPxaFv1cjgSDrgyvbu7JJi/view?usp=sharing",
                      "_blank",
                    )
                  }
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-medium min-w-[200px]"
                >
                  <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  View Resume
                  <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Button>

                <Button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1XRCqA-Tj63RPxaFv1cjgSDrgyvbu7JJi/view?usp=sharing",
                      "_blank",
                    )
                  }
                  variant="outline"
                  className="group glass-effect border-blue-300 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-medium min-w-[200px] bg-white/80"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
                  Download Resume
                  <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section id="community" className="py-20 bg-gradient-to-r from-indigo-50/50 to-cyan-50/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-gradient">Community Involvement & Events</span>
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
              Actively participating in developer communities, hackathons, and tech events to stay connected with the
              latest industry trends and contribute to the tech ecosystem.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {communityActivities.map((activity, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <GlowingCard glowColor={activity.color}>
                  <Card className={`glass-effect border-${activity.color}-200 overflow-hidden group h-full`}>
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <Badge variant="secondary" className={`bg-${activity.color}-100 text-${activity.color}-800`}>
                          {activity.icon} {activity.type}
                        </Badge>
                        <Badge variant="outline" className="bg-white/80">
                          {activity.date}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <div className={`w-3 h-3 bg-${activity.color}-500 rounded-full animate-pulse`}></div>
                        {activity.title}
                      </h3>
                      <p className="text-slate-600 mb-4 flex-1">{activity.description}</p>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {activity.highlights.map((highlight, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className={`text-xs hover:bg-${activity.color}-50 transition-colors`}
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </GlowingCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Community Stats */}
          <AnimatedSection delay={800}>
            <div className="mt-16 grid md:grid-cols-4 gap-6">
              {[
                { label: "Events Attended", value: 10, suffix: "+", icon: "📅" },
                { label: "Hackathons Participated", value: 5, suffix: "+", icon: "💻" },
                { label: "Community Connections", value: 100, suffix: "+", icon: "🤝" },
                { label: "Workshops Organized", value: 3, suffix: "+", icon: "🎓" },
              ].map((stat, index) => (
                <GlowingCard key={index} className="text-center">
                  <Card className="glass-effect border-blue-200 p-6">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gradient">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                  </Card>
                </GlowingCard>
              ))}
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection delay={1000}>
            <div className="mt-12 text-center">
              <GlowingCard glowColor="blue">
                <Card className="glass-effect border-blue-200 p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Let's Connect & Collaborate!</h3>
                  <p className="text-slate-600 mb-6">
                    Always excited to participate in new events, hackathons, and community initiatives. Let's build
                    something amazing together!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleContactClick}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Get In Touch
                    </Button>
                    <Button onClick={handleLinkedInClick} variant="outline" className="glass-effect bg-transparent">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </Card>
              </GlowingCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-r from-green-50/50 to-yellow-50/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Achievements & Certifications</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection delay={200}>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-500" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <GlowingCard key={index} glowColor="yellow">
                      <Card className="glass-effect border-yellow-200">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                            <p className="text-slate-700">{achievement}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </GlowingCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-green-500" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <GlowingCard key={index} glowColor="green">
                      <Card className="glass-effect border-green-200">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-2 animate-pulse"></div>
                            <p className="text-sm text-slate-700">{cert}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </GlowingCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%239C92AC fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "anshjais90@gmail.com",
                href: "mailto:anshjais90@gmail.com",
                color: "blue",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91-9795766893",
                href: "tel:+919795766893",
                color: "green",
              },
              {
                icon: Linkedin,
                title: "Social",
                value: "LinkedIn • GitHub",
                href: "https://www.linkedin.com/in/anshjaiswal01/",
                color: "purple",
              },
            ].map((contact, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <GlowingCard glowColor={contact.color}>
                  <Card className="glass-effect border-white/20 bg-white/10">
                    <CardContent className="pt-6 text-center">
                      <contact.icon className={`h-8 w-8 text-${contact.color}-400 mx-auto mb-4`} />
                      <h3 className="font-semibold mb-2">{contact.title}</h3>
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : "_self"}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`text-${contact.color}-400 hover:text-${contact.color}-300 transition-colors`}
                      >
                        {contact.value}
                      </a>
                    </CardContent>
                  </Card>
                </GlowingCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <Separator className="bg-slate-700 mb-8" />

            <div className="text-center">
              <p className="text-slate-300 mb-4">Ready to collaborate on your next project?</p>
              <Button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-4 w-4" />
                Let's Talk
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 relative">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 Ansh Jaiswal. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with Next.js and Tailwind CSS</p>
            <div className="mt-4 flex justify-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </AnimatedSection>
      </footer>
      {/* Resume Viewer Modal */}
      <ResumeViewer isOpen={isResumeViewerOpen} onClose={() => setIsResumeViewerOpen(false)} />
    </div>
  )
}
