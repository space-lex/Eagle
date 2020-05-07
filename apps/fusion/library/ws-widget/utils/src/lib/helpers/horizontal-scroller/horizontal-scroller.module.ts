/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HorizontalScrollerComponent } from './horizontal-scroller.component'
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material'

@NgModule({
  declarations: [HorizontalScrollerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [HorizontalScrollerComponent],
})
export class HorizontalScrollerModule { }