import 'egg'
import { Repository, Connection } from 'typeorm'
import Manager from '../app/entity/manager'
import User from '../app/entity/user'

declare module 'egg' {
  interface Context {
    connection: Connection
    entity: {
      Manager: Manager
      User: User
    }
    repo: {
      Manager: Repository<Manager>
      User: Repository<User>
    }
  }
}
