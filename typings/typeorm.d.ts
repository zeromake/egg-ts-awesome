import 'egg'
import { Repository, Connection } from 'typeorm'
import Manager from '../app/entity/manager'
import User from '../app/entity/user'

declare module 'egg' {
  interface Context {
    connection: Connection
    entity: {
      Manager: any
      User: any
    }
    repo: {
      Manager: Repository<Manager>
      User: Repository<User>
    }
  }
}
