import { Routes } from '@angular/router';
import { GamesComponent} from './games.component';

import { ListComponent } from './list/list.component';

export const GamesRoutes:Routes = [{
  path: 'games',
  component: GamesComponent,
  children: [
    {path: '/games', component: ListComponent}
  ]
}];
