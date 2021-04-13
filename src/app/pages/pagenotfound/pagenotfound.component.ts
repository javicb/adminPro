import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styles: [
  ]
})
export class PagenotfoundComponent implements OnInit {

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
