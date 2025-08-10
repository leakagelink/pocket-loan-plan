
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderBarProps {
  activeTab: string;
  onNavigate: (screen: string) => void;
}

const HeaderBar = ({ activeTab, onNavigate }: HeaderBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  console.log('HeaderBar rendering, activeTab:', activeTab);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "calculator", label: "Calculator" },
    { id: "compare", label: "Compare" },
    { id: "credit", label: "Credit Tips" },
    { id: "learn", label: "Learn" },
  ];

  return (
    <>
      <header className="bg-nav-background border-b border-nav-border sticky top-0 z-50 pt-safe-top">
        <div className="flex items-center justify-between px-4 py-4 mt-4">
          {/* Logo Section - moved down to avoid mobile header overlap */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/632f3fda-87b9-4146-83e6-3fcaff92c922.png" 
              alt="SmartLoan Advisor" 
              className="w-10 h-10 rounded-lg"
            />
            <h1 className="text-lg font-bold text-foreground hidden sm:block">
              SmartLoan Advisor
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate(item.id)}
                className={
                  activeTab === item.id
                    ? "bg-nav-active text-white"
                    : "text-nav-inactive hover:text-foreground hover:bg-accent"
                }
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Simple version */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-background shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/632f3fda-87b9-4146-83e6-3fcaff92c922.png" 
                  alt="SmartLoan Advisor" 
                  className="w-8 h-8 rounded-lg"
                />
                <h2 className="text-xl font-bold text-foreground">
                  SmartLoan Advisor
                </h2>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ✕
              </Button>
            </div>
            
            <nav className="flex flex-col p-4 space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  size="lg"
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`justify-start text-left h-12 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
            
            <div className="absolute bottom-6 left-4 right-4">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Smart financial planning at your fingertips
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderBar;
