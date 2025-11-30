// database/migrations/xxx_create_users.ts
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('full_name', 255).nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 255).notNullable()
      table.string('role', 50).defaultTo('user')
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())

      // Indexes
      table.index(['email'], 'users_email_index')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}