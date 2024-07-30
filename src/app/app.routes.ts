import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent: ()=> import('../app/about/about.component').then((m)=> m.AboutComponent)
    },
    {
        path:"Education",
        loadComponent:()=> import('../app/education/education.component').then((m) => m.EducationComponent)
    },
    {
        path:"Projects",
        loadComponent:()=> import('../app/projects/projects.component').then((m) => m.ProjectsComponent)
    },{
        path:'main',
        loadComponent:()=> import('../app/main/main.component').then((m)=>m.MainComponent)
    }
];
