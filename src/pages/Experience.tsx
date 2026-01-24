import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@/components/SectionHeading";

const Experience = () => {
  return (
    <PageWrapper>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Experience"
            subtitle="What I worked on, the problems I focused on, and the impact it created"
          />

          <div className="max-w-6xl mx-auto mt-24 space-y-28">

            {/* ================= 01 HEAD OF CS ================= */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 experience-block">
              <span className="absolute -left-10 -top-10 text-7xl font-bold text-muted-foreground/10">
                01
              </span>

              <div className="lg:col-span-1">
                <h3 className="font-serif text-3xl lg:text-4xl font-semibold leading-tight">
                  Head of<br />Computer Science
                </h3>
                <p className="text-primary mt-3">
                  AJA Forum For Physics
                </p>
                <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Present
                </span>
              </div>

              <div className="lg:col-span-2 relative pl-8">
                <div className="absolute left-0 top-2 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />

                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Core Problem
                </p>
                <p className="text-muted-foreground mb-6">
                  Helping non-CS students understand programming logic without fear or overload.
                </p>

                <p className="text-lg italic text-foreground/80 mb-6">
                  “Teaching made me realize that clarity matters more than complexity.”
                </p>

                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Selected Work
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>→ Designed a Python fundamentals curriculum from scratch</li>
                  <li>→ Mentored students to approach problems computationally</li>
                  <li>→ Built and currently maintaining the institute website</li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  <span className="tech-chip">Python</span>
                  <span className="tech-chip">HTML</span>
                  <span className="tech-chip">CSS</span>
                  <span className="tech-chip">Teaching</span>
                </div>
              </div>
            </div>

            {/* ================= 02 NEED IT ================= */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 experience-block">
              <span className="absolute -left-10 -top-10 text-7xl font-bold text-muted-foreground/10">
                02
              </span>

              <div className="lg:col-span-1">
                <h3 className="font-serif text-3xl lg:text-4xl font-semibold leading-tight">
                  AI & Data<br />Marketing Intern
                </h3>
                <p className="text-primary mt-3">
                  Need It International
                </p>
                <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Present
                </span>
              </div>

              <div className="lg:col-span-2 relative pl-8">
                <div className="absolute left-0 top-2 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />

                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Core Problem
                </p>
                <p className="text-muted-foreground mb-6">
                  Turning scattered marketing data into insights teams could actually act on.
                </p>

                <p className="text-lg italic text-foreground/80 mb-6">
                  “Data only matters when it changes decisions.”
                </p>

                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Selected Projects
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>→ Campaign performance analysis & reporting</li>
                  <li>→ User behavior analysis for better targeting</li>
                  <li>→ AI-assisted marketing optimization experiments</li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  <span className="tech-chip">Python</span>
                  <span className="tech-chip">Pandas</span>
                  <span className="tech-chip">Data Analysis</span>
                  <span className="tech-chip">AI Tools</span>
                </div>
              </div>
            </div>

            {/* ================= 03 INTERNPE ================= */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 experience-block">
              <span className="absolute -left-10 -top-10 text-7xl font-bold text-muted-foreground/10">
                03
              </span>

              <div className="lg:col-span-1">
                <h3 className="font-serif text-3xl lg:text-4xl font-semibold">
                  AI Intern
                </h3>
                <p className="text-primary mt-3">
                  InternPe
                </p>
              </div>

              <div className="lg:col-span-2 relative pl-8">
                <div className="absolute left-0 top-2 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />

                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Key Projects
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>→ IPL Score Prediction using Machine Learning</li>
                  <li>→ Diabetes Prediction System (Supervised Learning)</li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  <span className="tech-chip">Scikit-learn</span>
                  <span className="tech-chip">ML</span>
                  <span className="tech-chip">Data Preprocessing</span>
                </div>
              </div>
            </div>

            {/* ================= 04 CORIZO ================= */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 experience-block">
              <span className="absolute -left-10 -top-10 text-7xl font-bold text-muted-foreground/10">
                04
              </span>

              <div className="lg:col-span-1">
                <h3 className="font-serif text-3xl lg:text-4xl font-semibold">
                  AI Intern
                </h3>
                <p className="text-primary mt-3">
                  Corizo
                </p>
              </div>

              <div className="lg:col-span-2 relative pl-8">
                <div className="absolute left-0 top-2 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />

                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Key Projects
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>→ Spotify Data Analysis using Machine Learning</li>
                  <li>→ Cardiovascular Disease Prediction System</li>
                </ul>

                <div className="flex flex-wrap gap-2">
                  <span className="tech-chip">Python</span>
                  <span className="tech-chip">ML</span>
                  <span className="tech-chip">Data Analysis</span>
                </div>
              </div>
            </div>

            {/* ================= PHILOSOPHY ================= */}
            <div className="pt-20 border-t">
              <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                I’m not interested in building models that look impressive on paper.
                I care about clarity — for users, teams, and decisions.
                If my work doesn’t change how someone thinks or acts, it’s unfinished.
              </p>
            </div>

          </div>
        </div>
      </section>

      <
        style jsx>{`
        .experience-block {
          transition: transform 0.3s ease;
        }
        .experience-block:hover {
          transform: translateY(-4px);
        }
        .tech-chip {
          padding: 4px 10px;
          font-size: 12px;
          border-radius: 9999px;
          background: hsl(var(--muted));
        }
      `}</style>
    </PageWrapper>
  );
};

export default Experience;
