import { Component, OnInit } from '@angular/core';
import { ProfileItemComponent } from '../profile-item/profile-item.component';
import { ApiService } from '../../api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [ProfileItemComponent, RouterLink],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent implements OnInit {

  userId: number = 0;
  selectedImage: string = "1";
  profile: any = {}; //TODO: Profile Object
  health: any = {}; //TODO: Health Object
  images: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(data => {
      this.userId = Number(data.get('id'));
      this.apiService.profile.get(this.userId).subscribe(data => {
        if(data.response == 'success'){

          this.userId = data.data.user_id
          this.profile = data.data;
          this.health = data.data.health;
          this.images = data.data.images;
        }
      })
    })



  }

  getImage() {

    const image = this.images.find(item => { return item.id == this.selectedImage});

    return image.filename;
  }

  selectImage(image: string) { 
    this.selectedImage = image;
  }
}
