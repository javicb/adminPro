import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {
    const observable = new Observable(observer => {
      let i = -1;

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i tiene valor 2');
        }
      }, 1000)
    });

    observable.subscribe(
      valor => console.log('Subs', valor),
      err => console.warn('Error', err),
      () => console.info('observable terminado')
    );
  }

  ngOnInit(): void {
  }

}
