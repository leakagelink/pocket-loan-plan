
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smartloanadvisor.com',
  appName: 'SmartLoan Advisor',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    AdMob: {
      // Updated to your live AdMob App ID
      appId: 'ca-app-pub-2211398170597117~3118839468',
    }
  }
};

export default config;

