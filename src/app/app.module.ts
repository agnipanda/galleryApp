import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageService } from './image/shared/image.service'
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { FilterPipe } from './image/shared/filter.pipe';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    FilterPipe,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
