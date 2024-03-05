import { Routes } from '@angular/router';


import { GhofraneComponent } from 'app/ghofrane/ghofrane.component';
import { ApplicationAjoutComponent } from 'app/application/application-ajout/application-ajout.component';
import { DepotListComponent } from 'app/rayen/depot/depot-list/depot-list.component';
import { DepotUpdateComponent } from 'app/rayen/depot/depot-update/depot-update.component';
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
            { path: 'affichage-depots',   component: DepotListComponent },
            { path: 'modify-depot/:id_depot', component: DepotUpdateComponent }
            
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
