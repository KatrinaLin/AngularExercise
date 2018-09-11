import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  name = "ThoughtWorker";
  imageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
  buttonClass = {
    'button': true,
    'primary-button': true
  };
  spanStyle: {};
  hidden = false;
  names = ['A', 'B', 'C'];

  constructor() { }

  ngOnInit() {
    this.setSpanStyle();
  }

  clearName() {
    this.name = null;
  }

  showName() {
    alert('Hello' + this.name);
  }

  setSpanStyle() {
    this.spanStyle = {
      'font-size': '20px',
      'color': 'blue'
    };
  }

  getNameLength() {
    return this.name ? this.name.length : 0;
  }
}
