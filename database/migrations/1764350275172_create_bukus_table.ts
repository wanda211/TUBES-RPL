// database/migrations/xxx_create_buku.ts
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'buku'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('judul').notNullable()
      table.string('penulis').notNullable()
      table.string('penerbit').nullable()
      table.integer('tahun_terbit').nullable()
      table.string('isbn', 20).nullable()
      table.integer('stok').defaultTo(0)
      table.text('deskripsi').nullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())

      // Indexes
      table.index(['judul'], 'buku_judul_index')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}