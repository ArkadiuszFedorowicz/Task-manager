import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGeneratorComponent } from './task-generator.component';

describe('TaskGeneratorComponent', () => {
  let component: TaskGeneratorComponent;
  let fixture: ComponentFixture<TaskGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

