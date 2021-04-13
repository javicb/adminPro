import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
