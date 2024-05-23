import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-web-app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-app-modal.component.html',
  styleUrl: './web-app-modal.component.scss'
})
export class WebAppModalComponent {
  @Input() showModal: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter();

  closeModal(): void {
    this.close.emit();
  }

}
