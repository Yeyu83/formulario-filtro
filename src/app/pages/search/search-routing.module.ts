import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';


const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: 'result',
        component: ResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
