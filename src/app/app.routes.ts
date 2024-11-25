import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./Shared/auth.guard";
import { ParkingSpotListComponent } from './services/components/parking-spot-list/parking-spot-list.component';
import { ParkingSpotDetailComponent } from './services/components/parking-spot-detail/parking-spot-detail.component';
import { ParkingSpotCreateComponent } from './services/components/parking-spot-create/parking-spot-create.component';
import { ParkingSpotUpdateComponent } from './services/components/parking-spot-update/parking-spot-update.component';
import { ParkingSpotDeleteComponent } from './services/components/parking-spot-delete/parking-spot-delete.component';



export const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'home',component:  HomeComponent,canActivate :[AuthGuard]},
  { path: 'parking-spots', component: ParkingSpotListComponent },
  { path: 'parking-spot/:id', component: ParkingSpotDetailComponent },
  { path: 'create-parking-spot', component: ParkingSpotCreateComponent },
  { path: 'update-parking-spot/:id', component: ParkingSpotUpdateComponent },
  { path: 'delete-parking-spot/:id', component: ParkingSpotDeleteComponent },
  { path: '', redirectTo: '/parking-spots', pathMatch: 'full' },
  {path:"**",redirectTo:"login"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
