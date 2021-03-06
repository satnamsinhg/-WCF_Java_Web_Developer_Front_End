import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFeatureComponent } from './create-feature/create-feature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientComponent } from './create-client/create-client.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeatureSuccessComponent } from './feature-success/feature-success.component';
import { ClientCreatedComponent } from './client-created/client-created.component';
import { FindFeaturesComponent } from './find-features/find-features.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindClientsComponent } from './find-clients/find-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFeatureComponent,
    CreateClientComponent,
    HomePageComponent,
    PageNotFoundComponent,
    FeatureSuccessComponent,
    ClientCreatedComponent,
    FindFeaturesComponent,
    FindClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
