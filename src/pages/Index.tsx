
import { useState } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import HeaderBar from "@/components/HeaderBar";
import HomeScreen from "@/components/screens/HomeScreen";
import CalculatorScreen from "@/components/screens/CalculatorScreen";
import CompareScreen from "@/components/screens/CompareScreen";
import CreditScreen from "@/components/screens/CreditScreen";
import LearnScreen from "@/components/screens/LearnScreen";
import ComplianceModal from "@/components/ComplianceModal";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  
  console.log('Index component rendering, activeTab:', activeTab);

  const handleNavigate = (screen: string) => {
    console.log('Navigation requested to:', screen);
    setActiveTab(screen);
  };

  const renderScreen = () => {
    console.log('Rendering screen for activeTab:', activeTab);
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
      
      {/* Header Bar */}
      <HeaderBar activeTab={activeTab} onNavigate={handleNavigate} />
      
      {/* Main Content */}
      <main className="pb-16 pt-0">
        {renderScreen()}
      </main>
      
      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
