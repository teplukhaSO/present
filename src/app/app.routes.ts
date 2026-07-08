import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { QuestPageComponent } from './pages/quest-page/quest-page.component';
import { FinishComponent } from './pages/finish/finish.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'quest/:step', component: QuestPageComponent },
  { path: 'finish', component: FinishComponent }
];
