import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting and has the highest intersectionRatio
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        
        if (intersectingEntries.length > 0) {
          // Sort by intersection ratio and position to get the most visible section
          const mostVisible = intersectingEntries.reduce((prev, current) => {
            if (current.intersectionRatio > prev.intersectionRatio) {
              return current;
            }
            // If intersection ratios are similar, prefer the one higher on the page
            if (Math.abs(current.intersectionRatio - prev.intersectionRatio) < 0.1) {
              return current.boundingClientRect.top < prev.boundingClientRect.top ? current : prev;
            }
            return prev;
          });
          
          setActiveSection(mostVisible.target.id);
        }
      },
      { 
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1.0],
        rootMargin: "-80px 0px -60% 0px"
      }
    );

    navigationItems.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      // Immediately set active section for responsive feedback
      setActiveSection(href.slice(1));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-border" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold gradient-text" data-testid="logo">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`transition-colors ${
                      isActive 
                        ? "text-primary font-semibold" 
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    data-active={isActive}
                    data-testid={`nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-primary"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card rounded-lg mt-2 p-4 shadow-lg" data-testid="mobile-menu">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`transition-colors ${
                      isActive 
                        ? "text-primary font-semibold" 
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    data-active={isActive}
                    data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
