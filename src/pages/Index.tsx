
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

  const handleNavigate = (screen: string) => {
    // Always scroll to top when changing screens
    window.scrollTo(0, 0);
    setActiveTab(screen);
  };

  const handleTabChange = (tab: string) => {
    // Always scroll to top when changing tabs
    window.scrollTo(0, 0);
    setActiveTab(tab);
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
      
      {/* Header Bar */}
      <HeaderBar activeTab={activeTab} onNavigate={handleNavigate} />
      
      {/* Main Content with proper top padding */}
      <main className="pb-16 pt-2">
        {renderScreen()}
      </main>
      
      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Index;
