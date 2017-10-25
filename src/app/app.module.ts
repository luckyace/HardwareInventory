import { DevicesComponent, EditDialogComponent } from './devices/devices.component';
import { QrComponent } from './qr/qr.component';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatTableModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSortModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [AppComponent, QrComponent, DevicesComponent, EditDialogComponent],
  bootstrap: [AppComponent, EditDialogComponent],
  providers: []
})
export class AppModule { }
