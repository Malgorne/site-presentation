import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from '../classes/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [{
      id: 1,
      mail: 'test1@test.com',
      password: 'test1',
      confirmed: true
    }, {
      id: 2,
      mail: 'test2@test.com',
      password: 'test2',
      confirmed: true
    }, {
      id: 3,
      mail: 'test3@test.com',
      password: 'test3',
      confirmed: false
    }];

    return {
      users
    };
  }
}
