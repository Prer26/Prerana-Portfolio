import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface PageWrapperProps {
  children: ReactNode;
  showNav?: boolean;
}

export function PageWrapper({ children, showNav = true }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-background">
      {showNav && <Navigation />}
      <main className={showNav ? "pt-16 lg:pt-20" : ""}>
        {children}
      </main>
    </div>
  );
}

export default PageWrapper;
