
import { AdMob } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdMobService {
  private static instance: AdMobService;
  private isInitialized = false;
  private readonly interstitialAdId = 'ca-app-pub-2211398170597117/2143016750';
  private readonly testInterstitialAdId = 'ca-app-pub-3940256099942544/1033173712';

  private constructor() {}

  static getInstance(): AdMobService {
    if (!AdMobService.instance) {
      AdMobService.instance = new AdMobService();
    }
    return AdMobService.instance;
  }

  async initialize(): Promise<void> {
    try {
      // Only initialize on native platforms
      if (!Capacitor.isNativePlatform()) {
        console.log('AdMob: Not a native platform, skipping initialization');
        return;
      }

      console.log('AdMob: Starting initialization...');

      // requestTrackingAuthorization is not supported by this plugin version.
      // Use initializeForTesting in dev builds only.
      await AdMob.initialize({
        initializeForTesting: import.meta.env.DEV,
        // testingDevices can be added if you have specific device IDs during development.
        // testingDevices: ['YOUR_DEVICE_ID'],
      });

      this.isInitialized = true;
      console.log('AdMob: Successfully initialized');
    } catch (error) {
      console.error('AdMob initialization failed:', error);
      this.isInitialized = false;
    }
  }

  async showInterstitialAd(): Promise<void> {
    try {
      if (!this.isInitialized || !Capacitor.isNativePlatform()) {
        console.log('AdMob: Not initialized or not native platform');
        return;
      }

      console.log('AdMob: Preparing interstitial ad...');

      // Use test ad ID for development, real ad ID for production
      const adId = import.meta.env.DEV ? this.testInterstitialAdId : this.interstitialAdId;

      await AdMob.prepareInterstitial({
        adId,
        isTesting: import.meta.env.DEV, // true in dev, false in prod
      });

      console.log('AdMob: Showing interstitial ad...');
      await AdMob.showInterstitial();
    } catch (error) {
      console.error('AdMob interstitial ad failed:', error);
      // Don't throw error to prevent app crashes
    }
  }

  isReady(): boolean {
    return this.isInitialized && Capacitor.isNativePlatform();
  }
}

export const adMobService = AdMobService.getInstance();
