
import { useState } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import HomeScreen from "@/components/screens/HomeScreen";
import CalculatorScreen from "@/components/screens/CalculatorScreen";
import CompareScreen from "@/components/screens/CompareScreen";
import CreditScreen from "@/components/screens/CreditScreen";
import LearnScreen from "@/components/screens/LearnScreen";
import ComplianceModal from "@/components/ComplianceModal";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleNavigate = (screen: string) => {
    setActiveTab(screen);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={handleNavigate} />;
      case "calculator":
        return <CalculatorScreen />;
      case "compare":
        return <CompareScreen />;
      case "credit":
        return <CreditScreen />;
      case "learn":
        return <LearnScreen />;
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ComplianceModal />
      <main className="pb-16">
        {renderScreen()}
      </main>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
