
// AdMob service completely disabled and safe
export class AdMobService {
  private static instance: AdMobService;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): AdMobService {
    if (!AdMobService.instance) {
      AdMobService.instance = new AdMobService();
    }
    return AdMobService.instance;
  }

  async initialize(): Promise<void> {
    console.log('AdMob service completely disabled');
    this.isInitialized = false;
  }

  async showBannerAd(): Promise<void> {
    console.log('AdMob disabled - no banner ads');
  }

  async hideBannerAd(): Promise<void> {
    console.log('AdMob disabled - no banner ads');
  }

  async showInterstitialAd(): Promise<void> {
    console.log('AdMob disabled - no interstitial ads');
  }

  async showRewardedAd(): Promise<boolean> {
    console.log('AdMob disabled - no rewarded ads');
    return false;
  }
}

export const adMobService = AdMobService.getInstance();
