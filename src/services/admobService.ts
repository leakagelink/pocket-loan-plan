
import { AdMob } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

const ADMOB_APP_ID = 'ca-app-pub-2211398170597117~3118839468';

const AD_UNIT_IDS = {
  banner: 'ca-app-pub-2211398170597117/7902625805',
  interstitial: 'ca-app-pub-2211398170597117/2143016750',
  appOpen: 'ca-app-pub-2211398170597117/3124925937',
};

export class AdMobService {
  private static instance: AdMobService;
  private isInitialized = false;
  private canUseAds = false;
  private hasShownAppOpenOnce = false;

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
        console.log('AdMob: Web platform, ads disabled');
        return;
      }

      if (this.isInitialized) {
        console.log('AdMob: Already initialized');
        this.canUseAds = true;
        return;
      }

      await AdMob.initialize({
        // Using live app ID configured via capacitor.config and AndroidManifest
        initializeForTesting: false,
      });

      this.isInitialized = true;
      this.canUseAds = true;
      console.log('AdMob: Initialized successfully with live IDs:', ADMOB_APP_ID);
    } catch (error) {
      console.log('AdMob: Failed to initialize, continuing without ads', error);
      this.isInitialized = false;
      this.canUseAds = false;
    }
  }

  isReady(): boolean {
    return this.canUseAds && Capacitor.isNativePlatform();
  }

  async showInterstitialAd(): Promise<void> {
    if (!this.canUseAds || !this.isInitialized || !Capacitor.isNativePlatform()) {
      console.log('AdMob: Interstitial not available, skipping');
      return;
    }

    try {
      await AdMob.prepareInterstitial({
        adId: AD_UNIT_IDS.interstitial, // Live interstitial ID
      });
      await AdMob.showInterstitial();
      console.log('AdMob: Interstitial shown successfully (live)');
    } catch (error) {
      console.log('AdMob: Interstitial failed, continue normally', error);
    }
  }

  async showBannerAd(): Promise<void> {
    if (!this.canUseAds || !this.isInitialized || !Capacitor.isNativePlatform()) {
      console.log('AdMob: Banner not available, skipping');
      return;
    }

    try {
      await AdMob.showBanner({
        adId: AD_UNIT_IDS.banner, // Live banner ID
        adSize: 'BANNER',
        position: 'BOTTOM_CENTER',
        margin: 0,
      });
      console.log('AdMob: Banner shown (live)');
    } catch (error) {
      console.log('AdMob: Banner failed, continue normally', error);
    }
  }

  async hideBannerAd(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;
    try {
      await AdMob.hideBanner();
      console.log('AdMob: Banner hidden');
    } catch (error) {
      console.log('AdMob: Hide banner failed', error);
    }
  }

  async showAppOpenAd(): Promise<void> {
    if (!this.canUseAds || !this.isInitialized || !Capacitor.isNativePlatform()) {
      console.log('AdMob: AppOpen not available, skipping');
      return;
    }
    if (this.hasShownAppOpenOnce) {
      console.log('AdMob: AppOpen already shown once this session');
      return;
    }

    try {
      await AdMob.prepareAppOpenAd({
        adId: AD_UNIT_IDS.appOpen, // Live app-open ID
        // Optionally: isMuted: true
      });
      await AdMob.showAppOpenAd();
      this.hasShownAppOpenOnce = true;
      console.log('AdMob: AppOpen shown successfully (live)');
    } catch (error) {
      console.log('AdMob: AppOpen failed, continue normally', error);
    }
  }
}

export const adMobService = AdMobService.getInstance();

