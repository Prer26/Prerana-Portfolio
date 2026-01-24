import { ExternalLink, Github } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const projects = [
  // ================= DASHBOARDS =================
  {
    title: "BlinkIt & Netflix Analytics Dashboards",
    description:
      "Interactive Power BI dashboards analyzing product performance and viewer preferences to support data-driven business decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Power BI", "DAX", "Data Visualization"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Global Population Analysis",
    description:
      "Analysed population trends across 200+ countries over 50 years using interactive KPIs and drill-through features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Power BI", "Tableau", "Analytics"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "EV Vehicles Sales Analysis",
    description:
      "Studied EV sales and adoption trends to identify regions driving electric vehicle demand.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    tags: ["Tableau", "Power BI", "Data Analysis"],
    liveUrl: "#",
    repoUrl: "#",
  },

  // ================= ML / DL =================
  {
    title: "Cardiovascular Disease Detection",
    description:
      "Machine learning classification model achieving 87% accuracy for predicting cardiovascular disease.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    tags: ["Python", "Machine Learning", "Classification"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Diabetes Prediction System",
    description:
      "Improved model accuracy from 76% to 88% through EDA and hyperparameter tuning.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    tags: ["Python", "Scikit-learn", "EDA"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "IPL Score Predictor",
    description:
      "Regression-based ML model achieving 85% prediction accuracy using historical match data.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=600&h=400&fit=crop",
    tags: ["Machine Learning", "Regression", "Python"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Spotify Dataset Analysis",
    description:
      "Analysed 10,000+ tracks to uncover listening patterns and user preferences.",
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&h=400&fit=crop",
    tags: ["Python", "Data Analysis", "ML"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Blood Cancer Detection (CNN)",
    description:
      "Deep learning CNN model with 92% accuracy, including a frontend UI for image-based predictions.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    tags: ["Deep Learning", "CNN", "TensorFlow"],
    liveUrl: "#",
    repoUrl: "#",
  },

  // ================= WEB =================
  {
    title: "NishkaamKrishi – MERN Platform",
    description:
      "Full-stack MERN platform for sustainable farming, integrating crop details and farmer resources.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=400&fit=crop",
    tags: ["MERN", "MongoDB", "React", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Catering Services Website",
    description:
      "Responsive MERN-stack website for catering services, locally deployed.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    tags: ["MERN", "Web Development", "UI"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const Projects = () => {
  return (
    <PageWrapper>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Projects"
            subtitle="Real work across data analytics, machine learning, and full-stack development"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group card-elevated overflow-hidden opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="gradient" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
