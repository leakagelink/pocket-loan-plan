
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

const ADMOB_APP_ID = 'ca-app-pub-2211398170597117~3118839468';

const AD_UNIT_IDS = {
  banner: 'ca-app-pub-2211398170597117/7902625805',
  interstitial: 'ca-app-pub-2211398170597117/2143016750',
  reward: 'ca-app-pub-2211398170597117/3124925937', // Using this as reward instead of app open
};

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
      if (!Capacitor.isNativePlatform()) {
        console.log('AdMob: Web platform detected, ads will not show');
        return;
      }

      if (this.isInitialized) {
        console.log('AdMob: Already initialized successfully');
        this.canUseAds = true;
        return;
      }

      console.log('AdMob: Starting initialization with App ID:', ADMOB_APP_ID);

      await AdMob.initialize({
        requestTrackingAuthorization: true,
        testingDevices: [], // Empty array for live ads
        initializeForTesting: false, // Set to false for live ads
      });

      this.isInitialized = true;
      this.canUseAds = true;
      console.log('AdMob: Successfully initialized with live ads');
    } catch (error) {
      console.error('AdMob: Failed to initialize:', error);
      this.isInitialized = false;
      this.canUseAds = false;
    }
  }

  isReady(): boolean {
    return this.canUseAds && Capacitor.isNativePlatform();
  }

  async showInterstitialAd(): Promise<void> {
    if (!this.isReady()) {
      console.log('AdMob: Interstitial ad not ready, skipping');
      return;
    }

    try {
      console.log('AdMob: Preparing interstitial ad...');
      await AdMob.prepareInterstitial({
        adId: AD_UNIT_IDS.interstitial,
      });
      
      console.log('AdMob: Showing interstitial ad...');
      await AdMob.showInterstitial();
      console.log('AdMob: Interstitial ad shown successfully (LIVE)');
    } catch (error) {
      console.error('AdMob: Interstitial ad failed:', error);
    }
  }

  async showBannerAd(): Promise<void> {
    if (!this.isReady()) {
      console.log('AdMob: Banner ad not ready, skipping');
      return;
    }

    try {
      console.log('AdMob: Showing banner ad...');
      await AdMob.showBanner({
        adId: AD_UNIT_IDS.banner,
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
      });
      console.log('AdMob: Banner ad shown successfully (LIVE)');
    } catch (error) {
      console.error('AdMob: Banner ad failed:', error);
    }
  }

  async hideBannerAd(): Promise<void> {
    if (!Capacitor.isNativePlatform()) {
      return;
    }
    
    try {
      await AdMob.hideBanner();
      console.log('AdMob: Banner ad hidden');
    } catch (error) {
      console.error('AdMob: Hide banner failed:', error);
    }
  }

  async showRewardedAd(): Promise<void> {
    if (!this.isReady()) {
      console.log('AdMob: Rewarded ad not ready, skipping');
      return;
    }

    try {
      console.log('AdMob: Preparing rewarded ad...');
      await AdMob.prepareRewardVideoAd({
        adId: AD_UNIT_IDS.reward,
      });
      
      console.log('AdMob: Showing rewarded ad...');
      await AdMob.showRewardVideoAd();
      console.log('AdMob: Rewarded ad shown successfully (LIVE)');
    } catch (error) {
      console.error('AdMob: Rewarded ad failed:', error);
    }
  }
}

export const adMobService = AdMobService.getInstance();
