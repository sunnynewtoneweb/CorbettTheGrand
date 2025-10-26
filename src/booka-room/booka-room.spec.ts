import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookaRoom } from './booka-room';

describe('BookaRoom', () => {
  let component: BookaRoom;
  let fixture: ComponentFixture<BookaRoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookaRoom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookaRoom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
