import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <PageWrapper>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Let's Connect"
            subtitle="I'm always open to discussing new opportunities, collaborations, or just having a conversation about data"
          />

          <div className="max-w-2xl mx-auto">
            {/* Main CTA */}
            <div className="card-elevated p-8 lg:p-10 text-center mb-10 animate-fade-in">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-primary-foreground">
                ✉️
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you have a project in mind, need help with data analysis, 
                or just want to say hello—I'd love to hear from you.
              </p>
              <Button variant="gradient" size="xl" asChild>
                <a href="mailto:hello@example.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </a>
              </Button>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated p-6 flex items-center gap-4 group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:gradient-bg group-hover:text-primary-foreground transition-all duration-300">
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium text-foreground">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-10 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Available for remote work worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const contactMethods = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/yourname",
    href: "https://github.com",
    icon: Github,
  },
];

export default Contact;
