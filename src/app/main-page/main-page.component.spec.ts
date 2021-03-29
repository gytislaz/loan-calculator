import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MainPageComponent } from './main-page.component';
import { fetchLoan } from './store/loan.actions';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let store: MockStore<{}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore<{
          loan: {};
        }>(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmitForm', () => {
    it('should dispatch fetchLoan', () => {
      component.onSubmitForm({ loanTerm: 36 });
      expect(store.dispatch).toHaveBeenCalledWith(
        fetchLoan({ loanParameters: { loanTerm: 36 } })
      );
    });
  });
});
