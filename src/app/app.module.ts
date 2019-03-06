import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import {
  LayoutModule,
  PanelModule,
  AutoCompleteModule,
  ThemePickerModule,
  MarkdownModule,
  MenuModule,
  Menu2Module,
  TabsModule
} from '@eamode/eang'

import {
  MdcButtonModule,
  MdcRippleModule,
  MdcRadioModule
} from '@angular-mdc/web'

import { ReactiveComponent } from './feature/reactive/reactive.component'
import { ThemingComponent } from './feature/theming/theming.component'
import { LayoutComponent } from './feature/layout/layout.component'
import { ButtonComponent } from './feature/button/button.component'
import { HomeComponent } from './feature/home/home.component'
import { CardComponent } from './feature/card/card.component'
import { IconComponent } from './feature/icon/icon.component'
import { VariablesComponent } from './variables/variables.component'
import { GetStartedComponent } from './feature/get-started/get-started.component'
import { MenuComponent } from './feature/menu/menu.component'
import { Menu2Component } from './feature/menu2/menu2.component'
import { LandingComponent } from './feature/landing/landing.component'
import { ComponentsComponent } from './feature/components/components.component'
import { TabsComponent } from './feature/tabs/tabs.component'
import { UtilitiesComponent } from './utilities/utilities.component'
import { MarkdownComponent } from './feature/markdown/markdown.component'
import { ListComponent } from './components/list/list.component'
import { BannerComponent } from './components/banner/banner.component'
import { EaPanelComponent } from './features/ea-panel/ea-panel.component'
import { PanelComponent } from './components/panel/panel.component'

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'theming', component: ThemingComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'card', component: CardComponent },
  { path: 'list', component: ListComponent },
  { path: 'icon', component: IconComponent },
  { path: 'variables', component: VariablesComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'getting-started', component: GetStartedComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu2', component: Menu2Component },
  { path: 'variables', component: VariablesComponent },
  { path: 'features', component: HomeComponent },
  { path: 'utilities', component: UtilitiesComponent },
  { path: 'markdown', component: MarkdownComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    ThemingComponent,
    LayoutComponent,
    ButtonComponent,
    HomeComponent,
    CardComponent,
    IconComponent,
    VariablesComponent,
    MenuComponent,
    Menu2Component,
    GetStartedComponent,
    LandingComponent,
    ComponentsComponent,
    TabsComponent,
    UtilitiesComponent,
    MarkdownComponent,
    ListComponent,
    BannerComponent,
    EaPanelComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    LayoutModule,
    AutoCompleteModule,
    PanelModule,
    ThemePickerModule,
    MarkdownModule,
    MdcButtonModule,
    MdcRippleModule,
    MdcRadioModule,
    MenuModule,
    Menu2Module,
    TabsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
