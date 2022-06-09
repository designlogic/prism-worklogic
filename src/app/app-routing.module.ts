import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/deom', pathMatch: 'full' },
  { path: 'demo', component: DemoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
