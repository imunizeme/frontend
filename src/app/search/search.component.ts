import { Component, OnInit, Injectable } from '@angular/core';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';

import { AppService } from '../app.service';

const I18N_VALUES = {
  'pt-br': {
    weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Agu', 'Set', 'Out', 'Nov', 'Dec'],
  }
};

@Injectable()
export class I18n {
  language = 'pt-br';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})
export class SearchComponent implements OnInit {

  objectList: any[];
  listYears: number[];

  params = {
    sexo: '',
    birth: '',
    tomada: {
      day: '',
      month: '',
      year: ''
    }
  };

  constructor(
    public appService: AppService
  ) {
  }

  ngOnInit() {
    this.listYears = this.range(1900, (2018 - 1900)).reverse();
    this.search();
  }

  range(start, count) {
    return Array.apply(0, Array(count))
      .map(function (element, index) {
        return index + start;
    });
  }

  search () {
    this.appService.filter(this.getParams())
    .subscribe(
      data => {
        this.objectList = data;
      },
      error => {
        console.log(error, 'error in get total reports.');
      }
    );
  }

  dateToYMD(year, month, day) {
    const date = new Date(year, month, day);
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y ;
  }

  getParams (): string {
    let obj: any = '';
    obj += this.params.sexo ? `&sexo=${this.params.sexo}` : '';
    obj += this.params.birth ? `&birth=${this.params.birth}` : '';
    // obj += this.params.tomada.day ? `&tomada=${this.params.tomada.day}-${this.params.tomada.month}-${this.params.tomada.year}` : '';

    return obj;
  }

}
