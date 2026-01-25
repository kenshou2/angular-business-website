import { Routes } from '@angular/router';

import { HomePageComponent } from './features/home-page/home-page.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { ServicesPageComponent } from './features/services-page/services-page.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'services', component: ServicesPageComponent },
    { path: '**', component: PageNotFoundComponent },
];
