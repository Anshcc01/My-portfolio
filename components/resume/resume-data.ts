export const resumeData = {
  personalInfo: {
    name: "Ansh Jaiswal",
    phone: "+91-9795766893",
    email: "anshjais90@gmail.com",
    linkedin: "LinkedIn",
    github: "GitHub",
    leetcode: "LeetCode",
  },
  education: {
    institution: "Noida Institute of Engineering and Technology",
    location: "Greater Noida, UP, India",
    degree: "Bachelor of Technology in Computer Science (IoT)",
    cgpa: "7.06",
    duration: "Nov. 2022 – June 2026",
  },
  experience: [
    {
      title: "DevOps Intern",
      company: "Celebal Technologies",
      location: "Remote",
      duration: "Jan. 2025 – Present",
      status: "current",
      responsibilities: [
        "Working on DevOps practices including CI/CD pipeline development and infrastructure automation.",
        "Gaining hands-on experience with containerization, orchestration, and cloud deployment strategies.",
        "Collaborating with development teams to streamline deployment processes and improve system reliability.",
        "Learning industry-standard DevOps tools and methodologies in a professional environment.",
      ],
    },
    {
      title: "Cloud Intern",
      company: "Edunet Foundation",
      location: "Remote",
      duration: "Jul. 2024 – Aug. 2024",
      status: "completed",
      responsibilities: [
        "Collaborated on multiple real-world projects using IBM Cloud and Watson services, focusing on scalable deployment and optimization.",
        "Enhanced proficiency in cloud infrastructure, application deployment pipelines, and troubleshooting under real-time constraints.",
      ],
    },
  ],
  technicalSkills: {
    languages: ["Python", "C++", "Java", "HTML", "CSS", "JavaScript"],
    frameworks: ["Boost", "ReactJS", "Tailwind CSS", "Django", "MongoDB", "SQL"],
    cppFocus: ["STL", "OOP", "Algorithm Optimization", "Parsing", "System Debugging"],
    osToolchains: ["Windows", "Linux", "GCC", "MSVC", "GitHub", "GCP", "Jupyter"],
    tools: ["Git", "Cisco Packet Tracer", "VS Code", "IntelliJ", "OpenCV", "Leptonica"],
  },
  projects: [
    {
      title: "Healthcare Monitoring System",
      technologies: ["ESP32", "Firebase", "Biomedical Sensors"],
      github: "https://github.com/Anshcc01/healthcare_monitoring_System",
      description: [
        "Built IoT system to monitor heart rate, oxygen level, and temperature using real-time cloud sync.",
        "Included emergency notification system for abnormal readings and health analytics.",
      ],
    },
    {
      title: "Yoga Fit App",
      technologies: ["React.js", "OpenCV", "AI/ML", "Pose Detection"],
      github: "https://github.com/Anshcc01/Excercise/tree/main",
      description: [
        "AI-powered full-stack web application for Smart India Hackathon 2025.",
        "Helps users perform yoga postures correctly using live camera detection with real-time feedback.",
      ],
    },
    {
      title: "Scratch Clone",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "React DnD"],
      github: "GitHub Repo",
      description: [
        "Engineered a dynamic drag-and-drop programming interface inspired by MIT Scratch, enabling users to build logic using code blocks.",
        "Implemented modular state management and logic evaluation for multi-sprite interactions; deployed via Vercel with local simulation support.",
      ],
    },
    {
      title: "OLX Form Clone",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      github: "GitHub Repo",
      description: [
        "Built a fully functional, mobile-responsive real estate form with cascading dropdowns, image reordering, and client-side validation logic.",
        "Incorporated form UX best practices and dynamic input handling for improved accessibility and data integrity.",
      ],
    },
    {
      title: "AI Agent Project",
      technologies: ["Python", "Deep Learning", "Transformers"],
      github: "GitHub Repo",
      description: [
        "Developed an intelligent AI agent capable of conversational interactions using transformer-based NLP models and fine-tuned scoring metrics.",
        "Implemented a custom grammar evaluation pipeline to rate spoken input, improving feedback precision and model interpretability.",
      ],
    },
  ],
  achievements: [
    "Smart India Hackathon Finalist",
    "Completed Google Gen AI Cloud Study Jam Program",
    "Completed Google Arcade Session April-May 2025 With Legend Milestone",
    "Earned Microsoft Odyssey AI Level 1 And 2 Certifications",
  ],
  certifications: [
    "CCNA: Introduction to Networks – Cisco Networking Academy",
    "CCNA: Switching, Routing, and Wireless Essentials – Cisco Networking Academy",
    "C++ Foundation – Infosys Springboard",
    "Python Essentials 1 – Cisco Networking Academy",
    "Python Essentials 2 – Cisco Networking Academy",
    "Introduction to Cybersecurity – Cisco Networking Academy",
  ],
}

export function generateResumeText(): string {
  const { personalInfo, education, experience, technicalSkills, projects, achievements, certifications } = resumeData

  return `
ANSH JAISWAL
${personalInfo.phone} | ${personalInfo.email}
${personalInfo.linkedin} | ${personalInfo.github} | ${personalInfo.leetcode}

EDUCATION
${education.institution}, ${education.location}
${education.degree}; CGPA: ${education.cgpa}
${education.duration}

EXPERIENCE
${experience
  .map(
    (exp) => `
${exp.title} – ${exp.company}                                    ${exp.duration}
${exp.location}
${exp.responsibilities.map((resp) => `• ${resp}`).join("\n")}
`,
  )
  .join("\n")}

TECHNICAL SKILLS
Languages: ${technicalSkills.languages.join(", ")}
Frameworks/Technologies: ${technicalSkills.frameworks.join(", ")}
C++ Focus: ${technicalSkills.cppFocus.join(", ")}
OS And Toolchains: ${technicalSkills.osToolchains.join(", ")}
Tools: ${technicalSkills.tools.join(", ")}

PROJECTS
${projects
  .map(
    (project) => `
${project.title} | ${project.technologies.join(", ")}
${project.description.map((desc) => `• ${desc}`).join("\n")}
`,
  )
  .join("\n")}

ACHIEVEMENTS
${achievements.map((achievement) => `• ${achievement}`).join("\n")}

CERTIFICATIONS
${certifications.map((cert) => `• ${cert}`).join("\n")}
  `.trim()
}

// Updated download function to handle PDF
export function downloadResume(): void {
  // Try to download PDF first, fallback to text if PDF not available
  const pdfPath = "/resume/Ansh_Jaiswal_Resume.pdf"

  // Create a temporary link element
  const link = document.createElement("a")
  link.href = pdfPath
  link.download = "Ansh_Jaiswal_Resume.pdf"
  link.target = "_blank"

  // Check if PDF exists by trying to fetch it
  fetch(pdfPath, { method: "HEAD" })
    .then((response) => {
      if (response.ok) {
        // PDF exists, download it
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        // PDF doesn't exist, fallback to text
        downloadTextResume()
      }
    })
    .catch(() => {
      // Error fetching PDF, fallback to text
      downloadTextResume()
    })
}

// Fallback function for text download
function downloadTextResume(): void {
  const resumeContent = generateResumeText()
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

// Function to open PDF in new tab
export function viewResumePDF(): void {
  const pdfPath = "/resume/Ansh_Jaiswal_Resume.pdf"
  window.open(pdfPath, "_blank")
}
