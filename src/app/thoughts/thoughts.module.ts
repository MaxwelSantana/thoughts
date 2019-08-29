import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThoughtsComponent } from './thoughts.component';
import { RouterModule, Route } from '@angular/router';
import { ThoughtsService } from './thoughts.service';

const routes: Route[] = [
  {
    path     : '',
    component: ThoughtsComponent,
    resolve: {
      thoughts: ThoughtsService
    }
  }
];


@NgModule({
  declarations: [ThoughtsComponent],
  providers: [ThoughtsService],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ThoughtsModule { }
