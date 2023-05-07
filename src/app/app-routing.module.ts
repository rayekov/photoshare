import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SharedPhotoListComponent } from "./shared-photo-list/shared-photo-list.component";
import { SingleSharedPhotoComponent } from "./single-shared-photo/single-shared-photo.component";

const routes : Routes = [
    {path: 'sharedphotos/:id', component: SingleSharedPhotoComponent},
    {path: 'sharedphotos', component: SharedPhotoListComponent},
     {path:'', component:LandingPageComponent}
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports : [
            RouterModule
        ]
    }
)
export class AppRoutingModule{}