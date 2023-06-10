import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NoticeboardComponent } from './noticeboard.component';

describe('NoticeboardComponent', () => {
  let component: NoticeboardComponent;
  let fixture: ComponentFixture<NoticeboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a title', () => {
    expect(component.title).toBe('NOTICE BOARD');
    // we are accessing "h1"
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('NOTICE BOARD');
  });
  it('should have Yes in "Yes Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    expect(btn.innerHTML).toBe('Yes');
  });
  it('should have content in notice board ', () => {
    const board = fixture.debugElement.query(By.css('.board')).nativeElement;
    expect(board.innerHTML).not.toBeNull();
    // console.log(board.innerHTML)
    expect(board.innerHTML.length).toBeGreaterThan(0);
  });
  it('should have Yes in "Yes Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    expect(btn.innerHTML).toBe('Yes');
  });
  
  it('should have "No" button disabled', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#no-btn');
    expect(btn.disabled).toBeTruthy();
  });
  it('should set userResponse when Yes button is clicked', () => {
    expect(component.userResponse).toBeUndefined();
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    btn.click();
    expect(component.userResponse).toBe('I am In');
  });
});
