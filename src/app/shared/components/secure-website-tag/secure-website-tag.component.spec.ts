import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureWebsiteTagComponent } from './secure-website-tag.component';

describe('SecureWebsiteTagComponent', () => {
  let component: SecureWebsiteTagComponent;
  let fixture: ComponentFixture<SecureWebsiteTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureWebsiteTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureWebsiteTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
