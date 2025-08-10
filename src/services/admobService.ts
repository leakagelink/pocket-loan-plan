
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, RewardAdOptions } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdMobService {
  private static instance: AdMobService;
  private isInitialized = false;

  // Use Google's official test ad unit IDs for development
  private readonly AD_UNITS = {
    banner: 'ca-app-pub-3940256099942544/6300978111', // Test banner
    interstitial: 'ca-app-pub-3940256099942544/1033173712', // Test interstitial
    rewarded: 'ca-app-pub-3940256099942544/5224354917', // Test rewarded
    appOpen: 'ca-app-pub-3940256099942544/3419835294' // Test app open
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
        testingDevices: [], // Add device IDs here if needed
        initializeForTesting: true // Enable test mode for development
      });
      this.isInitialized = true;
      console.log('AdMob initialized successfully in test mode');
    } catch (error) {
      console.error('AdMob initialization failed:', error);
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
      isTesting: true // Enable test ads
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
      isTesting: true // Enable test ads
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
      isTesting: true // Enable test ads
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
