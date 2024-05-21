import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppMainComponent } from './web-app-main.component';

describe('WebAppMainComponent', () => {
  let component: WebAppMainComponent;
  let fixture: ComponentFixture<WebAppMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAppMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebAppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
