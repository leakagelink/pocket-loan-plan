
import { useEffect, useState } from 'react';
// import { adMobService } from '@/services/admobService'; // AdMob service disabled
// import { BannerAdPosition } from '@capacitor-community/admob'; // AdMob disabled

export const useAdMob = () => {
  const [isAdMobReady, setIsAdMobReady] = useState(false);

  useEffect(() => {
    // AdMob initialization completely disabled to prevent crashes
    console.log('AdMob is disabled - no initialization will occur');
    setIsAdMobReady(false);
  }, []);

  const showBannerAd = async () => {
    // AdMob disabled - no banner ads will show
    console.log('AdMob disabled - showBannerAd called but no action taken');
  };

  const hideBannerAd = async () => {
    // AdMob disabled - no banner ads to hide
    console.log('AdMob disabled - hideBannerAd called but no action taken');
  };

  const showInterstitialAd = async () => {
    // AdMob disabled - no interstitial ads will show
    console.log('AdMob disabled - showInterstitialAd called but no action taken');
  };

  const showRewardedAd = async (): Promise<boolean> => {
    // AdMob disabled - no rewarded ads will show
    console.log('AdMob disabled - showRewardedAd called but no action taken');
    return false;
  };

  return {
    isAdMobReady: false, // Always false to prevent any ad-related code execution
    showBannerAd,
    hideBannerAd,
    showInterstitialAd,
    showRewardedAd
  };
};
