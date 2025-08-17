
// AdMob service completely disabled to prevent crashes
// import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, RewardAdOptions } from '@capacitor-community/admob';
// import { Capacitor } from '@capacitor/core';

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
    console.log('AdMob service disabled - no initialization will occur');
    this.isInitialized = false;
  }

  async showBannerAd(): Promise<void> {
    console.log('AdMob service disabled - showBannerAd called but no action taken');
  }

  async hideBannerAd(): Promise<void> {
    console.log('AdMob service disabled - hideBannerAd called but no action taken');
  }

  async showInterstitialAd(): Promise<void> {
    console.log('AdMob service disabled - showInterstitialAd called but no action taken');
  }

  async showRewardedAd(): Promise<boolean> {
    console.log('AdMob service disabled - showRewardedAd called but no action taken');
    return false;
  }
}

export const adMobService = AdMobService.getInstance();
