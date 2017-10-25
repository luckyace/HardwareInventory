import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {Device, DevicesService} from './devices.service';
import 'rxjs/add/observable/of';

const columnNames = ['ID', 'Serial Number', 'Vendor', 'Model', 'Device Type', 'Updated', 'Owner', 'Location'];
const columnsValues = ['deviceId', 'serialNumber', 'vendor', 'model', 'deviceType', 'timestamp', 'owner', 'location'];


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  providers: [DevicesService]
})
export class DevicesComponent implements OnInit {

  constructor(private devicesService: DevicesService, public dialog: MatDialog) {
    devicesService.sort = this.sort;
  }
  names = columnNames;
  values = columnsValues;
  dataSource = this.devicesService;
  @ViewChild(MatSort) sort: MatSort;

  public ngOnInit(): void {
    this.dataSource = this.devicesService;
    this.sort.sortChange.subscribe(
      function (x) { console.log('Next: %s', x.active); },
      function (err) { console.log('Error: %s', err); },
      function () { console.log('Completed'); });
  }

  public openDialog(object: Device) {
    const dialogRef = this.dialog.open(EditDialogComponent, {data: {
      device: object,
      names: columnNames,
      values: columnsValues
    }});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.devicesService.update(result);
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'devices.dialog.html'
})
export class EditDialogComponent {
  identifier: string;
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     this.names.splice(0, 1);
     this.identifier = this.values.splice(0, 1);
    }
    device: Device = Object.assign({}, this.data.device);
    names = this.data.names.slice();
    values = this.data.values.slice();

  getHtml(url: string): string {
    return '<html><head><script>function onLoad(){window.print(); window.close();}</script></head>'
    + '<body><img onload="onLoad()" src="' + url + '"></body></html>';
  }

  printImage() {
    const pwa = window.open('', '_new');
    pwa.document.open();
    pwa.document.write(this.getHtml(this.identifier));
    pwa.document.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
