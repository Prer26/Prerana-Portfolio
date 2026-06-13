// Enhanced Home.tsx
// Install: npm install react-type-animation

import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import DataImg from "../assets/profile-photo.jpeg";

const skills = [
  "Python","SQL","Machine Learning","Deep Learning",
  "TensorFlow","Power BI","React","Angular",
  "Node.js","Flask","NLP","AI"
];

const expertise = [
  {
    title: "Artificial Intelligence",
    description: "Building intelligent systems using ML, Deep Learning and NLP.",
    icon: "🤖",
    href: "/projects",
  },
  {
    title: "Data Science",
    description: "Analytics, feature engineering, visualization and modeling.",
    icon: "📊",
    href: "/skills",
  },
  {
    title: "Full Stack Development",
    description: "React, Angular, Node.js, Flask and scalable applications.",
    icon: "💻",
    href: "/projects",
  },
  {
    title: "Innovation",
    description: "AI solutions for healthcare, agriculture and automation.",
    icon: "🚀",
    href: "/about",
  },
];

export default function Home() {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-5rem)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <div className="flex justify-center lg:justify-start">
              <img
                src={DataImg}
                alt="Prerana"
                className="w-72 sm:w-80 md:w-96 lg:w-[420px] xl:w-[450px] rounded-3xl shadow-2xl ring-4 ring-primary/10 object-cover animate-float"
              />
            </div>

            <div className="text-center lg:text-left">

              <div className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
                🚀 Open to AI, Data Science & Software Opportunities
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
                PRERANA
              </h1>

              <div className="text-xl lg:text-4xl font-bold gradient-text mb-5 min-h-[60px]">
                <TypeAnimation
                  sequence={[
                    "AI Engineer",2000,
                    "Machine Learning Engineer",2000,
                    "Data Scientist",2000,
                    "Full Stack Developer",2000,
                  ]}
                  repeat={Infinity}
                />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                AI & Machine Learning Engineer passionate about building intelligent
                systems, predictive models, and scalable applications. Experienced
                in Deep Learning, NLP, Data Analytics, and Full-Stack Development.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="card-elevated p-4 text-center">
                  <h3 className="text-2xl font-bold gradient-text">10+</h3>
                  <p className="text-xs">Projects</p>
                </div>
                <div className="card-elevated p-4 text-center">
                  <h3 className="text-2xl font-bold gradient-text">3</h3>
                  <p className="text-xs">Internships</p>
                </div>
                <div className="card-elevated p-4 text-center">
                  <h3 className="text-2xl font-bold gradient-text">8.9</h3>
                  <p className="text-xs">CGPA</p>
                </div>
                <div className="card-elevated p-4 text-center">
                  <h3 className="text-2xl font-bold gradient-text">92%</h3>
                  <p className="text-xs">Accuracy</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="gradient" size="lg" asChild>
                  <a
                  href="/PRERANA_resume_D.pdf"
                  download
                  >
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="mb-8 flex justify-center lg:justify-start">
                <SocialLinks size="lg" />
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>

          <div className="mt-24">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-10">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="card-elevated p-6">
                <div className="text-4xl mb-4">🩺</div>
                <h3 className="text-xl font-semibold mb-3">PharmaGuard AI</h3>
                <p className="text-muted-foreground">
                  Drug risk prediction system powered by Machine Learning and AI.
                </p>
              </div>

              <div className="card-elevated p-6">
                <div className="text-4xl mb-4">🌾</div>
                <h3 className="text-xl font-semibold mb-3">NishkaamKrishi</h3>
                <p className="text-muted-foreground">
                  Agriculture platform for crop and soil disease prediction.
                </p>
              </div>

              <div className="card-elevated p-6">
                <div className="text-4xl mb-4">🧬</div>
                <h3 className="text-xl font-semibold mb-3">Blood Cancer Detection</h3>
                <p className="text-muted-foreground">
                  CNN-based model achieving 92% prediction accuracy.
                </p>
              </div>

            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-border">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-10">
              Featured Expertise
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="card-elevated p-6 hover:scale-105 transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
