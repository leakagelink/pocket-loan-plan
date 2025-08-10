
import { useEffect, useState } from 'react';
import { adMobService } from '@/services/admobService';
import { BannerAdPosition } from '@capacitor-community/admob';

export const useAdMob = () => {
  const [isAdMobReady, setIsAdMobReady] = useState(false);

  useEffect(() => {
    const initializeAdMob = async () => {
      try {
        await adMobService.initialize();
        setIsAdMobReady(true);
      } catch (error) {
        console.error('Failed to initialize AdMob:', error);
      }
    };

    initializeAdMob();
  }, []);

  const showBannerAd = async (position?: BannerAdPosition) => {
    if (isAdMobReady) {
      await adMobService.showBannerAd(position);
    }
  };

  const hideBannerAd = async () => {
    if (isAdMobReady) {
      await adMobService.hideBannerAd();
    }
  };

  const showInterstitialAd = async () => {
    if (isAdMobReady) {
      await adMobService.showInterstitialAd();
    }
  };

  const showRewardedAd = async (): Promise<boolean> => {
    if (isAdMobReady) {
      return await adMobService.showRewardedAd();
    }
    return false;
  };

  return {
    isAdMobReady,
    showBannerAd,
    hideBannerAd,
    showInterstitialAd,
    showRewardedAd
  };
};
