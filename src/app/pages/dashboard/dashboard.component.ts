import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserAdd } from 'src/app/store/models/users.model';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users$: Observable<UserAdd[]> = this.store.select(state => state.users);
  public lineChartData: ChartDataSets[] = [{
    data: [10,7],label:'Employees'
  }];
  public lineChartLabels: Label[] = ['Male', 'Female'];
  public lineChartOptions:  any = { legend: { display: true, labels: { fontColor: 'black' } } };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(51, 255, 153)',
    },
  ];
  public lineChartType = 'line';
  public lineChartPlugins = [];

  userList: any = [];
  constructor(private store: Store<{ users: UserAdd[] }>) { }
  ngOnInit(): void {
    this.users$.subscribe(data => {
      this.userList = data;
      let count = this.userList.reduce((acc, curVal) => {
        if (curVal.gender === 'male') {
          acc.male++;
        }
        else {
          acc.female++;
        }
        return acc;
      }, { male: 0, female: 0 });
      this.lineChartData = [{
        data: [count.male, count.female],
        label: 'Employees'
      }];
    })
  }
}
