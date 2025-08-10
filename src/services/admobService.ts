
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, RewardAdOptions } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdMobService {
  private static instance: AdMobService;
  private isInitialized = false;
  private isInitializing = false;

  // Using Google test ad unit IDs for development to prevent crashes
  private readonly AD_UNITS = {
    banner: 'ca-app-pub-3940256099942544/6300978111', // Google test banner ad unit ID
    interstitial: 'ca-app-pub-3940256099942544/1033173712', // Google test interstitial ad unit ID
    rewarded: 'ca-app-pub-3940256099942544/5224354917', // Google test rewarded ad unit ID
  };

  private constructor() {}

  static getInstance(): AdMobService {
    if (!AdMobService.instance) {
      AdMobService.instance = new AdMobService();
    }
    return AdMobService.instance;
  }

  async initialize(): Promise<void> {
    // Guard against multiple initializations
    if (this.isInitialized || this.isInitializing) {
      console.log('AdMob: Already initialized or initializing');
      return;
    }

    if (!Capacitor.isNativePlatform()) {
      console.log('AdMob: Running on web, ads disabled');
      return;
    }

    this.isInitializing = true;

    try {
      await AdMob.initialize({
        testingDevices: ['YOUR_DEVICE_ID'], // Add your device ID here
        initializeForTesting: true // Use test mode for development
      });
      this.isInitialized = true;
      this.isInitializing = false;
      console.log('AdMob initialized successfully in test mode');
    } catch (error) {
      console.error('AdMob initialization failed:', error);
      this.isInitializing = false;
      // Don't throw error to prevent app crash
    }
  }

  async showBannerAd(position: BannerAdPosition = BannerAdPosition.BOTTOM_CENTER): Promise<void> {
    if (!this.isInitialized || !Capacitor.isNativePlatform()) return;

    const options: BannerAdOptions = {
      adId: this.AD_UNITS.banner,
      adSize: BannerAdSize.BANNER,
      position: position,
      margin: 0,
      isTesting: true // Use test ads for development
    };

    try {
      await AdMob.showBanner(options);
      console.log('Test banner ad shown');
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
      isTesting: true // Use test ads for development
    };

    try {
      await AdMob.prepareInterstitial(options);
      await AdMob.showInterstitial();
      console.log('Test interstitial ad shown');
    } catch (error) {
      console.error('Failed to show interstitial ad:', error);
    }
  }

  async showRewardedAd(): Promise<boolean> {
    if (!this.isInitialized || !Capacitor.isNativePlatform()) return false;

    const options: RewardAdOptions = {
      adId: this.AD_UNITS.rewarded,
      isTesting: true // Use test ads for development
    };

    try {
      await AdMob.prepareRewardVideoAd(options);
      const result = await AdMob.showRewardVideoAd();
      console.log('Test rewarded ad result:', result);
      return result && Object.keys(result).length > 0;
    } catch (error) {
      console.error('Failed to show rewarded ad:', error);
      return false;
    }
  }
}

export const adMobService = AdMobService.getInstance();
