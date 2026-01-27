import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Check } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@/components/SectionHeading";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageWrapper>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= HEADING ================= */}
          <SectionHeading
            title="Let’s Connect"
            subtitle="Open to internships, freelance projects, and meaningful conversations around data & technology"
            centered
          />

          <div className="max-w-2xl mx-auto mt-14">

            {/* ================= MAIN CTA ================= */}
            <div className="card-elevated p-6 sm:p-8 lg:p-10 text-center mb-12 animate-fade-in">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3">
                Want to work together?
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-md mx-auto">
                If you have a project, an opportunity, or just want to say hello,
                I’d love to hear from you.
              </p>
            </div>

            {/* ================= CONTACT CARDS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">

              {/* EMAIL */}
              <div
                onClick={() => handleCopy("preranaiyengar26@gmail.com")}
                className="
                  card-elevated p-5 flex items-center gap-4 cursor-pointer
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  ring-1 ring-primary/20
                "
              >
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>

                <div className="leading-tight overflow-hidden">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Email
                  </p>

                  <p className="font-medium text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                    preranaiyengar26@gmail.com
                  </p>

                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-green-500" />
                        Copied
                      </>
                    ) : (
                      "Click to copy"
                    )}
                  </p>
                </div>
              </div>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/prerana-26b489295"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  card-elevated p-5 flex items-center gap-4
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                "
              >
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <Linkedin className="w-5 h-5" />
                </div>

                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    LinkedIn
                  </p>
                  <p className="font-medium text-foreground whitespace-nowrap">
                    linkedin.com/in/prerana
                  </p>
                </div>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Prer26?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  card-elevated p-5 flex items-center gap-4
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  sm:col-span-2 sm:max-w-md sm:mx-auto
                "
              >
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <Github className="w-5 h-5" />
                </div>

                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    GitHub
                  </p>
                  <p className="font-medium text-foreground whitespace-nowrap">
                    github.com/Prer26
                  </p>
                </div>
              </a>
            </div>

            {/* ================= FOOTER ================= */}
            <div className="mt-12 text-center text-sm text-muted-foreground space-y-2">
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>
                  Open to internships, freelance & remote opportunities worldwide
                </span>
              </div>

              <p className="italic">
                If you have any questions or would like to collaborate, feel free
                to reach out anytime 🙂
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
