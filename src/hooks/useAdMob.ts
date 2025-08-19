
import { useState, useEffect, useCallback } from 'react';
import { adMobService } from '@/services/admobService';

export const useAdMob = () => {
  const [isAdMobReady, setIsAdMobReady] = useState(false);

  useEffect(() => {
    const initializeAdMob = async () => {
      try {
        const timeoutPromise = new Promise((resolve) =>
          setTimeout(() => resolve(null), 3000)
        );

        await Promise.race([adMobService.initialize(), timeoutPromise]);
        setIsAdMobReady(adMobService.isReady());
      } catch (error) {
        console.log('useAdMob: Initialization failed safely');
        setIsAdMobReady(false);
      }
    };

    initializeAdMob();
  }, []);

  const showInterstitialAd = useCallback(async () => {
    try {
      if (adMobService.isReady()) {
        await adMobService.showInterstitialAd();
      }
    } catch (error) {
      console.log('useAdMob: Interstitial display failed safely');
    }
  }, []);

  const showBannerAd = useCallback(async () => {
    try {
      if (adMobService.isReady()) {
        await adMobService.showBannerAd();
      }
    } catch (error) {
      console.log('useAdMob: Banner display failed safely');
    }
  }, []);

  const hideBannerAd = useCallback(async () => {
    try {
      await adMobService.hideBannerAd();
    } catch (error) {
      console.log('useAdMob: Hide banner failed safely');
    }
  }, []);

  const showAppOpenAd = useCallback(async () => {
    try {
      if (adMobService.isReady()) {
        await adMobService.showAppOpenAd();
      }
    } catch (error) {
      console.log('useAdMob: AppOpen display failed safely');
    }
  }, []);

  return {
    isAdMobReady,
    showInterstitialAd,
    showBannerAd,
    hideBannerAd,
    showAppOpenAd,
  };
};

