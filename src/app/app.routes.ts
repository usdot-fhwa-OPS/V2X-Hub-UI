import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Dashboard } from './components/login/dashboard';
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [    

    {
        path: 'login',
        title: 'V2X-Hub Login',
        component: LoginComponent,
    },
    
    { 
    	path: '',
    	redirectTo: '/login',
    	pathMatch: 'full' 
    },
    
    { path: 'dashboard',
      component: Dashboard,
      canActivate: [AuthGuard] 
    },
];
export class AppRoutingModule {}
