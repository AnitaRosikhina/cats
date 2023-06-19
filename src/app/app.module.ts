import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";
import { CatsPageComponent } from './modules/cats/cats-page.component';
import { CatsState } from "./modules/cats/store/cats.state";
import { CatsService } from "./modules/cats/services/cats.service";
import { HttpClientModule } from "@angular/common/http";

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
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
