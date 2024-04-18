import { OnInit,Component, EventEmitter, Input, Output } from '@angular/core';
import { Tache } from 'app/Models/tache';

@Component({
  selector: 'app-sidebartask',
  templateUrl: './sidebartask.component.html',
  styleUrls: ['./sidebartask.component.css']
})
export class SidebartaskComponent implements OnInit {

  @Input() selectedTask: Tache;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
