import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent implements OnInit {
  @Input() active: boolean;
  @Input() type: string;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClick = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit() {
  }

    onClickButton(soort) {
      this.onClick.emit(soort);

      this.active = soort;

    }
  }
