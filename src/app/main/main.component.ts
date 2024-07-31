import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { ProjectsComponent } from '../projects/projects.component';
import { LazyLoadImageDirective } from '../Directives/lazy-load-image.directive';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutComponent,EducationComponent,ProjectsComponent,LazyLoadImageDirective,MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
