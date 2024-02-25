import { Component, OnInit } from '@angular/core';
import { ProfileEditorPhotoCardComponent } from './profile-editor-photo-card/profile-editor-photo-card.component';
import { ApiService } from '../../api.service';
import { AuthenticationService } from '../../authentication.service';
import { NotificationService } from '../../notification.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Profile } from '../../interfaces/profile';
import { Image } from '../../interfaces/image';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ProfileEditorPhotoCardComponent, ReactiveFormsModule, DatePipe],
  providers:[DatePipe],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent implements OnInit {
  profile: Profile;
  images: Image[] = []

  profileForm = this.formBuilder.nonNullable.group({
    display_name: [''],
    sexuality: [''],
    bio: [''],
    height: [0],
    weight: [0],
    body_type: [''],
    position: [''],
    dominance: [''],
    ethnicity: [''],
    relationship_status: [''],
    looking_for: [''],
    gender: [''],
    pronouns: [''],
    show_location: [false],
    show_age: [false],
    health: this.formBuilder.group({
      show_hiv_status: [false],
      hiv_status: [''],
      last_test: [''],
      on_prep: [false],
    }),
  });

  constructor(
    private apiService: ApiService,
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.profile = {} as Profile
  }

  ngOnInit(): void {
    const userId = this.authService.getUser();
    if (!userId) this.notificationService.error('Error', "An unexpected error occured: You are not logged in! Try logging out and back in again")

    this.apiService.profile.get(Number(userId)).subscribe(data => {

      if (data.response === 'success') {
        this.profile = data.data;
        this.images = this.profile.images ?? []

        this.populateFormData();
      }
    })
  }

  populateFormData() {
    // Check if profile data is available
    if (this.profile) {
      // Patch the form with profile data
      this.profileForm.patchValue({
        display_name: this.profile.display_name,
        sexuality: this.profile.sexuality,
        bio: this.profile.bio,
        height: this.profile.height,
        weight: this.profile.weight,
        body_type: this.profile.body_type,
        position: this.profile.position,
        dominance: this.profile.dominance,
        ethnicity: this.profile.ethnicity,
        relationship_status: this.profile.relationship_status,
        looking_for: this.profile.looking_for,
        gender: this.profile.gender,
        pronouns: this.profile.pronouns,
        show_location: this.profile.show_location,
        show_age: this.profile.show_age,
        health: {
          show_hiv_status: this.profile.health.show_hiv_status,
          hiv_status: this.profile.health.hiv_status,
          last_test: this.datePipe.transform(this.profile.health.last_test, 'yyyy-MM-dd') || '',
          on_prep: this.profile.health.on_prep
        }
      });
    }
  }

  save() {
    const data = JSON.stringify(this.profileForm.value);

    this.apiService.profile.saveUserProfile(data).subscribe(data => {
      this.notificationService.success("Profile Saved!", '');
    })
  }

}
