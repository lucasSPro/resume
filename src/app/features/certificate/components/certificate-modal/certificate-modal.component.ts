import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ICertificate } from '../certificate-card/certificate-card.component';
import { faClose, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { GlobalMessage } from 'src/app/shared/service/global-message.service';

@Component({
  selector: 'app-certificate-modal',
  templateUrl: './certificate-modal.component.html',
  styleUrls: ['./certificate-modal.component.scss']
})
export class CertificateModalComponent implements OnInit {
  @Input() certificate!: ICertificate;
  @Input() showModal: boolean = false;
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() changeCertificateModalEvent: EventEmitter<number> = new EventEmitter<number>();
  @Input() firstCertificate: boolean = false;
  @Input() lastCertificate: boolean = false;

  icon_close = faClose;
  icon_chevron_left = faChevronLeft;
  icon_chevron_right = faChevronRight;

  constructor(private globalMessage: GlobalMessage) {
  }

  ngOnInit() {
    this.globalMessage.messageFromHireMe(true);
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
  changeCertificate(control: number) {
    this.changeCertificateModalEvent.emit(control);
  }
}
