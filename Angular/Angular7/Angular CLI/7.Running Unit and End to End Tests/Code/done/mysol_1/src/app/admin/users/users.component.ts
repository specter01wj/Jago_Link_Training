import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  hasPermission = true;

  constructor() {}

  ngOnInit() {
    if (this.hasPermission) {
      this.getUsers()
        .then(users => (this.users = users))
        .catch(e => console.log(e.message));
    }
  }
  async getUsers() {
    return [
      { name: 'John', email: 'john@angular.com' },
      { name: 'Colleen', email: 'colleen@angular.com' }
    ];
  }
}
