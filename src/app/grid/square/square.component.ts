import { Component, Input } from '@angular/core';
import { ShortProfile } from '../../interfaces/user.interface';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'grid-square',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() user: ShortProfile = {
    user_id: 0,
    display_name: '',
    age: 0,
    show_location: false,
    distance: '',
    image: ''
  }



}
