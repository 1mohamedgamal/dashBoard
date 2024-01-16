import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { MaterialModule } from './matriel/matriel.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [CommonModule, MaterialModule, NgApexchartsModule],
  exports: [MaterialModule , NgApexchartsModule],

  declarations: [SharedComponent],
})
export class SharedModule {}
