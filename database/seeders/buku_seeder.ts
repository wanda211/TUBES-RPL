// database/seeders/buku_seeder.ts
import Buku from '#models/buku'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await Buku.createMany([
      {
        judul: 'Pemrograman JavaScript Modern',
        penulis: 'Budi Santoso',
        penerbit: 'Informatika',
        stok: 10,
        tahunTerbit: 2023
      },
      {
        judul: 'React untuk Pemula',
        penulis: 'Sari Dewi',
        penerbit: 'Media Kita',
        stok: 5,
        tahunTerbit: 2024
      },
      {
        judul: 'Database Management',
        penulis: 'Ahmad Fauzi',
        penerbit: 'Pustaka Ilmu',
        stok: 8,
        tahunTerbit: 2022
      },
      {
        judul: 'Laravel Mastery',
        penulis: 'Rina Melati',
        penerbit: 'Code Publisher',
        stok: 3,
        tahunTerbit: 2023
      }
    ])
  }
}