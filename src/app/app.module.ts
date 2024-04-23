import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './counter/state/counter.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
   // StoreModule.forRoot({countXyz: counterReducer}),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    //  logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
