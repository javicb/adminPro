import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {
      if (false) {
        resolve('hola mundo')
      }
      else {
        reject('Algo fue mal')
      }
    });

    promesa.then((mensaje) => {
      console.log(mensaje)
    })
      .catch(error => console.log('error en mi promesa', error));

    console.log('fin ngInit');
  }

}
