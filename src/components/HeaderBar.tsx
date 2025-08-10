
import { Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <header className="bg-nav-background border-b border-nav-border sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
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

        {/* Mobile Navigation Menu */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Bell className="h-4 w-4" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navigationItems.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={
                    activeTab === item.id
                      ? "bg-accent text-accent-foreground font-medium"
                      : ""
                  }
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
