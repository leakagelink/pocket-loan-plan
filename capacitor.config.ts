
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smartloanadvisor.com',
  appName: 'SmartLoan Advisor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  },
  plugins: {
    AdMob: {
      appId: 'ca-app-pub-2211398170597117~3118839468',
      requestTrackingAuthorization: true
    }
  }
};

export default config;
