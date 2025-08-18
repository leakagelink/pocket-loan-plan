
import { useState, useEffect } from 'react';
import { adMobService } from '@/services/admobService';

export const useAdMob = () => {
  const [isAdMobReady, setIsAdMobReady] = useState(false);

  useEffect(() => {
    const initializeAdMob = async () => {
      try {
        // Safe initialization with timeout
        const initPromise = adMobService.initialize();
        const timeoutPromise = new Promise((resolve) => 
          setTimeout(() => resolve(null), 5000)
        );

        await Promise.race([initPromise, timeoutPromise]);
        
        setIsAdMobReady(adMobService.isReady());
        console.log('useAdMob: Safe initialization complete');
      } catch (error) {
        console.log('useAdMob: Safe initialization failed:', error);
        setIsAdMobReady(false);
        // Continue without ads - no crash
      }
    };

    initializeAdMob();
  }, []);

  const showInterstitialAd = async () => {
    try {
      if (isAdMobReady && adMobService.canShowAds()) {
        console.log('useAdMob: Showing ad safely...');
        await adMobService.showInterstitialAd();
      } else {
        console.log('useAdMob: Ads not available, continuing normally');
      }
    } catch (error) {
      console.log('useAdMob: Ad error handled safely:', error);
      // Never crash the app
    }
  };

  return {
    isAdMobReady,
    showInterstitialAd,
    // Safe defaults that never crash
    showBannerAd: () => console.log('Banner ads disabled for safety'),
    hideBannerAd: () => console.log('Banner ads disabled for safety'),
    showRewardedAd: async (): Promise<boolean> => {
      console.log('Rewarded ads disabled for safety');
      return false;
    }
  };
};
