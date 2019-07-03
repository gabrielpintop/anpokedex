import { Component, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public faSpinner = faSpinner;

  public iconClasses = 'text-dark';

  public iconSize = '2x';

  constructor() {}

  ngOnInit() {}
}
