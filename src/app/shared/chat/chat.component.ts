import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  newMessage: any;
  groupChat: any[] = [];
  collapsed = true;

  constructor(private appService: AppService, private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.loadGroupChat();
  }

  loadGroupChat() {
    this.afs
      .collection('GroupChats')
      .valueChanges()
      .subscribe((messageDocs) => {
        this.groupChat = messageDocs.sort((a: any, b: any) => a.time - b.time);
      });
  }

  async sendMessage() {
    await this.afs.collection('GroupChats').add({
      message: this.newMessage,
      from: `${this.appService.currentUser.firstName} ${this.appService.currentUser.lastName} (${this.appService.currentUser.role})`,
      time: Date.now(),
    });
    this.newMessage = '';
  }
}
