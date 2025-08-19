
import { useEffect, useState } from 'react';
import { useAdMob } from '@/hooks/useAdMob';

const BannerAd = () => {
  const { isAdMobReady, showBannerAd, hideBannerAd, isInitializing } = useAdMob();
  const [bannerShown, setBannerShown] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const attemptBannerShow = async () => {
      if (isAdMobReady && !bannerShown && !isInitializing) {
        try {
          console.log('BannerAd: Attempting to show banner...');
          await showBannerAd();
          setBannerShown(true);
        } catch (error) {
          console.error('BannerAd: Failed to show banner:', error);
        }
      }
    };

    if (isAdMobReady && !isInitializing) {
      // Add a small delay to ensure everything is ready
      timeoutId = setTimeout(attemptBannerShow, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Hide banner when component unmounts
      if (bannerShown) {
        hideBannerAd();
        setBannerShown(false);
      }
    };
  }, [isAdMobReady, isInitializing, showBannerAd, hideBannerAd, bannerShown]);

  // Log the current state for debugging
  useEffect(() => {
    console.log('BannerAd State:', {
      isAdMobReady,
      isInitializing,
      bannerShown
    });
  }, [isAdMobReady, isInitializing, bannerShown]);

  return null;
};

export default BannerAd;
