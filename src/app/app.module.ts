import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductComponent} from './components/product/product.component';
import {BackgroundButtonDirective} from './directives/background-button.directive';
import {CurrencyPipe} from './pipes/currency.pipe';
import {TxtEditingPipe} from './pipes/txt-editing.pipe';
import {PhonePipe} from './pipes/phone.pipe';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru'

registerLocaleData(localeRu)

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BackgroundButtonDirective,
    CurrencyPipe,
    TxtEditingPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
