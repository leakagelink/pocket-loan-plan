
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smartloanadvisor.com',
  appName: 'SmartLoan Advisor',
  webDir: 'dist',
  server: {
    url: 'https://74caa527-f282-48c4-9652-d5960c931443.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;
