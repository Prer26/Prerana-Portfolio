import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@/components/SectionHeading";

/* ================= DATA ================= */
const dataSkills = [
  {
    name: "Power BI",
    level: "Advanced",
    icon: "📊",
    points: [
      "Interactive dashboards & reports",
      "Data modeling and relationships",
      "Basic DAX measures",
      "Insight-driven storytelling",
    ],
  },
  {
    name: "Tableau",
    level: "Advanced",
    icon: "📈",
    points: [
      "Calculated fields",
      "Filters and parameters",
      "Dashboard design",
      "Storytelling with visuals",
    ],
  },
  {
    name: "Excel",
    level: "Intermediate",
    icon: "📋",
    points: [
      "Formulas and functions",
      "Pivot tables",
      "Data cleaning",
      "Quick analysis & prototyping",
    ],
  },
  {
    name: "SQL",
    level: "Basics",
    icon: "🗃️",
    points: [
      "CRUD operations",
      "Joins and subqueries",
      "Filtering and aggregation",
    ],
  },
  {
    name: "R language",
    level:"Basics",
    icon: "📐",
    points: [
      "Statistical analysis",
      "Data visualization with ggplot2",
      "Basic data manipulation with dplyr",
    ],    
  },
];

/* ================= ML ================= */
const mlSkills = [
  {
    name: "Python",
    level: "Advanced",
    icon: "🐍",
    points: [
      "Data analysis and scripting",
      "Building ML workflows",
      "Clean, readable, reusable code",
      "Model experimentation & evaluation",
    ],
  },
  {
    name: "Machine Learning",
    level: "Intermediate",
    icon: "🤖",
    points: [
      "Supervised & unsupervised learning",
      "Feature engineering basics",
      "Model evaluation techniques",
      "Overfitting & underfitting concepts",
    ],
  },
  {
    name: "Prompt Engineering",
    level: "Intermediate",
    icon: "🧠",
    points: [
      "Structured prompting",
      "Context-aware prompts",
      "Improving AI response quality",
    ],
  },
];

/* ================= PYTHON LIBRARIES ================= */
const pythonLibraries = [
  {
    name: "NumPy",
    points: [
      "Array operations",
      "Numerical computations",
      "Performance-oriented math",
    ],
  },
  {
    name: "Pandas",
    points: [
      "Data cleaning & manipulation",
      "DataFrames and Series",
      "Exploratory data analysis",
    ],
  },
  {
    name: "Matplotlib",
    points: [
      "Custom plots",
      "Visualizing trends",
      "Basic chart styling",
    ],
  },
  {
    name: "Seaborn",
    points: [
      "Statistical visualizations",
      "Distribution and relationship plots",
      "Cleaner visual defaults",
    ],
  },
  {
    name: "Scikit-learn",
    points: [
      "ML models & pipelines",
      "Train-test split & evaluation",
      "Model tuning basics",
    ],
  },
];

/* ================= WEB ================= */
const webSkills = [
  {
    name: "Flask",
    level: "Basics",
    icon: "🌶️",
    points: [
      "Building REST APIs",
      "Connecting ML models to backend",
      "Routing and request handling",
    ],
  },
  {
    name: "Web Technologies",
    level: "Basics",
    icon: "🌐",
    points: [
      "HTML & CSS",
      "Basic JavaScript",
      "Responsive layouts",
    ],
  },
  {
    name: "MongoDB",
    level: "Advanced",
    icon: "🛢️",
    points: [
      "Document-based NoSQL storage",
      "Schema design",
      "Queries and aggregation",
      "Backend & ML project storage",
    ],
  },
];

/* ================= TOOLS ================= */
const toolSkills = [
  {
    name: "C / C++",
    level: "Intermediate",
    icon: "💻",
    points: [
      "Loops, pointers, conditionals",
      "Logic building",
      "Strong programming fundamentals",
    ],
  },
  {
    name: "Canva",
    level: "Intermediate",
    icon: "🎨",
    points: [
      "Visual communication for data insights",
      "Posters and presentations",
      "Clean & minimal design",
    ],
  },
];

/* ================= CURRENTLY LEARNING ================= */
const learning = [
  "Deep Learning with TensorFlow",
  "Deep Learning with PyTorch",
  "Cloud technologies (deployment & scaling)",
];

/* ================= REFLECTIONS ================= */
const reflections = [
  {
    title: "What Excel Means to Me",
    content:
      "Excel is where my data journey began. It taught me how to think logically about data—structuring information, writing formulas, and building models from scratch. Even today, it’s my go-to tool for quick analysis and validating ideas.",
  },
  {
    title: "What Power BI Means to Me",
    content:
      "Power BI shaped how I think about storytelling. It’s not just about visuals—it’s about guiding people toward insights. Every dashboard I build is designed to answer questions, not just display numbers.",
  },
  {
    title: "What Data Analytics Means to Me",
    content:
      "Data analytics is about asking better questions. I see it as a bridge between raw data and real decisions. Translating numbers into clarity is a responsibility I take seriously.",
  },
  {
    title: "Why Machine Learning Fascinates Me",
    content:
      "Machine Learning excites me because it sits at the intersection of logic, data, and curiosity. Watching raw data turn into predictions feels less like coding rules and more like teaching systems how to learn.",
  },
];

const levelColors = {
  Beginner: "bg-secondary text-secondary-foreground",
  Intermediate: "bg-primary/10 text-primary",
  Advanced: "gradient-bg text-primary-foreground",
};

/* ================= GENERIC GRID ================= */
const SkillGrid = ({ skills }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {skills.map((skill, index) => (
      <div
        key={skill.name}
        className="card-elevated p-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        <div className="flex items-start justify-between mb-4">
          {skill.icon && (
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-2xl">
              {skill.icon}
            </div>
          )}
          {skill.level && (
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                levelColors[skill.level]
              }`}
            >
              {skill.level}
            </span>
          )}
        </div>

        <h3 className="font-serif text-xl font-semibold mb-3">
          {skill.name}
        </h3>

        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {skill.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <PageWrapper>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">

          <SectionHeading
            title="Skills & Tools"
            subtitle="What I know, how I use it, and how I think"
          />

          <h2 className="font-serif text-2xl font-semibold mb-6">
            Data Analytics
          </h2>
          <SkillGrid skills={dataSkills} />

          <h2 className="font-serif text-2xl font-semibold mt-16 mb-6">
            Machine Learning & AI
          </h2>
          <SkillGrid skills={mlSkills} />

          <h2 className="font-serif text-2xl font-semibold mt-16 mb-6">
            Python Libraries
          </h2>
          <SkillGrid skills={pythonLibraries} />

          <h2 className="font-serif text-2xl font-semibold mt-16 mb-6">
            Web & Backend
          </h2>
          <SkillGrid skills={webSkills} />

          <h2 className="font-serif text-2xl font-semibold mt-16 mb-6">
            Tools & Foundations
          </h2>
          <SkillGrid skills={toolSkills} />

          {/* CURRENTLY LEARNING */}
          <div className="mt-24 max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">
              Currently Learning
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {learning.map((item) => (
                <li key={item}>🚀 {item}</li>
              ))}
            </ul>
          </div>

          {/* REFLECTIONS */}
          <div className="mt-28 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-10 text-center">
              Beyond the Tools
            </h2>

            <div className="space-y-10">
              {reflections.map((item, index) => (
                <div
                  key={item.title}
                  className="relative pl-6 border-l-4 border-primary/30 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;
