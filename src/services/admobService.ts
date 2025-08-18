
import { AdMob } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class AdMobService {
  private static instance: AdMobService;
  private isInitialized = false;
  private initializationAttempted = false;
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
    // Prevent multiple initialization attempts
    if (this.initializationAttempted) {
      return;
    }
    
    this.initializationAttempted = true;

    try {
      // Only initialize on native platforms
      if (!Capacitor.isNativePlatform()) {
        console.log('AdMob: Web platform detected, ads disabled');
        return;
      }

      // Check if AdMob plugin is available
      if (!AdMob) {
        console.log('AdMob: Plugin not available');
        return;
      }

      console.log('AdMob: Starting safe initialization...');

      // Minimal initialization options to prevent crashes
      await AdMob.initialize({
        initializeForTesting: true // Always use testing for safety
      });

      this.isInitialized = true;
      console.log('AdMob: Successfully initialized');
    } catch (error) {
      console.log('AdMob: Initialization failed safely:', error);
      this.isInitialized = false;
      // Don't throw - just continue without ads
    }
  }

  async showInterstitialAd(): Promise<void> {
    try {
      // Multiple safety checks
      if (!this.isInitialized) {
        console.log('AdMob: Not initialized, skipping ad');
        return;
      }

      if (!Capacitor.isNativePlatform()) {
        console.log('AdMob: Web platform, skipping ad');
        return;
      }

      if (!AdMob) {
        console.log('AdMob: Plugin not available, skipping ad');
        return;
      }

      console.log('AdMob: Attempting to show interstitial ad...');

      // Always use test ad ID for maximum safety
      const adId = this.testInterstitialAdId;

      await AdMob.prepareInterstitial({
        adId,
        isTesting: true // Always testing for safety
      });

      await AdMob.showInterstitial();
      console.log('AdMob: Ad shown successfully');
    } catch (error) {
      console.log('AdMob: Ad failed safely:', error);
      // Never throw errors - app should continue normally
    }
  }

  isReady(): boolean {
    return this.isInitialized && Capacitor.isNativePlatform();
  }

  // Safe method to check if ads are available
  canShowAds(): boolean {
    try {
      return this.isInitialized && Capacitor.isNativePlatform() && !!AdMob;
    } catch {
      return false;
    }
  }
}

export const adMobService = AdMobService.getInstance();
