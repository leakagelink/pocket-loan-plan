
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, RewardAdOptions } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdMobService {
  private static instance: AdMobService;
  private isInitialized = false;

  // Your real AdMob ad unit IDs
  private readonly AD_UNITS = {
    banner: 'ca-app-pub-2211398170597117/7902625805', // Your banner ad unit ID
    interstitial: 'ca-app-pub-2211398170597117/2143016750', // Your interstitial ad unit ID
    rewarded: 'ca-app-pub-3940256099942544/5224354917', // Using test ID as you didn't provide rewarded ID
    appOpen: 'ca-app-pub-2211398170597117/3124925937' // Your app open ad unit ID
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
        testingDevices: [], // No test devices for production
        initializeForTesting: false // Live ads enabled
      });
      this.isInitialized = true;
      console.log('AdMob initialized successfully for live ads');
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
      isTesting: false // Live ads enabled
    };

    try {
      await AdMob.showBanner(options);
      console.log('Live banner ad shown');
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
      isTesting: false // Live ads enabled
    };

    try {
      await AdMob.prepareInterstitial(options);
      await AdMob.showInterstitial();
      console.log('Live interstitial ad shown');
    } catch (error) {
      console.error('Failed to show interstitial ad:', error);
    }
  }

  async showRewardedAd(): Promise<boolean> {
    if (!this.isInitialized || !Capacitor.isNativePlatform()) return false;

    const options: RewardAdOptions = {
      adId: this.AD_UNITS.rewarded,
      isTesting: true // Using test for rewarded as you didn't provide rewarded ID
    };

    try {
      await AdMob.prepareRewardVideoAd(options);
      const result = await AdMob.showRewardVideoAd();
      console.log('Rewarded ad result:', result);
      return result && Object.keys(result).length > 0;
    } catch (error) {
      console.error('Failed to show rewarded ad:', error);
      return false;
    }
  }

  async showAppOpenAd(): Promise<void> {
    if (!this.isInitialized || !Capacitor.isNativePlatform()) return;

    const options = {
      adId: this.AD_UNITS.appOpen,
      isTesting: false // Live ads enabled
    };

    try {
      await AdMob.prepareAppOpen(options);
      await AdMob.showAppOpen();
      console.log('Live app open ad shown');
    } catch (error) {
      console.error('Failed to show app open ad:', error);
    }
  }
}

export const adMobService = AdMobService.getInstance();
