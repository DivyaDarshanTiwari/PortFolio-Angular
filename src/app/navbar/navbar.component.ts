import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule,NgFor } from '@angular/common';
import { MatRipple } from '@angular/material/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule,NgFor,MatRipple],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected pages=["About","Education", "Projects","Contact"];

  protected ripple_color:string = "rgba(0, 0, 0, 1)";
}
