import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,    
    TelerikReportingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    DateInputsModule,
    ButtonsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
