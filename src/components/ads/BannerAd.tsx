import { useEffect } from 'react';
import { useAdMob } from '@/hooks/useAdMob';

const BannerAd = () => {
  const { isAdMobReady, showBannerAd, hideBannerAd } = useAdMob();

  useEffect(() => {
    console.log('BannerAd: mount, ready =', isAdMobReady);
    if (isAdMobReady) {
      showBannerAd();
    }

    return () => {
      hideBannerAd();
    };
    // We intentionally avoid adding show/hide to deps to keep mount/unmount behavior
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdMobReady]);

  return null;
};

export default BannerAd;
