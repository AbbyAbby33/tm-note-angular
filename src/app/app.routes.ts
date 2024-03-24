import { Routes } from '@angular/router';
import { LayoutComponent } from '@core/layout/layout.component';
import { HomeComponent } from '@pages/general/home/home.component';
import { LoginComponent } from '@pages/general/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'note', loadChildren: () => import('./pages/note/route').then(mod => mod.NOTE_ROUTES) },
            { path: '**', redirectTo: '/login', pathMatch: 'full' },
        ]
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
