
import { useState, useEffect } from 'react';
import { adMobService } from '@/services/admobService';

export const useAdMob = () => {
  const [isAdMobReady, setIsAdMobReady] = useState(false);

  useEffect(() => {
    // Very safe initialization with timeout
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

  const showInterstitialAd = async () => {
    try {
      if (isAdMobReady) {
        await adMobService.showInterstitialAd();
      }
    } catch (error) {
      console.log('useAdMob: Ad display failed safely');
    }
  };

  return {
    isAdMobReady,
    showInterstitialAd,
  };
};
