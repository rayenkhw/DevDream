import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

import { ApplicationListComponent } from '../../application/application-list/application-list.component';
import { ApplicationAjoutComponent } from 'app/application/application-ajout/application-ajout.component';
import { UserCrudComponent } from 'app/user-crud/user-crud.component';
import { UserArchivesComponent } from 'app/user-archives/user-archives.component';
import { UserAddComponent } from 'app/user-add/user-add.component';

export const AdminLayoutRoutes: Routes = [
  
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'list-applications-admin',  component: ApplicationListComponent },
    { path: 'user',  component: UserCrudComponent },
    { path: 'user-archives',  component: UserArchivesComponent },
    { path: 'ajout-application',  component: ApplicationAjoutComponent },
    { path: 'ajouter-user',  component:UserAddComponent },
    // {
    //     path: '',
    //     children: [
    //         {
    //             path: 'admin/dashboard',
    //             component: DashboardComponent
    //         },
    //         {
    //             path: 'admin/user-profile',
    //             component: UserProfileComponent
    //         },
    //         {
    //             path: 'admin/table-list',
    //             component: TableListComponent
    //         },
    //         {
    //             path: 'admin/typography',
    //             component: TypographyComponent
    //         },
    //         {
    //             path: 'admin/icons',
    //             component: IconsComponent
    //         },
    //         {
    //             path: 'admin/maps',
    //             component: MapsComponent
    //         },
    //         {
    //             path: 'admin/notifications',
    //             component: NotificationsComponent
    //         },
    //         {
    //             path: 'admin/upgrade',
    //             component: UpgradeComponent
    //         }
    //     ]
    // }



];
