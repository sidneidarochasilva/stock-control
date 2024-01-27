import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { ToobarNavigationComponent } from './components/toobar-navigation/toobar-navigation.component';


@NgModule({
  declarations: [
    ToobarNavigationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //PrimeNG
    ToolbarModule,
    CardModule,
    ButtonModule
  ],

  exports: [ToobarNavigationComponent],
  providers: [DialogService, CurrencyPipe]
})
export class SharedModule { }
