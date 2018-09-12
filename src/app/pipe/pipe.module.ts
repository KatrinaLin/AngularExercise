import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise/exercise.component';
import { RouterModule } from '@angular/router';
import { NamePipe } from './exercise/name.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'pipe',
      component: ExerciseComponent
    }])
  ],
  declarations: [ExerciseComponent, NamePipe]
})
export class PipeModule { }
