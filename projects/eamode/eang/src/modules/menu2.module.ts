import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Menu2Component } from '../components/menu2/menu2'
export * from '../components/menu'

@NgModule({
  declarations: [Menu2Component],
  exports: [Menu2Component],
  imports: [CommonModule]
})
export class Menu2Module {}
