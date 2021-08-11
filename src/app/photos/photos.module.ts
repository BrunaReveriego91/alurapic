import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photos-list/photos/photos.component';

@NgModule({
    declarations: [PhotoComponent,
        PhotosListComponent,
        PhotoFormComponent,
        PhotosComponent
    ],
    imports: [HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule { }
