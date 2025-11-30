// database/migrations/xxx_create_peminjaman.ts
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'peminjaman'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('buku_id').unsigned().references('id').inTable('buku')
      table.date('tanggal_pinjam').notNullable()
      table.date('tanggal_kembali').nullable()
      table.date('batas_kembali').notNullable()
      table.enum('status', ['dipinjam', 'dikembalikan', 'terlambat']).defaultTo('dipinjam')
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())

      // Indexes
      table.index(['user_id'], 'peminjaman_user_id_index')
      table.index(['buku_id'], 'peminjaman_buku_id_index')
      table.index(['status'], 'peminjaman_status_index')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}