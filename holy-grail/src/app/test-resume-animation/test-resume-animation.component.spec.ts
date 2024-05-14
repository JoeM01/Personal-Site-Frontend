import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResumeAnimationComponent } from './test-resume-animation.component';

describe('TestResumeAnimationComponent', () => {
  let component: TestResumeAnimationComponent;
  let fixture: ComponentFixture<TestResumeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestResumeAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestResumeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
