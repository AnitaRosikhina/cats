import { NgModule } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
  ]
})
export class MaterialModule {}
