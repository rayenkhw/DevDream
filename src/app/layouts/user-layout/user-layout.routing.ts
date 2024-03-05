import { Routes } from '@angular/router';


import { GhofraneComponent } from 'app/ghofrane/ghofrane.component';
import { ApplicationAjoutComponent } from 'app/application/application-ajout/application-ajout.component';
import { ReclamationListComponent } from 'app/dorra/reclamation/reclamation-list/reclamation-list.component';
import { ReclamationAjoutComponent } from 'app/dorra/reclamation/reclamation-ajout/reclamation-ajout.component';
import { ReponseListComponent } from 'app/dorra/reponse/reponse-list/reponse-list.component';
import { ReponseAjoutComponent } from 'app/dorra/reponse/reponse-ajout/reponse-ajout.component';
import { NotificationListComponent } from 'app/dorra/notification/notification-list/notification-list.component';
export const UserLayoutRoutes: Routes = [




    
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

    {
        path: '',
        children: [
            {
                path: 'ghofrane',
                component: GhofraneComponent
            },]},
            { path: 'ajout-application',  component: ApplicationAjoutComponent },
            { path: 'ajout-reclamation',  component: ReclamationAjoutComponent},
            { path:'list-reclamations',component:ReclamationListComponent},
            { path: 'ajout-reponse/:id_Reclamation',  component: ReponseAjoutComponent},
            {path: 'list-reponses',component:ReponseListComponent},
            {path: 'list-notifications',component:NotificationListComponent},
            
   // { path: 'ghofrane',      component: GhofraneComponent }


    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
