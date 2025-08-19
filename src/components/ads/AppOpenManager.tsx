
import { useEffect, useRef } from 'react';
import { useAdMob } from '@/hooks/useAdMob';

const AppOpenManager = () => {
  const { isAdMobReady, showAppOpenAd } = useAdMob();
  const shownOnceRef = useRef(false);

  useEffect(() => {
    if (isAdMobReady && !shownOnceRef.current) {
      shownOnceRef.current = true;
      showAppOpenAd();
    }
  }, [isAdMobReady, showAppOpenAd]);

  return null;
};

export default AppOpenManager;

