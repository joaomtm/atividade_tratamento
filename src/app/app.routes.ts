import { Routes } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { GptwComponent } from './components/screens/gptw/gptw.component';
import { StibaComponent } from './components/screens/stiba/stiba.component';
import { SaudeComponent } from './components/screens/saude/saude.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gptw', component: GptwComponent },
    { path: 'stiba', component: StibaComponent },
    { path: 'saude', component: SaudeComponent },
];