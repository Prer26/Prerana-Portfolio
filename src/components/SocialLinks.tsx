import { Github, Linkedin } from "lucide-react";

type SocialLinksProps = {
  size?: "sm" | "md" | "lg";
};

export const SocialLinks = ({ size = "md" }: SocialLinksProps) => {
  const iconSize =
    size === "sm" ? 18 : size === "lg" ? 26 : 22;

  return (
    <div className="flex gap-6">
      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/prerana-26b489295"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="
          text-muted-foreground
          hover:text-primary
          transition-colors
        "
      >
        <Linkedin size={iconSize} />
      </a>

      {/* GITHUB */}
      <a
        href="https://github.com/Prer26"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="
          text-muted-foreground
          hover:text-primary
          transition-colors
        "
      >
        <Github size={iconSize} />
      </a>
    </div>
  );
};
