
import { Calculator, TrendingUp, CreditCard, BookOpen, Shield, Banknote } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import EligibilityCard from "@/components/EligibilityCard";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

const quickActions = [
  {
    id: "calculator",
    title: "EMI Calculator",
    description: "Calculate your loan EMI instantly",
    icon: Calculator,
    color: "bg-primary text-primary-foreground",
  },
  {
    id: "compare",
    title: "Compare Loans",
    description: "Find the best loan offers",
    icon: TrendingUp,
    color: "bg-success text-success-foreground",
  },
  {
    id: "credit",
    title: "Credit Tips",
    description: "Improve your credit score",
    icon: CreditCard,
    color: "bg-purple-500 text-white",
  },
  {
    id: "learn",
    title: "Learn",
    description: "Financial education articles",
    icon: BookOpen,
    color: "bg-orange-500 text-white",
  },
];

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  return (
    <div className="p-4 space-y-6 animate-fade-up">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-foreground">SmartLoan Advisor</h1>
        <p className="text-muted-foreground">Your trusted financial planning companion</p>
      </div>

      <DisclaimerBanner />

      {/* Hero Card */}
      <Card className="gradient-card border-0 shadow-lg">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
            <Shield className="text-primary-foreground" size={24} />
          </div>
          <CardTitle className="text-xl">Financial Clarity, Simplified</CardTitle>
          <CardDescription>
            Make informed decisions with our comprehensive loan planning tools
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Eligibility Check */}
      <EligibilityCard />

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Quick Tools</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.id}
                className="cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 border-border/50"
                onClick={() => onNavigate(action.id)}
              >
                <CardContent className="p-4">
                  <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Coming Soon */}
      <Card className="border-dashed border-2 border-muted-foreground/20">
        <CardContent className="p-4 text-center">
          <Banknote className="mx-auto text-muted-foreground mb-2" size={32} />
          <h3 className="font-semibold text-sm mb-1">Coming Soon</h3>
          <p className="text-xs text-muted-foreground">Bank Directory & Document Storage</p>
        </CardContent>
      </Card>

      {/* Bottom spacing for navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default HomeScreen;
