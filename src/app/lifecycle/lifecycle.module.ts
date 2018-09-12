import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { ItemComponent } from './example/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { ExerciseComponent } from './exercise/exercise.component';
import { ChildAComponent } from './exercise/child-a/child-a.component';
import { ChildBComponent } from './exercise/child-b/child-b.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([{
      path: 'lifecycle',
      component: ExampleComponent
    },
    {
      path: 'lifecycle/exercise',
      component: ExerciseComponent
    }])
  ],
  declarations: [ExampleComponent, ExerciseComponent, ItemComponent, ChildAComponent, ChildBComponent]
})
export class LifecycleModule { }
