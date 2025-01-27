import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LogoutComponent } from '../logout/logout.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-success-message',
  template: `
<div style="text-align: center; margin-top: 100px; font-family: Arial, sans-serif; background-color: #f0fff4; padding: 20px; border: 2px solid #a1e3a1; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 128, 0, 0.2);">
    <div class="success-page">
      <h1 style="color: #2e7d32;">Welcome!</h1>
      <p style="color: #4caf50; font-size: 18px;">You have successfully logged into V2X HUB UI.</p>

      <!-- Display User Info -->
      <h2 style="color: #388e3c;">User Info:</h2>
      <ul style="list-style-type: none; padding: 0; color: #1b5e20; font-size: 16px;" *ngIf="auth.user$ | async as user">
        <li><strong>User Name:</strong> {{ user.name }}</li>
        <li><strong>Email:</strong> {{ user.email }}</li>
      </ul>

      <!-- Logout Button -->
      <div style="margin-top: 20px;">
        <app-logout></app-logout>
      </div>
    </div>
</div>
  `,
  standalone: true,
  imports: [CommonModule,LogoutComponent], 
})

export class Dashboard {
  constructor(public auth: AuthService) {}
}
