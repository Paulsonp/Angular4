import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [ CommonModule, AboutRoutingModule, MaterialModule, FlexLayoutModule ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
