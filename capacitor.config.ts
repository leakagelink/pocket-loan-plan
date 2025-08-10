
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.74caa527f28248c49652d5960c931443',
  appName: 'SmartLoan Advisor',
  webDir: 'dist',
  server: {
    url: 'https://74caa527-f282-48c4-9652-d5960c931443.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    AdMob: {
      applicationId: 'ca-app-pub-3940256099942544~3347511713', // Google's test app ID
      testingDevices: ['YOUR_DEVICE_ID_HERE'], // Add your device ID for testing
      initializeForTesting: true // Enable test mode
    }
  }
};

export default config;
