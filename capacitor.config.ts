import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.newshilder',
  appName: 'News',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
