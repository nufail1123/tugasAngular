import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';

// Bahasa Indonesia untuk pipe currency dan date (Rp2.020.000, 3 Oktober 2026)
registerLocaleData(localeId);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LOCALE_ID, useValue: 'id' },
  ],
};
