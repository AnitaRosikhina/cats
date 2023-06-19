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

@NgModule({
  declarations: [
    AppComponent,
    CatsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([CatsState], {
      developmentMode: !environment.production
    })
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
