
import { AdMob } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdMobService {
  private static instance: AdMobService;
  private isInitialized = false;
  private canUseAds = false;

  private constructor() {}

  static getInstance(): AdMobService {
    if (!AdMobService.instance) {
      AdMobService.instance = new AdMobService();
    }
    return AdMobService.instance;
  }

  async initialize(): Promise<void> {
    try {
      // Only work on native platforms
      if (!Capacitor.isNativePlatform()) {
        console.log('AdMob: Web platform, ads disabled');
        return;
      }

      // Very basic initialization - no extra options that might cause crashes
      await AdMob.initialize();
      
      this.isInitialized = true;
      this.canUseAds = true;
      console.log('AdMob: Initialized successfully');
    } catch (error) {
      console.log('AdMob: Failed to initialize, continuing without ads');
      this.isInitialized = false;
      this.canUseAds = false;
    }
  }

  async showInterstitialAd(): Promise<void> {
    // Multiple safety checks
    if (!this.canUseAds || !this.isInitialized || !Capacitor.isNativePlatform()) {
      console.log('AdMob: Ads not available, skipping');
      return;
    }

    try {
      // Use test ad ID to prevent any policy violations
      await AdMob.prepareInterstitial({
        adId: 'ca-app-pub-3940256099942544/1033173712', // Google test ID
      });

      await AdMob.showInterstitial();
      console.log('AdMob: Interstitial shown successfully');
    } catch (error) {
      console.log('AdMob: Ad failed, continuing normally');
      // Never throw - just continue
    }
  }

  isReady(): boolean {
    return this.canUseAds && Capacitor.isNativePlatform();
  }
}

export const adMobService = AdMobService.getInstance();
