// database/seeders/peminjaman_seeder.ts
import Peminjaman from '#models/peminjaman'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run() {
    await Peminjaman.createMany([
      {
        userId: 1,
        bukuId: 1,
        tanggalPinjam: DateTime.fromSQL('2024-11-30'), // ✅ CONVERT ke DateTime
        batasKembali: DateTime.fromSQL('2024-12-07'),   // ✅ CONVERT ke DateTime
        tanggalKembali: DateTime.fromSQL('2024-11-30'), // ✅ CONVERT ke DateTime
        status: 'dikembalikan'
      },
      {
        userId: 2,
        bukuId: 2,
        tanggalPinjam: DateTime.fromSQL('2024-11-29'),  // ✅ CONVERT ke DateTime
        batasKembali: DateTime.fromSQL('2024-12-06'),   // ✅ CONVERT ke DateTime
        tanggalKembali: null, // ✅ Untuk yang belum dikembalikan
        status: 'dipinjam'
      },
      // ... data peminjaman lainnya
    ])
  }
}