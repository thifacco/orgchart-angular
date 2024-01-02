import { Component, OnInit } from '@angular/core';
import OrgChart from "src/assets/balkanapp/orgchart";

@Component({
  selector: 'app-organograma',
  templateUrl: './organograma.component.html',
  styleUrls: ['./organograma.component.scss']
})
export class OrganogramaComponent implements OnInit {

  public chart!: OrgChart;

  constructor() { }

  ngOnInit(): void {
    this.buildChartTree();
  }

  buildChartTree() {
    const tree = document.getElementById('tree') as HTMLDivElement;

    if (tree && OrgChart) {
      this.chart = new OrgChart(tree, {
        nodeBinding: {
          field_0: "name",
          img_0: "img"
        },
      });

      this.chart.load([
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
      ]);
    }
  }

}
