import { Component, OnInit } from '@angular/core';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public faSpinner: IconDefinition = faSpinner;

  public iconSize = '2x';

  public iconClasses = 'text-dark';

  constructor() {}

  ngOnInit() {}
}
