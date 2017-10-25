import { range } from 'rxjs/observable/range';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: [ './qr.component.css' ]
})
export class QrComponent  implements OnInit {

  uids: string[][] = [[]];

  private generateUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
   // return ('0000' + ((Math.random() * Math.pow(36, 4))).toString(36)).slice(-4);
  }


    public ngOnInit(): void {
      for (let i = 0; i < 12; i++) {
        this.uids[i] = [];
        for (let j = 0; j < 9; j++) {
          this.uids[i][j] = this.generateUID();
        }
      }
    }
}
