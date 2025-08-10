
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
      applicationId: 'ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX', // Replace with your real AdMob App ID
      testingDevices: [], // Remove test device IDs for production
      initializeForTesting: false // Disable test mode for live ads
    }
  }
};

export default config;
