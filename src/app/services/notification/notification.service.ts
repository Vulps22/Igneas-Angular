import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) { }

  notify(title: string, message: string){
    this.messageService.add({ severity: 'info', summary: title, detail: message });
  }

  success(title: string, message: string) {
    this.messageService.add({ severity: 'success', summary: title, detail: message });
  }


  warn(title: string, message: string) {
    this.messageService.add({ severity: 'warn', summary: title, detail: message });
  }

  error(title: string, message: string) {
    this.messageService.add({ severity: 'error', summary: title, detail: message });
  }

}
