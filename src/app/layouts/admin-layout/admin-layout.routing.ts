import { Routes } from '@angular/router';


import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserCrudComponent } from 'app/user-crud/user-crud.component';
import { UserAddComponent } from 'app/user-add/user-add.component';
import { UserArchivesComponent } from 'app/user-archives/user-archives.component';
import { BanneComponent } from 'app/banne/banne.component';
import { DashboardAdminComponent } from 'app/dashboard-admin/dashboard-admin.component';
import { ListEvaluationComponent } from 'app/list-evaluation/list-evaluation.component';
import { EvaluationComponent } from 'app/evaluation/evaluation.component';
import { ListChatComponent } from 'app/dorra/chat/list-chat/list-chat.component';
import { NavbarComponent } from 'app/components/navbar/navbar.component';
import { NotificationAjoutComponent } from 'app/dorra/notification/notification-ajout/notification-ajout.component';
import { NotificationListComponent } from 'app/dorra/notification/notification-list/notification-list.component';
import { ReclamationListComponent } from 'app/dorra/reclamation/reclamation-list/reclamation-list.component';
import { ReponseAjoutComponent } from 'app/dorra/reponse/reponse-ajout/reponse-ajout.component';
import { ReponseListComponent } from 'app/dorra/reponse/reponse-list/reponse-list.component';
import { ReclamationAjoutComponent } from 'app/dorra/reclamation/reclamation-ajout/reclamation-ajout.component';
import { ApplicationAjoutComponent } from 'app/application/application-ajout/application-ajout.component';
import { ApplicationListComponent } from 'app/application/application-list/application-list.component';
import { StageListComponent } from 'app/rayen/stage/stage-list/stage-list.component';
import { DepotListComponent } from 'app/rayen/depot/depot-list/depot-list.component';
import { DepotUpdateComponent } from 'app/rayen/depot/depot-update/depot-update.component';

export const AdminLayoutRoutes: Routes = [
 
   
    { path: 'dashboard',      component: DashboardAdminComponent },
    { path: 'user-profile',   component: UserProfileComponent },
   // { path: 'table-list',     component: TableListComponent },
   // { path: 'typography',     component: TypographyComponent },
   // { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
   // { path: 'upgrade',        component: UpgradeComponent },
    { path: 'user',  component: UserCrudComponent },
    { path: 'user-archives',  component: UserArchivesComponent },
    { path: 'ajouter-user',  component:UserAddComponent },
    { path: 'banne',  component:BanneComponent },

    {path:"ajouterEvaluation",component:EvaluationComponent},
    {path:"AfficherEvaluation",component:ListEvaluationComponent},
    
    {path :'ajout-reponse-admin/:id_Reclamation',component:ReponseAjoutComponent},
    {path :'list-reponse',component:ReponseListComponent},
    {path :'ajout-notification',component:NotificationAjoutComponent},
    {path:'list-notifications',component:NavbarComponent},
    {path:'list-notifications-admin',component:NotificationListComponent},
    {path:'chats',component:ListChatComponent},
    { path: 'ajout-reclamation',  component: ReclamationAjoutComponent},
    { path:'list-reclamations',component:ReclamationListComponent},
    { path: 'ajout-reponse/:id_Reclamation',  component: ReponseAjoutComponent},
    { path: 'list-applications',  component: ApplicationListComponent },
    { path: 'ajout-application',  component: ApplicationAjoutComponent },
    { path: 'list-stages', component: StageListComponent},
    { path: 'ajout-application',  component: ApplicationAjoutComponent },
    { path: 'affichage-depots',   component: DepotListComponent },
    { path: 'modify-depot/:id_depot', component: DepotUpdateComponent },
];
