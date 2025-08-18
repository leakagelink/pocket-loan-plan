
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smartloanadvisor.com',
  appName: 'SmartLoan Advisor',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    AdMob: {
      appId: 'ca-app-pub-3940256099942544~3347511713', // Google test app ID
    }
  }
};

export default config;
