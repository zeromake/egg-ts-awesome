import 'egg'
import { Repository, Connection, ObjectType } from 'typeorm'
import Manager from '../app/entity/manager'
import User from '../app/entity/user'

declare module 'egg' {
  interface Context {
    connection: Connection
    entity: {
      Manager: ObjectType<Manager>
      User: ObjectType<User>
    }
    repo: {
      Manager: Repository<Manager>
      User: Repository<User>
    }
  }
}
