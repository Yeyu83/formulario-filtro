import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';


@NgModule({
  declarations: [SearchComponent, FormComponent, ResultComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
