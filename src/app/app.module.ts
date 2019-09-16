import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { WorkbenchModule } from '@scion/workbench';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity/activity.component';
import { AuthService } from './core/auth/auth.service';
import { TokenResolveComponent } from './core/auth/token-resolve/token-resolve.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityComponent,
    TokenResolveComponent
  ],
  imports: [
    WorkbenchModule.forRoot(),
    RouterModule, // module required by SCION Workbench
    BrowserAnimationsModule, // module required by SCION Workbench
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
