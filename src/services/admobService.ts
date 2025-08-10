

import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, RewardAdOptions } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdMobService {
  private static instance: AdMobService;
  private isInitialized = false;

  // Test Ad Unit IDs (replace with your real ones)
  private readonly AD_UNITS = {
    banner: 'ca-app-pub-3940256099942544/6300978111',
    interstitial: 'ca-app-pub-3940256099942544/1033173712',
    rewarded: 'ca-app-pub-3940256099942544/5224354917'
  };

  private constructor() {}

  static getInstance(): AdMobService {
    if (!AdMobService.instance) {
      AdMobService.instance = new AdMobService();
    }
    return AdMobService.instance;
  }

  async initialize(): Promise<void> {
    if (!Capacitor.isNativePlatform()) {
      console.log('AdMob: Running on web, ads disabled');
      return;
    }

    try {
      await AdMob.initialize({
        testingDevices: ['YOUR_DEVICE_ID_HERE'],
        initializeForTesting: true
      });
      this.isInitialized = true;
      console.log('AdMob initialized successfully');
    } catch (error) {
      console.error('AdMob initialization failed:', error);
    }
  }

  async showBannerAd(position: BannerAdPosition = BannerAdPosition.BOTTOM_CENTER): Promise<void> {
    if (!this.isInitialized || !Capacitor.isNativePlatform()) return;

    const options: BannerAdOptions = {
      adId: this.AD_UNITS.banner,
      adSize: BannerAdSize.BANNER,
      position: position,
      margin: 0,
      isTesting: true
    };

    try {
      await AdMob.showBanner(options);
      console.log('Banner ad shown');
    } catch (error) {
      console.error('Failed to show banner ad:', error);
    }
  }

  async hideBannerAd(): Promise<void> {
    if (!this.isInitialized || !Capacitor.isNativePlatform()) return;

    try {
      await AdMob.hideBanner();
      console.log('Banner ad hidden');
    } catch (error) {
      console.error('Failed to hide banner ad:', error);
    }
  }

  async showInterstitialAd(): Promise<void> {
    if (!this.isInitialized || !Capacitor.isNativePlatform()) return;

    const options = {
      adId: this.AD_UNITS.interstitial,
      isTesting: true
    };

    try {
      await AdMob.prepareInterstitial(options);
      await AdMob.showInterstitial();
      console.log('Interstitial ad shown');
    } catch (error) {
      console.error('Failed to show interstitial ad:', error);
    }
  }

  async showRewardedAd(): Promise<boolean> {
    if (!this.isInitialized || !Capacitor.isNativePlatform()) return false;

    const options: RewardAdOptions = {
      adId: this.AD_UNITS.rewarded,
      isTesting: true
    };

    try {
      await AdMob.prepareRewardVideoAd(options);
      const result = await AdMob.showRewardVideoAd();
      console.log('Rewarded ad result:', result);
      // Check if the ad was watched completely by checking if result exists and has valid data
      return result && Object.keys(result).length > 0;
    } catch (error) {
      console.error('Failed to show rewarded ad:', error);
      return false;
    }
  }
}

export const adMobService = AdMobService.getInstance();

