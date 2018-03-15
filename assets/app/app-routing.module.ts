import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { StatsComponent } from './stats/stats.component';
import { GamePickerComponent } from './game-picker/game-picker.component';
import { WordLongestComponent } from './word-longest/word-longest.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pick'
    },
    {
        path: 'administration',
        component: AdminComponent
    },
    {
        path: 'stats',
        component: StatsComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'pick',
        component: GamePickerComponent
    },
    {
        path: 'longest-word',
        component: WordLongestComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
