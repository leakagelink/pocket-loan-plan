
import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderBarProps {
  activeTab: string;
  onNavigate: (screen: string) => void;
}

const HeaderBar = ({ activeTab, onNavigate }: HeaderBarProps) => {
  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "calculator", label: "Calculator" },
    { id: "compare", label: "Compare" },
    { id: "credit", label: "Credit Tips" },
    { id: "learn", label: "Learn" },
  ];

  return (
    <header className="bg-nav-background border-b border-nav-border sticky top-0 z-50 pt-safe-top">
      <div className="flex items-center justify-between px-4 py-4 mt-2">
        {/* Logo Section - moved down slightly */}
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

        {/* Mobile Navigation and Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Bell className="h-4 w-4" />
          </Button>
          
          {/* Mobile Sidebar */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background">
              <SheetHeader className="text-left pb-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/632f3fda-87b9-4146-83e6-3fcaff92c922.png" 
                    alt="SmartLoan Advisor" 
                    className="w-8 h-8 rounded-lg"
                  />
                  <SheetTitle className="text-xl font-bold text-foreground">
                    SmartLoan Advisor
                  </SheetTitle>
                </div>
              </SheetHeader>
              
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    size="lg"
                    onClick={() => onNavigate(item.id)}
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
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Smart financial planning at your fingertips
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
