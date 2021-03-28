import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MainPageComponent } from './main-page/main-page.component';
import { LoanFormComponent } from './main-page/loan-form/loan-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoanEffects } from './main-page/store/loan.effects';
import { loanFeatureKey, loanReducer } from './main-page/store/loan.reducer';

@NgModule({
  declarations: [AppComponent, MainPageComponent, LoanFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(loanFeatureKey, loanReducer),
    EffectsModule.forRoot([LoanEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
