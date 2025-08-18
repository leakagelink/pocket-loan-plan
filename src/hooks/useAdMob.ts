
import { useState, useEffect } from 'react';
import { adMobService } from '@/services/admobService';

export const useAdMob = () => {
  const [isAdMobReady, setIsAdMobReady] = useState(false);

  useEffect(() => {
    const initializeAdMob = async () => {
      try {
        console.log('useAdMob: Initializing AdMob service...');
        await adMobService.initialize();
        setIsAdMobReady(adMobService.isReady());
        console.log('useAdMob: AdMob ready status:', adMobService.isReady());
      } catch (error) {
        console.error('useAdMob: Failed to initialize:', error);
        setIsAdMobReady(false);
      }
    };

    initializeAdMob();
  }, []);

  const showInterstitialAd = async () => {
    try {
      if (isAdMobReady) {
        console.log('useAdMob: Showing interstitial ad...');
        await adMobService.showInterstitialAd();
      } else {
        console.log('useAdMob: AdMob not ready, skipping ad');
      }
    } catch (error) {
      console.error('useAdMob: Error showing interstitial ad:', error);
    }
  };

  return {
    isAdMobReady,
    showInterstitialAd,
    // Safe defaults for disabled features
    showBannerAd: () => console.log('Banner ads disabled'),
    hideBannerAd: () => console.log('Banner ads disabled'),
    showRewardedAd: async (): Promise<boolean> => {
      console.log('Rewarded ads disabled');
      return false;
    }
  };
};
