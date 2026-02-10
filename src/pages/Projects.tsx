import { useState, useEffect } from "react";
import { X, Github } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@/components/SectionHeading";

/* ================= TAG COLORS ================= */

const tagColors: Record<string, string> = {
  "Power BI": "bg-yellow-100 text-yellow-800",
  "Tableau": "bg-blue-100 text-blue-800",
  "Excel": "bg-green-100 text-green-800",
  "DAX": "bg-purple-100 text-purple-800",
  "Sales Analytics": "bg-indigo-100 text-indigo-800",
  "HR Analytics": "bg-pink-100 text-pink-800",
  "Pivot Tables": "bg-emerald-100 text-emerald-800",
  "Deep Learning": "bg-red-100 text-red-800",
  "CNN": "bg-orange-100 text-orange-800",
  "TensorFlow": "bg-amber-100 text-amber-800",
  "MERN": "bg-teal-100 text-teal-800",
  "MongoDB": "bg-green-100 text-green-800",
  "React": "bg-cyan-100 text-cyan-800",
  "Web Development": "bg-sky-100 text-sky-800",
  "UI/UX": "bg-fuchsia-100 text-fuchsia-800",
};

/* ================= DATA ================= */

const projects = [
  // DASHBOARDS
  {
    category: "Dashboards",
    title: "BlinkIt Analytics Dashboard",
    description:
      "Interactive Power BI dashboard analysing product performance and customer demand patterns.",
    image: "/projects/dashboards/blinkitt.jpg",
    tags: ["Power BI", "DAX", "Data Visualization"],
    github: "https://github.com/yourusername/blinkit-dashboard",
  },
  {
    category: "Dashboards",
    title: "HR Sales Analysis",
    description:
      "Analysed employee performance, attrition, and workforce trends using interactive KPIs and drill-through insights.",
    image: "/projects/dashboards/hrr.png",
    tags: ["Power BI", "HR Analytics"],
    github: "https://github.com/yourusername/hr-sales-analysis",
  },
  {
    category: "Dashboards",
    title: "EV Vehicle Sales Analysis",
    description:
      "Studied EV sales and adoption trends to identify regions driving electric vehicle demand.",
    image: "/projects/dashboards/ev_vehicle.jpg",
    tags: ["Tableau", "Sales Analytics"],
    github: "https://github.com/yourusername/ev-sales",
  },
  {
    category: "Dashboards",
    title: "Sales Dashboard",
    description:
      "Interactive dashboard visualizing sales performance metrics and KPIs.",
    image: "/projects/dashboards/excel.jpg",
    tags: ["Excel", "Sales Analytics", "Pivot Tables"],
    github: "https://github.com/yourusername/sales-dashboard",
  },
  {
    category: "Dashboards",
    title: "Crime Safety Analysis Dashboard",
    description: "Interactive dashboard analyzing crime patterns and safety metrics.",
    image: "/projects/dashboards/crimee.jpg",
    tags: ["Power BI", "Data Visualization"],
    github: "https://github.com/yourusername/sales-dashboards"
  },
  {
    category: "Dashboards",
    title: "Swiggy Dataset analysis Dashboard",
    description: "Excel-based analytics dashboard built using Pivot Tables, Power Query, and advanced formulas to analyze Swiggy order trends, restaurant performance, delivery time, and revenue patterns for data-driven insights.",
    image: "/projects/dashboards/swiggy.png",
    tags: ["Excel", "Sales Analytics", "Pivot Tables"],
    github: "https://github.com/yourusername/swiggy-dashboard",
  },
  {
    category: "Dashboards",
    title: "Pizza Dataset Analysis Dashboard",
    description:
      "Interactive Power BI dashboard analyzing pizza sales performance, peak order hours, top categories, revenue trends, and customer purchase behavior using DAX measures and dynamic slicers.",
    image: "/projects/dashboards/pizza.png",
    tags: ["Power BI", "DAX", "Sales Analytics"],
    github: "https://github.com/yourusername/pizza-powerbi",
  },
  {
    category: "Dashboards",
    title: "Social Media Addiction Analysis",
    description: "Power BI analytics dashboard studying screen time, platform usage, age-wise addiction patterns, productivity impact, and mental health indicators with interactive KPIs and drill-through insights.",
    image: "/projects/dashboards/social media.png",
    tags: ["Power BI", "Data Visualization"],
    github: "https://github.com/yourusername/social-addiction-powerbi",
  },

  // ML
  {
    category: "ML",
    title: "Blood Cancer Detection (CNN)",
    description:
      "Deep learning CNN model achieving 92% accuracy for blood cancer detection using medical image data.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIk_FjS-23wqiKHH0-eQLl79Y_Vr9h_n8AQ&s",
    tags: ["Deep Learning", "CNN", "TensorFlow"],
    github: "https://github.com/yourusername/blood-cancer-cnn",
  },

  // WEB
  {
    category: "Web",
    title: "NishkaamKrishi – MERN Platform",
    description:
      "Full-stack MERN platform designed for sustainable farming and farmer resources.",
    image: "/projects/web/nishkaam.jpeg",
    tags: ["MERN", "MongoDB", "React"],
    github: "https://github.com/yourusername/nishkaamkrishi",
  },
  {
    category: "Web",
    title: "Catering Services Website",
    description:
      "Responsive website designed for catering services with clean UI and layout.",
    image: "/projects/web/shree.png",
    tags: ["Web Development", "UI/UX"],
    github: "https://github.com/yourusername/catering-website",
  },

  // CANVA
  {
    category: "Canva",
    title: "Food & Café Creatives",
    description: "Canva-based promotional designs created for food and café branding.",
    image: "/projects/canva/coffe.jpg",
  },
  {
    category: "Canva",
    title: "Brand Posters & Flyers",
    description: "Marketing posters and flyers designed using Canva.",
    image: "/projects/canva/burgerr.png",
  },
  {
    category: "Canva",
    title: "Event & Personal Branding Designs",
    description: "Visual creatives designed for events and personal branding.",
    image: "/projects/canva/catering.png",
  },
  {
    category: "Canva",
    title: "My Personal Design",
    description: "Creative personal designs made using Canva.",
    image: "/projects/canva/version.png",
  },
  {
    category: "Canva",
    title: "Data-Themed Design",
    description: "Creative data-themed visual design.",
    image: "/projects/canva/DATA.png",
  },
  {
    category: "Canva",
    title: "T-Shirt Design",
    description: "Creative T-shirt design concepts made using Canva.",
    image: "/projects/canva/t-shirtt.png",
  },
];

/* ================= COMPONENT ================= */

const categories = ["All", "Dashboards", "ML", "Web", "Canva"];

const Projects = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "auto";
  }, [activeImage]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <PageWrapper>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">

          <SectionHeading
            title="Projects & Work"
            subtitle="Data analytics, machine learning, web development, and creative designs"
          />

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition
                  ${activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.title}
                onClick={() => setActiveImage(project.image)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveImage(project.image)}
                className="group card-elevated overflow-hidden cursor-zoom-in opacity-0 animate-fade-in-up focus:outline-none"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs font-medium rounded-full
                            ${tagColors[tag] ?? "bg-secondary text-secondary-foreground"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 text-white"
            >
              <X size={28} />
            </button>

            <img
              src={activeImage}
              alt="Project preview"
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default Projects;
