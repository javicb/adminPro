import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.returnObservable().pipe(
      retry(1)
    ).subscribe(
      valor => console.log('Subs', valor),
      err => console.warn('Error', err),
      () => console.info('observable terminado')
    );
  }

  ngOnInit(): void {
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000)
    });
  }

}
