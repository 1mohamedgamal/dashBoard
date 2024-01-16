import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { MaterialModule } from './matriel/matriel.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule],

  declarations: [SharedComponent],
})
export class SharedModule {}
