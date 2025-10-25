/*
Angular-sovelluksen konffitiedosto,
jonne tulevat koko sovellukselle yhteiset määritykset,
kuten esim. reititys, in-memory-web-api yms. 
*/
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
