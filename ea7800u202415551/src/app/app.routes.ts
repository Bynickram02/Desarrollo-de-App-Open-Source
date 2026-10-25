import {Routes} from '@angular/router';
import {Home} from './shared/presentation/views/home/home';

const pageNotFound = () => import('./shared/presentation/views/page-not-found/page-not-found').then(m => m.PageNotFound);
const aquaticCentersRoutes = () => import('./aquatic-centers/presentation/aquatic-centers.routes').then(m => m.aquaticCentersRoutes);
const baseTitle = 'AquaLife';

/**
 * @author Nickolas Ramirez
 */
export const routes: Routes = [
  { path: 'home',         component:     Home,                  title: `${baseTitle} - Home` },
  { path: 'reservations', loadChildren:  aquaticCentersRoutes },
  { path: '',             redirectTo:    '/home', pathMatch: 'full' },
  { path: '**',           loadComponent: pageNotFound,          title: `${baseTitle} - Page Not Found` }
];
