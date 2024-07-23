import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule,CommonModule,NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected characteristics: string[] = [
    'Leadership',
    'Management',
    'Organization',
    'TeamWork',
  ];

  protected image:string = "Profile_pic.jpg"
  protected designation:string ="Frontend Angular Developer";
  protected name:string="Divya Darshan Tiwari"
}
