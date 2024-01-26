import { Component, OnDestroy, OnInit } from '@angular/core';
import OrgChart from "src/assets/balkanapp/orgchart";
import { OrganogramaService } from './services/organograma.service';
// import { IChart } from './interfaces/chart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-organograma',
  templateUrl: './organograma.component.html',
  styleUrls: ['./organograma.component.scss']
})
export class OrganogramaComponent implements OnInit, OnDestroy {

  public chart!: OrgChart;

  // public chartData!: Array<IChart>;

  private subscription!: Subscription;

  constructor(
    private organogramaService: OrganogramaService
  ) { }

  ngOnInit(): void {
    this.buildTree();
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buildTree() {
    const tree = document.getElementById('tree') as HTMLDivElement;

    if (tree && OrgChart) {
      this.chart = new OrgChart(tree, {
        nodeBinding: {
          field_0: "name",
          img_0: "img"
        },
      });

      // this.chart.load();
    }
  }

  loadData() {
    this.subscription = this.organogramaService.getChart().subscribe({
      next: (data) => this.chart.load(data)
    });
  }

}
