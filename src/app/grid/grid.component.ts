import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ShortUser } from '../interfaces/short-user'
import { SquareComponent } from "./square/square.component";

@Component({
    selector: 'app-grid',
    standalone: true,
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.css',
    imports: [SquareComponent]
})
export class GridComponent implements OnInit {

  users: ShortUser[] = []
  hasLoaded = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.profile.list().subscribe(data => {
      if (data.response === 'success') {
        this.users = data.data.map((user: any) => user as ShortUser);
        this.hasLoaded = true;
      }
    })
  }



}
