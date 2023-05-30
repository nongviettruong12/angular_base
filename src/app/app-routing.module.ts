import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';

const routes: Routes = [{

    path: '',component: AdminLayoutComponent,children: [
      {path:'product',component:ProductListComponent},
      {path:'product/detail/:id',component:ProductDetailComponent},
      {path:'product/:id/edit',component:ProductEditComponent},
      {path:'product/add',component:ProductAddComponent},
    ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
