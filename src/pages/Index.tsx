
import { useState, useEffect } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import HeaderBar from "@/components/HeaderBar";
import HomeScreen from "@/components/screens/HomeScreen";
import CalculatorScreen from "@/components/screens/CalculatorScreen";
import CompareScreen from "@/components/screens/CompareScreen";
import CreditScreen from "@/components/screens/CreditScreen";
import LearnScreen from "@/components/screens/LearnScreen";
import ComplianceModal from "@/components/ComplianceModal";
import { useAdMob } from "@/hooks/useAdMob";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { showBannerAd, showInterstitialAd, isAdMobReady } = useAdMob();

  // Show banner ad when app loads
  useEffect(() => {
    if (isAdMobReady) {
      setTimeout(() => {
        showBannerAd();
      }, 2000); // Show banner after 2 seconds
    }
  }, [isAdMobReady, showBannerAd]);

  const handleNavigate = (screen: string) => {
    // Show interstitial ad when navigating to Compare screen
    if (screen === "compare" && isAdMobReady) {
      showInterstitialAd();
    }
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
