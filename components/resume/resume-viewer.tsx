"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, X, Mail, Phone, Linkedin, Github, Code, MapPin } from "lucide-react"

interface ResumeViewerProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  if (!isOpen) return null

  const handleDownload = () => {
    // Create resume content as text file
    const resumeContent = `
ANSH JAISWAL
+91-9795766893 | anshjais90@gmail.com
LinkedIn | GitHub | LeetCode

EDUCATION
Noida Institute of Engineering and Technology, Greater Noida, UP, India
Bachelor of Technology in Computer Science (IoT); CGPA: 7.06
Nov. 2022 – June 2026

EXPERIENCE
Cloud Intern – Edunet Foundation                                    Jul. 2024 – Aug. 2024
Remote
• Collaborated on multiple real-world projects using IBM Cloud and Watson services, focusing on scalable deployment and optimization.
• Enhanced proficiency in cloud infrastructure, application deployment pipelines, and troubleshooting under real-time constraints.

TECHNICAL SKILLS
Languages: Python, C++, Java, HTML, CSS, JavaScript
Frameworks/Technologies: Boost, ReactJS, Tailwind CSS, Django, MongoDB, SQL
C++ Focus: STL, OOP, Algorithm Optimization, Parsing, System Debugging
OS And Toolchains: Windows, Linux, GCC, MSVC, GitHub, GCP, Jupyter
Tools: Git, Cisco Packet Tracer, VS Code, IntelliJ, OpenCV, Leptonica

PROJECTS
Scratch Clone | React.js, TypeScript, Tailwind CSS, React DnD
• Engineered a dynamic drag-and-drop programming interface inspired by MIT Scratch, enabling users to build logic using code blocks.
• Implemented modular state management and logic evaluation for multi-sprite interactions; deployed via Vercel with local simulation support.

OLX Form Clone | React.js, TypeScript, Tailwind CSS
• Built a fully functional, mobile-responsive real estate form with cascading dropdowns, image reordering, and client-side validation logic.
• Incorporated form UX best practices and dynamic input handling for improved accessibility and data integrity.

AI Agent Project | Python, Deep Learning, Transformers
• Developed an intelligent AI agent capable of conversational interactions using transformer-based NLP models and fine-tuned scoring metrics.
• Implemented a custom grammar evaluation pipeline to rate spoken input, improving feedback precision and model interpretability.

Healthcare Monitoring System | ESP32, Firebase, Biomedical Sensors
• Built IoT system to monitor heart rate, oxygen level, and temperature using real-time cloud sync.
• Included emergency notification system for abnormal readings and health analytics.

Yoga Fit App | React.js, OpenCV, AI/ML, Pose Detection
• AI-powered full-stack web application for Smart India Hackathon 2025.
• Helps users perform yoga postures correctly using live camera detection with real-time feedback.

ACHIEVEMENTS
• Smart India Hackathon Finalist
• Completed Google Gen AI Cloud Study Jam Program
• Completed Google Arcade Session April-May 2025 With Legend Milestone
• Earned Microsoft Odyssey AI Level 1 And 2 Certifications

CERTIFICATIONS
• CCNA: Introduction to Networks – Cisco Networking Academy
• CCNA: Switching, Routing, and Wireless Essentials – Cisco Networking Academy
• C++ Foundation – Infosys Springboard
• Python Essentials 1 – Cisco Networking Academy
• Python Essentials 2 – Cisco Networking Academy
• Introduction to Cybersecurity – Cisco Networking Academy
    `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Ansh_Jaiswal_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-slate-800">Resume - Ansh Jaiswal</h2>
          <div className="flex items-center gap-3">
            <Button onClick={handleDownload} size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button onClick={onClose} size="sm" variant="outline">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="text-center border-b border-slate-200 pb-6">
              <h1 className="text-3xl font-bold text-slate-800 mb-2">ANSH JAISWAL</h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  +91-9795766893
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  anshjais90@gmail.com
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </div>
                <div className="flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  GitHub
                </div>
                <div className="flex items-center gap-1">
                  <Code className="h-4 w-4" />
                  LeetCode
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-300 pb-1">EDUCATION</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-slate-800">Noida Institute of Engineering and Technology</h3>
                    <p className="text-slate-600">Bachelor of Technology in Computer Science (IoT)</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="h-3 w-3" />
                      Greater Noida, UP, India
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-medium">CGPA: 7.06</p>
                    <p className="text-slate-500">Nov. 2022 – June 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-300 pb-1">EXPERIENCE</h2>
              <div className="space-y-4">
                {/* Current Celebal Technologies Internship */}
                <div className="relative">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                  <div className="pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                          DevOps Intern – Celebal Technologies
                          <Badge className="bg-green-100 text-green-800 text-xs">Current</Badge>
                        </h3>
                        <p className="text-sm text-slate-500">Remote</p>
                      </div>
                      <p className="text-sm text-slate-500">Jan. 2025 – Present</p>
                    </div>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-4">
                      <li>
                        Working on DevOps practices including CI/CD pipeline development and infrastructure automation.
                      </li>
                      <li>
                        Gaining hands-on experience with containerization, orchestration, and cloud deployment
                        strategies.
                      </li>
                      <li>
                        Collaborating with development teams to streamline deployment processes and improve system
                        reliability.
                      </li>
                      <li>Learning industry-standard DevOps tools and methodologies in a professional environment.</li>
                    </ul>
                  </div>
                </div>

                {/* Previous Edunet Foundation Internship */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-800">Cloud Intern – Edunet Foundation</h3>
                      <p className="text-sm text-slate-500">Remote</p>
                    </div>
                    <p className="text-sm text-slate-500">Jul. 2024 – Aug. 2024</p>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-4">
                    <li>
                      Collaborated on multiple real-world projects using IBM Cloud and Watson services, focusing on
                      scalable deployment and optimization.
                    </li>
                    <li>
                      Enhanced proficiency in cloud infrastructure, application deployment pipelines, and
                      troubleshooting under real-time constraints.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-300 pb-1">TECHNICAL SKILLS</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-slate-700">Languages: </span>
                  <span className="text-slate-600">Python, C++, Java, HTML, CSS, JavaScript</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Frameworks/Technologies: </span>
                  <span className="text-slate-600">Boost, ReactJS, Tailwind CSS, Django, MongoDB, SQL</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">C++ Focus: </span>
                  <span className="text-slate-600">STL, OOP, Algorithm Optimization, Parsing, System Debugging</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">OS And Toolchains: </span>
                  <span className="text-slate-600">Windows, Linux, GCC, MSVC, GitHub, GCP, Jupyter</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Tools: </span>
                  <span className="text-slate-600">Git, Cisco Packet Tracer, VS Code, IntelliJ, OpenCV, Leptonica</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-300 pb-1">PROJECTS</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Healthcare Monitoring System",
                    tech: "ESP32, Firebase, Biomedical Sensors",
                    points: [
                      "Built IoT system to monitor heart rate, oxygen level, and temperature using real-time cloud sync.",
                      "Included emergency notification system for abnormal readings and health analytics.",
                    ],
                  },
                  {
                    title: "Yoga Fit App",
                    tech: "React.js, OpenCV, AI/ML, Pose Detection",
                    points: [
                      "AI-powered full-stack web application for Smart India Hackathon 2025.",
                      "Helps users perform yoga postures correctly using live camera detection with real-time feedback.",
                    ],
                  },
                  {
                    title: "Scratch Clone",
                    tech: "React.js, TypeScript, Tailwind CSS, React DnD",
                    points: [
                      "Engineered a dynamic drag-and-drop programming interface inspired by MIT Scratch, enabling users to build logic using code blocks.",
                      "Implemented modular state management and logic evaluation for multi-sprite interactions; deployed via Vercel with local simulation support.",
                    ],
                  },
                  {
                    title: "OLX Form Clone",
                    tech: "React.js, TypeScript, Tailwind CSS",
                    points: [
                      "Built a fully functional, mobile-responsive real estate form with cascading dropdowns, image reordering, and client-side validation logic.",
                      "Incorporated form UX best practices and dynamic input handling for improved accessibility and data integrity.",
                    ],
                  },
                  {
                    title: "AI Agent Project",
                    tech: "Python, Deep Learning, Transformers",
                    points: [
                      "Developed an intelligent AI agent capable of conversational interactions using transformer-based NLP models and fine-tuned scoring metrics.",
                      "Implemented a custom grammar evaluation pipeline to rate spoken input, improving feedback precision and model interpretability.",
                    ],
                  },
                ].map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-slate-800">{project.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {project.tech}
                      </Badge>
                    </div>
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-4">
                      {project.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-300 pb-1">ACHIEVEMENTS</h2>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>Smart India Hackathon Finalist</li>
                <li>Completed Google Gen AI Cloud Study Jam Program</li>
                <li>Completed Google Arcade Session April-May 2025 With Legend Milestone</li>
                <li>Earned Microsoft Odyssey AI Level 1 And 2 Certifications</li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-300 pb-1">CERTIFICATIONS</h2>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>CCNA: Introduction to Networks – Cisco Networking Academy</li>
                <li>CCNA: Switching, Routing, and Wireless Essentials – Cisco Networking Academy</li>
                <li>C++ Foundation – Infosys Springboard</li>
                <li>Python Essentials 1 – Cisco Networking Academy</li>
                <li>Python Essentials 2 – Cisco Networking Academy</li>
                <li>Introduction to Cybersecurity – Cisco Networking Academy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
