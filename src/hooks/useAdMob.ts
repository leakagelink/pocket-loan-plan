
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
        console.log('AdMob initialization completed successfully');
      } catch (error) {
        console.error('Failed to initialize AdMob:', error);
        // Don't throw error, just log it and continue
        setIsAdMobReady(false);
      }
    };

    initializeAdMob();
  }, []);

  const showBannerAd = async (position?: BannerAdPosition) => {
    if (isAdMobReady) {
      try {
        await adMobService.showBannerAd(position);
      } catch (error) {
        console.error('Error showing banner ad:', error);
      }
    }
  };

  const hideBannerAd = async () => {
    if (isAdMobReady) {
      try {
        await adMobService.hideBannerAd();
      } catch (error) {
        console.error('Error hiding banner ad:', error);
      }
    }
  };

  const showInterstitialAd = async () => {
    if (isAdMobReady) {
      try {
        await adMobService.showInterstitialAd();
      } catch (error) {
        console.error('Error showing interstitial ad:', error);
      }
    }
  };

  const showRewardedAd = async (): Promise<boolean> => {
    if (isAdMobReady) {
      try {
        return await adMobService.showRewardedAd();
      } catch (error) {
        console.error('Error showing rewarded ad:', error);
        return false;
      }
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
