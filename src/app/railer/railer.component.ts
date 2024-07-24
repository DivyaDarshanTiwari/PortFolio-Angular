import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
type experience ={
  img: string,
  alt: string,
  date_start:string,
  date_end:string,
  company:string,
  designation:string
}
@Component({
  selector: 'app-railer',
  standalone: true,
  imports: [MatIcon, CommonModule, RouterModule, MatTooltip],
  templateUrl: './railer.component.html',
  styleUrls: ['./railer.component.scss'],
})
export class RailerComponent {
  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;

  protected item:experience[] = [
    {
      img: 'enveu.webp',
      alt: 'Enveu Img',
      date_start:'Jun 2024',
      date_end:'Present',
      company:'Enveu',
      designation:'Internship'
    },
    {
      img: 'upesmtc.png',
      alt: 'UPES MTC',
      date_start:'Nov 2023',
      date_end:'Present',
      company:'MTC UPES',
      designation:'Events and Records Core Committe Member'
    }
  ];
  prevfun() {
    if (this.prevButtonRef) {
      const elm = this.prevButtonRef.nativeElement.parentElement?.children[0];
      const item = elm?.getElementsByClassName('images')[0];
      if (item) {
        elm?.append(item);
      }
    }
  }

  nextfun() {
    if (this.nextButtonRef) {
      const elm2 = this.nextButtonRef.nativeElement.parentElement?.children[0];
      const item = elm2?.getElementsByClassName('images');
      if (item) {
        elm2?.prepend(item[item.length - 1]);
      }
    }
  }
}
