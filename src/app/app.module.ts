import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";
import { CatsPageComponent } from './pages/cats/cats-page.component';
import { CatsState } from "./pages/cats/store/cats.state";
import { CatsService } from "./pages/cats/services/cats.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpHeadersInterceptor } from "./interceptors/http-headers.interceptor";
import { CatsFiltersComponent } from './pages/cats/components/cats-filters/cats-filters.component';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CatsCardComponent } from './pages/cats/components/cats-card/cats-card.component';
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
    CatsPageComponent,
    CatsFiltersComponent,
    CatsCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([CatsState], {
      developmentMode: !environment.production
    }),
    MaterialModule
  ],
  providers: [
    CatsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
