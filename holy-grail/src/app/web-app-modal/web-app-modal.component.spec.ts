import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppModalComponent } from './web-app-modal.component';

describe('WebAppModalComponent', () => {
  let component: WebAppModalComponent;
  let fixture: ComponentFixture<WebAppModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAppModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
