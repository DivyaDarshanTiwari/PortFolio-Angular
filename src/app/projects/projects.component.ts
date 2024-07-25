import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 

type project = {
  project_name: string;
  features: string[];
  img: string;
  link: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, CommonModule, NgFor,LazyLoadImageModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected not_found = "404not.png";
  protected projects: project[] = [
    {
      project_name: 'Dummy_Hotstar',
      features: ['Roubust', 'Secure'],
      img: 'Dummy_Hotstar.png',
      link: 'https://divyadarshantiwari.github.io/Dummy_Hotstar/',
    },
    {
      project_name: 'BitCoin',
      features: ['SimpleUI', 'MultiCoins', 'MultiCurrency'],
      img: 'BitCoin.png',
      link: 'https://divyadarshantiwari.github.io/Bitcoin/',
    },
    {
      project_name: 'TodoList',
      features: ['SimpleUI', 'Priority'],
      img: 'TodoList.png',
      link: '',
    },
    {
      project_name: 'Invoice Genetation Landing page',
      features: ['SimpleUI', 'Detailed'],
      img: 'InvoiceG.png',
      link: 'https://divyadarshantiwari.github.io/Add-page-InvoiceGenerator/',
    },
    {
      project_name: 'Product Price Landing Page',
      features: ['HTML', 'CSS'],
      img: 'ProductPrice.png',
      link: 'https://divyadarshantiwari.github.io/Product-Price-Page/',
    },
  ];
}
