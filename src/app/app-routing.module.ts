import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PulsarComponent } from './pulsar/pulsar.component';
import { WhitedwarfComponent } from './whitedwarf/whitedwarf.component';
import { RedgiantComponent } from './redgiant/redgiant.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent, children:[
    { path: 'pulsar', component: PulsarComponent},
    { path: 'whitedwarf', component: WhitedwarfComponent},    
    { path: 'redgiant', component: RedgiantComponent},    
  ] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes),NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
