import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { LengthControlPipe } from '../Shared_Pipe/Length_control_Pipe/length-control.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RailerComponent } from '../railer/railer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { LazyLoadImageDirective } from '../Directives/lazy-load-image.directive';
type college = {
  year: number;
  name: string;
  city: string;
  class: string;
  percentage: string;
};

type skills = {
  icon: string;
  icon_alt: string;
  heading: string;
  details: string;
};
type document ={
  document_name: string,
  documnet_link: string,
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    LengthControlPipe,
    MatTooltipModule,
    RailerComponent,
    MatCardModule,
    MatIcon,
    LazyLoadImageDirective
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  protected college: college[] = [
    {
      year: 2017,
      name: 'City Montessorie School',
      city: 'Lucknow',
      class: 'Class 10',
      percentage: '93.6%',
    },
    {
      year: 2019,
      name: 'Don Bosco Academy',
      city: 'Patna',
      class: 'Class 12',
      percentage: '73%',
    },
    {
      year: 2022,
      name: 'UPES',
      city: 'Deharadun',
      class: 'CPGA',
      percentage: '8.66',
    },
  ];

  protected skills: skills[] = [
    {
      icon: 'favicon.ico',
      icon_alt: 'Angular',
      heading: 'Project work in Angular',
      details: `Proficient in creating responsive and accessible web applications
          using HTML5, CSS3 (including Flexbox, Grid, and Sass), and Angular
          framework, with experience in component-based architecture,
          TypeScript, RxJS, and state management.`,
    },
    {
      icon: 'Github.png',
      icon_alt: 'Github',
      heading: 'Colaboration and Communication',
      details: `Skilled in fostering effective teamwork and clear communication, which are crucial for successful project outcomes. Proficient in utilizing version control systems like Git and collaboration platforms such as GitHub to streamline workflow and enhance team productivity`,
    },
  ];

  protected documents:document[] = [
    {
      document_name: 'CV',
      documnet_link: 'CV.pdf',
    },
    {
      document_name: 'CSA Hackthon 3.0',
      documnet_link: 'CSA Hackathon 3.0.pdf',
    },
    {
      document_name: 'Srijan Social Intership',
      documnet_link: 'Shrijan Social Internship.jpg',
    },
    {
      document_name: 'Yeh Ek Soch LOR',
      documnet_link: 'Yes LOR.jpg',
    },
    {
      document_name: 'Innovation for Change',
      documnet_link: 'IFC Cerificate.jpg',
    },
  ];
}
