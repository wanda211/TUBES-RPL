// database/seeders/user_seeder.ts
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@perpustakaan.com',
        password: await hash.make('password123'),
        fullName: 'Admin Perpustakaan',
        role: 'admin'
      },
      {
        email: 'user@example.com',
        password: await hash.make('password123'),
        fullName: 'User Biasa',
        role: 'user'
      },
      {
        email: 'wanda@gmail.com',
        password: await hash.make('password123'),
        fullName: 'Wanda',
        role: 'user'
      }
    ])
  }
}