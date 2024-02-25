import { DatePipe, NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  standalone: true,
  imports: [NgClass, DatePipe],
  providers: [DatePipe],
  templateUrl: './profile-item.component.html',
  styleUrl: './profile-item.component.css'
})
export class ProfileItemComponent {
@Input() title: string = '';
@Input() value: string = '';
@Input() isDate: boolean = false;
@Input() icon: string = '';
}
