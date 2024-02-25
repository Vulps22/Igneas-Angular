import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorPhotoCardComponent } from './profile-editor-photo-card.component';

describe('ProfileEditorPhotoCardComponent', () => {
  let component: ProfileEditorPhotoCardComponent;
  let fixture: ComponentFixture<ProfileEditorPhotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEditorPhotoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileEditorPhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
