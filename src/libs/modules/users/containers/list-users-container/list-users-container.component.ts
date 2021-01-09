import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersDbService } from '../../services/users-db.service';

@Component({
  selector: 'app-list-users-container',
  templateUrl: './list-users-container.component.html',
  styleUrls: ['./list-users-container.component.scss']
})
export class ListUsersContainerComponent implements OnInit {

  subscriptions: Subscription = new Subscription();

  usersList = [];

  constructor(private usersDbService: UsersDbService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.usersDbService.getAllUsers().subscribe((allUsers) => {
        this.usersList = allUsers;
      })
    )
  }

}
