import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BarChartSeries,
  BarChartCategory
} from './bar-chart/bar-chart.component';
import { Location } from '@angular/common';

const DEFAULT_REPOS = ['angular/angular', 'facebook/react', 'vuejs/vue'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient, public location: Location) {
    DEFAULT_REPOS.forEach(repo => this.loadRepo(repo));
  }
  public repo: string;

  categories: BarChartCategory[] = [];
  series: BarChartSeries[] = [
    {
      label: 'Watchers',
      color: '#11C591'
    },
    {
      label: 'Forks',
      color: 'rebeccapurple'
    },
    {
      label: 'Issues',
      color: '#ED4DAF'
    }
  ];

  addRepo() {
    if (this.repo && this.repo.length) {
      this.loadRepo(this.repo);
      this.repo = '';
    }
  }

  removeRepo(repo: number) {
    this.categories = this.categories.filter((_, i) => i !== repo);
  }

  async loadRepo(repo: string) {
    // const result = await this.http.get(`https://api.github.com/repos/${repo}`).toPromise() as any;
    const result = {
      name: repo,
      watchers_count: Math.floor(Math.random() * 5000),
      forks_count: Math.floor(Math.random() * 3000),
      open_issues: Math.floor(Math.random() * 1000)
    };

    this.categories = [
      ...this.categories,
      {
        label: result.name,
        values: [result.watchers_count, result.forks_count, result.open_issues]
      }
    ];
  }
}
