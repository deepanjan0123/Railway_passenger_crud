import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"user",component:UserComponent},
  {path:"list",component:ListComponent},
  {path:"profile",component:ProfileComponent},
  {path:"update",component:UpdateComponent},
  {path:"delete",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
