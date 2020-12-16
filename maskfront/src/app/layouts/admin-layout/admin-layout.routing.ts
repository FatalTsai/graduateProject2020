import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MonitorComponent } from '../../monitor/monitor.component';
import { PlotComponent } from '../../plot/plot.component';
import { AlbumComponent } from '../../album/album.component';
import { SlidesComponent } from '../../slides/slides.component';
import { AboutusComponent } from '../../aboutus/aboutus.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'monitor',        component: MonitorComponent},
    { path: 'plot',           component: PlotComponent},
    { path: 'album',           component: AlbumComponent},
    { path: 'slides',           component: SlidesComponent},
    { path: 'aboutus',           component: AboutusComponent},


];
