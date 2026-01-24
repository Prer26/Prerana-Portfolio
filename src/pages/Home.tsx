import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";

// Image import
import DataImg from "@/assets/DATA.png";

const Home = () => {
  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ================= TEXT CONTENT ================= */}
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium mb-4">
                Hello, I'm
              </p>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                Prerana <br />
                <span className="gradient-text">
                  Where Learning Meets Data
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                A 3rd-year BE student navigating the world of Machine Learning and
                Data Science. Driven by curiosity, patterns, and the challenge
                of turning raw data into understanding.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/projects">
                    View My Work <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>

                <Button variant="gradient-outline" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>

              <SocialLinks size="md" />
            </div>

            {/* ================= IMAGE CONTENT ================= */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="flex items-center justify-center">

                <img
                  src={DataImg}
                  alt="AI and Data Illustration"
                  className="
                    w-60
                    md:w-72
                    lg:w-80
                    xl:w-96
                    h-auto
                    object-contain
                    rounded-2xl
                    shadow-lg
                    opacity-95
                  "
                />

              </div>
            </div>

          </div>

          {/* ================= QUICK OVERVIEW ================= */}
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              What You'll Find Here
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewItems.map((item, index) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group card-elevated p-6 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>

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
};

const overviewItems = [
  {
    title: "About Me",
    description: "My background, interests, and what drives my passion for data.",
    href: "/about",
    icon: <span className="text-xl">👤</span>,
  },
  {
    title: "Skills",
    description: "The tools and technologies I use to solve complex problems.",
    href: "/skills",
    icon: <span className="text-xl">⚡</span>,
  },
  {
    title: "Projects",
    description: "Real-world projects showcasing my analytical capabilities.",
    href: "/projects",
    icon: <span className="text-xl">📊</span>,
  },
  {
    title: "Experience",
    description: "My learning journey, internships, and hands-on exposure.",
    href: "/experience",
    icon: <span className="text-xl">💼</span>,
  },
];

export default Home;
