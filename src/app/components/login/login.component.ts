import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  template: '<button (click)="login()">Log in</button>',
  standalone: true
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect({
    	authorizationParams: {
        scope: 'openid profile email',
      },
      appState: { target: 'dashboard' }, // Redirect to success-login after login
    });
  }
}



