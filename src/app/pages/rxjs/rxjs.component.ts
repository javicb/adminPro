import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {

    // this.returnObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs', valor),
    //   err => console.warn('Error', err),
    //   () => console.info('observable terminado')
    // );
    this.returnInterval()
      .subscribe(console.log)
  }

  ngOnInit(): void {
  }

  returnInterval(): Observable<number> {
    return interval(1000)
      .pipe(
        take(4),
        map(valor => {
          return valor + 1
        })
      );
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
