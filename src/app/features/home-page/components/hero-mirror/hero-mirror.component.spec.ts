import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMirrorComponent } from './hero-mirror.component';

describe('HeroMirrorComponent', () => {
  let component: HeroMirrorComponent;
  let fixture: ComponentFixture<HeroMirrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroMirrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
