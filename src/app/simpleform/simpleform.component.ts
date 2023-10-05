import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.scss'],
})
export class SimpleformComponent {
  result: string = '足し算をしましょう';

  addAndShow = (): void => {
    this.result = '結果を表示します';
  };
}
