
import { useState, useEffect, useCallback } from 'react';
import { adMobService } from '@/services/admobService';

export const useAdMob = () => {
  const [isAdMobReady, setIsAdMobReady] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initializeAdMob = async () => {
      try {
        console.log('useAdMob: Starting AdMob initialization...');
        setIsInitializing(true);
        
        await adMobService.initialize();
        const ready = adMobService.isReady();
        
        setIsAdMobReady(ready);
        console.log('useAdMob: AdMob initialization completed, ready:', ready);
      } catch (error) {
        console.error('useAdMob: Initialization failed:', error);
        setIsAdMobReady(false);
      } finally {
        setIsInitializing(false);
      }
    };

    initializeAdMob();
  }, []);

  const showInterstitialAd = useCallback(async () => {
    try {
      console.log('useAdMob: Attempting to show interstitial ad...');
      await adMobService.showInterstitialAd();
    } catch (error) {
      console.error('useAdMob: Interstitial display failed:', error);
    }
  }, []);

  const showBannerAd = useCallback(async () => {
    try {
      console.log('useAdMob: Attempting to show banner ad...');
      await adMobService.showBannerAd();
    } catch (error) {
      console.error('useAdMob: Banner display failed:', error);
    }
  }, []);

  const hideBannerAd = useCallback(async () => {
    try {
      await adMobService.hideBannerAd();
    } catch (error) {
      console.error('useAdMob: Hide banner failed:', error);
    }
  }, []);

  const showRewardedAd = useCallback(async () => {
    try {
      console.log('useAdMob: Attempting to show rewarded ad...');
      await adMobService.showRewardedAd();
    } catch (error) {
      console.error('useAdMob: Rewarded display failed:', error);
    }
  }, []);

  return {
    isAdMobReady,
    isInitializing,
    showInterstitialAd,
    showBannerAd,
    hideBannerAd,
    showRewardedAd,
  };
};
