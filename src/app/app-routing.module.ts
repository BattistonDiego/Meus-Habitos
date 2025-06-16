import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule], // << ESSENCIAL
  exports: [RouterModule], // <-- ESSENCIAL para funcionar o <router-outlet>
})
export class AppRoutingModule {}
