import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './profile-item.component.html',
  styleUrl: './profile-item.component.css'
})
export class ProfileItemComponent {
@Input() title: String = '';
@Input() value: String = '';
@Input() icon: String = '';
}
