import { RouterModule, Route, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroes/search/:termino', component: SearchResultComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);