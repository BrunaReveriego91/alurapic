import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photos-list/photo-list.resolver';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

const routes: Routes = [
  { path: 'user/:userName', component: PhotosListComponent
    , resolve: {
      photos: PhotoListResolver
    }
  },
  { path: 'p/add', component: PhotoFormComponent },
  {path: '**',component: NotFoundComponent }
];

@NgModule({
  /* RouterModule sabe quais são as rotas da aplicação */
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
