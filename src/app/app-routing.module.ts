import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'curriculums', loadChildren: () => import('./curriculum/curriculum.module').then(m => m.CurriculumModule)},
  { path: 'accounts', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  { path: 'subjects', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
