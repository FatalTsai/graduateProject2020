import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MonitorComponent } from './monitor/monitor.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import {MatSliderModule} from '@angular/material/slider';
import { PlotComponent } from './plot/plot.component';
import { AlbumComponent } from './album/album.component';
import { SlidesComponent } from './slides/slides.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    PopupModule,
    MatSliderModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MonitorComponent,
    PlotComponent,
    AlbumComponent,
    SlidesComponent,
    AboutusComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
