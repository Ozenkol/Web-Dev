import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // importing this from app-routing

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(AppComponent,
    {
      providers: [
        provideProtractorTestingSupport(),
        provideRouter(routes)
      ]
    }
  ).catch(err => console.error(err));