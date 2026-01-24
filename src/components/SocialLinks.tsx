import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    name: "Portfolio",
    href: "#",
    icon: ExternalLink,
  },
];

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function SocialLinks({ className, size = "md", showLabels = false }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300",
            sizeClasses[size],
            showLabels && "w-auto px-4 gap-2"
          )}
          aria-label={link.name}
        >
          <link.icon className={iconSizes[size]} />
          {showLabels && <span className="text-sm font-medium">{link.name}</span>}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
