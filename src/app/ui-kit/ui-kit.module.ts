import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMenuComponent } from './components/ui-menu/ui-menu.component';
import { UiLogoComponent } from './components/ui-logo/ui-logo.component';
import { RouterModule } from '@angular/router';
import { UiContainerDirective } from './directives/ui-container.directive';
import { UiTitleDirective } from './directives/ui-title.directive';
import { UiAnimatedRouterOutletComponent } from './components/ui-animated-router-outlet/ui-animated-router-outlet.component';
import { UiDirectives } from './directives/ui-directives';


@NgModule({
  declarations: [
    UiMenuComponent,
    UiLogoComponent,
    UiContainerDirective,
    UiTitleDirective,
    UiAnimatedRouterOutletComponent,
    ...UiDirectives
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UiMenuComponent,
    UiLogoComponent,
    UiContainerDirective,
    UiTitleDirective,
    UiAnimatedRouterOutletComponent,
    ...UiDirectives
  ]
})
export class UiKitModule {
}
