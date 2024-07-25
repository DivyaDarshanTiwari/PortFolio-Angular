import { CommonModule,NgFor } from '@angular/common';
import {ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

type project={
  project_name:string,
  features:string[],
  img:string
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule,CommonModule,NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {

  protected projects:project[]=[
    {
      project_name:"Dummy_Hotstar",
      features:["Roubust", "Secure"],
      img:"Dummy_Hotstar.png"
    },
    {
      project_name:"BitCoin",
      features:["SimpleUI", "MultiCoins","MultiCurrency"],
      img:"BitCoin.png"
    },
    {
      project_name:"TodoList",
      features:["SimpleUI", "Priority"],
      img:"TodoList.png"
    },
    {
      project_name:"Invoice Genetation Landing page",
      features:["SimpleUI", "Detailed"],
      img:"InvoiceG.png"
    },
  ]

}
