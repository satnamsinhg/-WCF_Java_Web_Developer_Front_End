import { FindClientsComponent } from './find-clients/find-clients.component';
import { FindFeaturesComponent } from './find-features/find-features.component';
import { ClientCreatedComponent } from './client-created/client-created.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateFeatureComponent } from './create-feature/create-feature.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeatureSuccessComponent } from './feature-success/feature-success.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'createFeature', component: CreateFeatureComponent },
  { path: 'createClient', component: CreateClientComponent },
  { path: 'feature/:fId', component: FeatureSuccessComponent },
  { path: 'client/:clientId', component: ClientCreatedComponent },
  { path: 'findFeatures', component: FindFeaturesComponent },
  { path: 'findClients', component: FindClientsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
