import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  titulo = '';

  constructor(private router: Router) {
    this.getArgumentosRuta();
  }

  ngOnInit(): void {
  }

  getArgumentosRuta() {
    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: any) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
      .subscribe(data => {
        this.titulo = data.titulo;
        document.title = `AdminPro - ${this.titulo}`;
      });
  }

}
