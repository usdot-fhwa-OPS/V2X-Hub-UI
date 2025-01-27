import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
   provideRouter(routes),
    provideAuth0({
      domain: 'dev-2h18bt1x1egxvsqs.us.auth0.com',
      clientId: 'CJXRwgRGkacO2ZRVNaAOBu3x855cGnOI',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200/dashboard',
      }
    }),
  ]
});
