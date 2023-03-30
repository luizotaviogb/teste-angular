import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
