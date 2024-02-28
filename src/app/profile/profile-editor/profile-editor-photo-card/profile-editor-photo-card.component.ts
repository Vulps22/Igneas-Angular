import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'app-profile-editor-photo-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-editor-photo-card.component.html',
  styleUrl: './profile-editor-photo-card.component.css'
})
export class ProfileEditorPhotoCardComponent {
@Input() url: string | null = null;
@Input() position: Number | String = '1';

constructor(private apiService: ApiService, private notificationService: NotificationService) {}

onFileSelected(event: any) {

  const file: File = event.target.files[0];
 if(file){
  const formData = new FormData();

  if(!file.type.includes('image')) return this.notificationService.error('Invalid File Upload', 'Your profile pictures must be images');

  formData.append('image', file)
  formData.append('position', String(this.position))

  this.apiService.profile.saveUserProfileImage(formData).subscribe(data => {
    this.url = data.data.url;
  })
 }
}

removeImage(){
  this.apiService.profile.deleteUserProfileImage(Number(this.position)).subscribe(data => {

    if(data.response === 'success') {
      this.url = null;
      this.notificationService.success('Image Deleted', '');
    } else {
      this.notificationService.error("An Error Occured", data.data);
    }
  })
}
}
