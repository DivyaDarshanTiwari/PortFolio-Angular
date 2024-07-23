import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
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

  protected item = [
    {
      img: 'Github.png',
      alt: 'Github',
    },
    {
      img: 'LeetCode.webp',
      alt: 'LeetCode',
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
