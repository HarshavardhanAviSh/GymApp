import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { hi_IN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hi from '@angular/common/locales/hi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';

import { ReactiveFormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';


import { NzGridModule } from 'ng-zorro-antd/grid';

import { AuthModule } from './modules/auth/auth.module';
import { GymMemberModule } from './modules/gym-member/gym-member.module';

import { PracticeComponent } from './practice/practice.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';


registerLocaleData(hi);

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCollapseModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzAnchorModule,
    NzIconModule,
    NzDropDownModule,
    NzSelectModule,
    NzGridModule,

    AuthModule,
    GymMemberModule,
    NzDatePickerModule,
    NzAutocompleteModule,
    NzTableModule,
    NzDividerModule
  ],
  providers: [
    // { provide: NZ_I18N, useValue: hi_IN }
    { provide : NZ_I18N, useValue : en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
