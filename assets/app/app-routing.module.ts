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
***REMOVED***,
    {
        path: 'administration',
        component: AdminComponent
***REMOVED***,
    {
        path: 'stats',
        component: StatsComponent
***REMOVED***,
    {
        path: 'main',
        component: MainComponent
***REMOVED***,
    {
        path: 'pick',
        component: GamePickerComponent
***REMOVED***,
    {
        path: 'longest-word',
        component: WordLongestComponent
***REMOVED***,
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
