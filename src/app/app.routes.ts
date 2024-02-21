import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GridComponent } from './grid/grid.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './error/404/not-found.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: GridComponent, canActivate: [authGuard] },
    { path: 'profile/:id', component: ProfileViewComponent, canActivate: [authGuard] },
    { path: '**', component: NotFoundComponent },
];
