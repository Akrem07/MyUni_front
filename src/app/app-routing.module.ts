import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualitiesComponent } from './actualities/actualities.component';
import { AccountComponent } from './account/account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InfoSheetComponent } from './info-sheet/info-sheet.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:"actualities",
    component: ActualitiesComponent
  },
  {
    path:"account",
    component: AccountComponent
  },
  {
    path:"signin",
    component: SignInComponent
  },
  {
    path:"signUp",
    component: SignUpComponent
  },
  {
    path:"infosheet",
    component: InfoSheetComponent
  },
  {
    path:"menu",
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
