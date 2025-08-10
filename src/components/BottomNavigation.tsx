
import { Calculator, TrendingUp, CreditCard, BookOpen, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "calculator", label: "EMI Calc", icon: Calculator },
  { id: "compare", label: "Compare", icon: TrendingUp },
  { id: "credit", label: "Credit Tips", icon: CreditCard },
  { id: "learn", label: "Learn", icon: BookOpen },
];

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-nav-background border-t border-nav-border shadow-lg">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center p-2 min-w-[60px] transition-colors duration-200",
                isActive ? "text-nav-active" : "text-nav-inactive"
              )}
            >
              <Icon 
                size={20} 
                className={cn(
                  "transition-transform duration-200",
                  isActive ? "scale-110" : "scale-100"
                )} 
              />
              <span className={cn(
                "text-xs mt-1 font-medium",
                isActive ? "text-nav-active" : "text-nav-inactive"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
