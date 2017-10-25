import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatSort } from '@angular/material';

export class Device {
    deviceId: string;
    serialNumber: string;
    photos: string[];
    vendor: string;
    model: string;
    deviceType: string;
    timestamp: number;
    owner: string;
    location: string;
  }

@Injectable()
export class DevicesService extends DataSource<Device[]> {

    constructor (private db: AngularFireDatabase) { super(); }
    private currentSort: MatSort;
    connect(): Observable<any> {
        this.currentSort = new MatSort;
        this.currentSort.active = 'location';
        return this.db.list('devices',
         ref =>  ref.orderByChild(this.currentSort.active))
         .valueChanges();
    }
    disconnect() {}

    set sort(sort: MatSort) {
        this.currentSort = sort;
    }

    public update(updated: Device): void {
        this.db.object('devices/' + updated.deviceId).update(updated);
    }
}
