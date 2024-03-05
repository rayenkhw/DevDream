import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AdminLayoutComponent} from './admin-layout.component';
import { ApplicationListComponent } from '../../application/application-list/application-list.component';
import { ApplicationAjoutComponent } from 'app/application/application-ajout/application-ajout.component';
import { ReclamationListComponent } from 'app/dorra/reclamation/reclamation-list/reclamation-list.component';
import { ReclamationAjoutComponent } from 'app/dorra/reclamation/reclamation-ajout/reclamation-ajout.component';
import { ReponseListComponent } from 'app/dorra/reponse/reponse-list/reponse-list.component';
import { ReponseAjoutComponent } from 'app/dorra/reponse/reponse-ajout/reponse-ajout.component';
import { NotificationAjoutComponent } from 'app/dorra/notification/notification-ajout/notification-ajout.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: 'admin',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: 'admin',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: 'admin',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: 'admin',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: 'admin',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: 'admin',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: 'admin',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'list-applications-admin',  component: ApplicationListComponent },
    { path: 'ajout-application',  component: ApplicationAjoutComponent },
    //{path :'ajout-reclamation-admin',component:ReclamationAjoutComponent},
    { path:'list-reclamations-admin',component:ReclamationListComponent},
    {path :'ajout-reponse-admin/:id_Reclamation',component:ReponseAjoutComponent},
    {path :'list-reponse-admin',component:ReponseListComponent},
    {path :'ajout-notification-admin',component:NotificationAjoutComponent},


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
