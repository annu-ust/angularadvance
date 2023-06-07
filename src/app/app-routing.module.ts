import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchidComponent } from './fetchid/fetchid.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'create',component:CreateComponent},
 // {path:'update',component:UpdateComponent},
  {path:'fetchid',component:FetchidComponent},
  {path:'delete',component:DeleteComponent},
  { path: 'update/:id/edit', component: UpdateComponent },
  {path:'retrieve',component:RetrieveComponent},
  {path:'',component:RetrieveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
