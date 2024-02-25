import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GridComponent } from './grid/grid.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './error/404/not-found.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditorComponent } from './profile/profile-editor/profile-editor.component';
import { IndexComponent } from './index/index.component';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
    {path: '', component: IndexComponent, canActivate: [guestGuard] },
    { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
    { path: 'home', component: GridComponent, canActivate: [authGuard] },
    { path: 'profile/:id', component: ProfileViewComponent, canActivate: [authGuard] },
    { path: 'editor', component: ProfileEditorComponent, canActivate: [authGuard] },

    //I MUST ALWAYS BE AT THE BOTTOM OF THE LIST
    { path: '**', component: NotFoundComponent },
];
