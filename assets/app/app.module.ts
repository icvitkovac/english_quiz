import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { StatsComponent } from './stats/stats.component';
import { GamePickerComponent } from './game-picker/game-picker.component';
import { WordLongestComponent } from './word-longest/word-longest.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { WordAddComponent } from './admin/word-add/word-add.component';
import { WordUpdateComponent } from './admin/word-update/word-update.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NotificationComponent } from './notification/notification.component';
import { WordDisplayComponent } from './word-display/word-display.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SettingsComponent,
    WordAddComponent,
    WordUpdateComponent,
    HighlightDirective,
    GamePickerComponent,
    MainComponent,
    NotificationComponent,
    StatsComponent,
    WordDisplayComponent,
    WordLongestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
