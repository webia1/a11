import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  luke: unknown;

  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.cs.getLukeSkywalker().subscribe((d) => (this.luke = d));
  }
}
