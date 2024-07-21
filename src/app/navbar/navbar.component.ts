import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule,NgFor } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule,NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected pages=["Education", "Projects", "About"]

}
