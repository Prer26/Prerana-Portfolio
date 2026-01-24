import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className,
  align = "center" 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 lg:mb-16",
      align === "center" && "text-center",
      className
    )}>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "mt-6 h-1 w-20 gradient-bg rounded-full",
        align === "center" && "mx-auto"
      )} />
    </div>
  );
}

export default SectionHeading;
