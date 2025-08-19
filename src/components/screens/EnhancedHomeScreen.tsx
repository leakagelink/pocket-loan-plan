
import { Calculator, TrendingUp, CreditCard, BookOpen, Shield, Banknote, Zap, Users, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import EligibilityCard from "@/components/EligibilityCard";
import { useAdMob } from "@/hooks/useAdMob";

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
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: "compare",
    title: "Compare Loans",
    description: "Find the best loan offers",
    icon: TrendingUp,
    color: "bg-success text-success-foreground",
    gradient: "from-green-500 to-green-600"
  },
  {
    id: "credit",
    title: "Credit Tips",
    description: "Improve your credit score",
    icon: CreditCard,
    color: "bg-purple-500 text-white",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    id: "learn",
    title: "Learn",
    description: "Financial education articles",
    icon: BookOpen,
    color: "bg-orange-500 text-white",
    gradient: "from-orange-500 to-orange-600"
  },
];

const features = [
  { icon: Zap, title: "Instant Results", desc: "Get calculations in seconds" },
  { icon: Users, title: "Expert Guidance", desc: "Professional financial advice" },
  { icon: Award, title: "Trusted Platform", desc: "Secure and reliable service" },
];

const EnhancedHomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const { showRewardedAd, isAdMobReady } = useAdMob();

  const handleRewardedAdClick = async () => {
    if (isAdMobReady) {
      try {
        console.log('User clicked for rewarded ad...');
        await showRewardedAd();
      } catch (error) {
        console.error('Rewarded ad failed:', error);
      }
    } else {
      console.log('AdMob not ready for rewarded ad');
    }
  };

  return (
    <div className="p-4 space-y-6 animate-fade-up">
      {/* Enhanced Header */}
      <div className="text-center space-y-3">
        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
          <Shield className="text-primary-foreground" size={32} />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          SmartLoan Advisor
        </h1>
        <p className="text-muted-foreground text-lg">Your trusted financial planning companion</p>
      </div>

      <DisclaimerBanner />

      {/* Enhanced Hero Card with Gradient */}
      <Card className="relative overflow-hidden border-0 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <CardHeader className="text-center pb-2 relative z-10">
          <CardTitle className="text-2xl mb-2">Financial Clarity, Simplified</CardTitle>
          <CardDescription className="text-base">
            Make informed decisions with our comprehensive loan planning tools
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-6 relative z-10">
          <div className="flex justify-center gap-6 mt-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-sm">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Eligibility Check */}
      <EligibilityCard />

      {/* Enhanced Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Quick Tools</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.id}
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-border/50 relative overflow-hidden group"
                onClick={() => onNavigate(action.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="p-4 relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-3 shadow-md`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Rewarded Ad Section */}
      {isAdMobReady && (
        <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-4 text-center">
            <Award className="mx-auto text-amber-600 mb-2" size={24} />
            <h3 className="font-semibold text-sm mb-2 text-amber-900">Get Premium Tips</h3>
            <p className="text-xs text-amber-700 mb-3">
              Watch a short video to unlock exclusive financial tips
            </p>
            <Button 
              onClick={handleRewardedAdClick}
              size="sm"
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Watch & Learn
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Enhanced Coming Soon */}
      <Card className="border-dashed border-2 border-muted-foreground/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-muted/30 to-transparent opacity-50" />
        <CardContent className="p-6 text-center relative z-10">
          <div className="w-16 h-16 bg-muted/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <Banknote className="text-muted-foreground" size={32} />
          </div>
          <h3 className="font-semibold text-base mb-2">Coming Soon</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Bank Directory & Document Storage
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </CardContent>
      </Card>

      {/* Bottom spacing for navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default EnhancedHomeScreen;
