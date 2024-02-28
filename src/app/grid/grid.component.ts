import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { SquareComponent } from "./square/square.component";
import { ShortProfile } from '../interfaces/user.interface';

@Component({
    selector: 'app-grid',
    standalone: true,
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.css',
    imports: [SquareComponent]
})
export class GridComponent implements OnInit {

  users: ShortProfile[] = []
  hasLoaded = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.profile.list().subscribe(data => {
      if (data.response === 'success') {
        this.users = data.data.map((user: any) => user as ShortProfile);
        this.hasLoaded = true;
      }
    })
  }



}
