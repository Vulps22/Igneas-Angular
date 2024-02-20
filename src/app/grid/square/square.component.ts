import { Component, Input } from '@angular/core';
import { ShortUser } from '../../interfaces/short-user';

@Component({
  selector: 'grid-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() user: ShortUser = {
    user_id: 0,
    display_name: '',
    age: 0,
    show_location: false,
    distance: '',
    image: ''
  }



}
