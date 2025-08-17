
// AdMob completely disabled - hook returns safe defaults
export const useAdMob = () => {
  console.log('AdMob completely disabled - useAdMob hook called but no functionality active');

  return {
    isAdMobReady: false,
    showBannerAd: () => console.log('AdMob disabled - no banner ads'),
    hideBannerAd: () => console.log('AdMob disabled - no banner ads'),
    showInterstitialAd: () => console.log('AdMob disabled - no interstitial ads'),
    showRewardedAd: async (): Promise<boolean> => {
      console.log('AdMob disabled - no rewarded ads');
      return false;
    }
  };
};
