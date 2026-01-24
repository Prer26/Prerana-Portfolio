import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Entry = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      {/* Subtle gradient accent in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-accent/5 to-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-xl">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 leading-tight animate-fade-in">
          Are you curious about me?
        </h1>

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            variant="curiosity"
            onClick={() => navigate("/home")}
            className="mt-4"
          >
            Yes, I'm curious
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Entry;
