# KEBIJAKAN PRIVASI
## Aplikasi Mobil Tanki - PAM Jaya

**Versi:** 1.0  
**Berlaku mulai:** 30 Juni 2026  
**Package ID:** pamjaya.apps.mobil_tanki  

---

## 1. Pendahuluan

Perusahaan Air Minum DKI Jakarta (**PAM Jaya**) menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan saat menggunakan aplikasi **Mobil Tanki** (selanjutnya disebut "Aplikasi"). Kebijakan Privasi ini menjelaskan jenis data yang kami kumpulkan, cara kami menggunakannya, dan hak-hak Anda atas data tersebut.

Aplikasi Mobil Tanki merupakan aplikasi operasional internal yang diperuntukkan khusus bagi petugas dan pengemudi resmi armada mobil tangki PAM Jaya. Penggunaan Aplikasi ini menyiratkan persetujuan Anda terhadap Kebijakan Privasi ini.

---

## 2. Data yang Kami Kumpulkan

Kami mengumpulkan jenis data berikut selama penggunaan Aplikasi:

| Jenis Data | Detail | Tujuan |
|---|---|---|
| **Data Lokasi (GPS)** | Latitude, longitude real-time | Dokumentasi perjalanan distribusi air |
| **Foto & Kamera** | Gambar beserta metadata lokasi dan timestamp | Dokumentasi kegiatan lapangan |
| **Informasi Perangkat** | Model HP, versi OS, ID perangkat | Keamanan, debugging, dan crash reporting |
| **Data Akun** | Username dan PIN terenkripsi | Autentikasi dan keamanan akses |
| **Data Penggunaan** | Statistik fitur yang digunakan (anonim) | Peningkatan performa Aplikasi (Firebase Analytics) |
| **Laporan Crash** | Log error dan stack trace saat Aplikasi crash | Perbaikan bug (Firebase Crashlytics) |
| **Token Notifikasi** | Token FCM perangkat | Pengiriman notifikasi push (Firebase Messaging) |

---

## 3. Cara Kami Menggunakan Data

Data yang dikumpulkan digunakan semata-mata untuk keperluan operasional berikut:

- Mengelola dan mencatat setiap perjalanan distribusi air bersih secara akurat.
- Memverifikasi identitas pengguna dan mengamankan akses ke Aplikasi.
- Melampirkan informasi lokasi (GPS) dan waktu pada foto dokumentasi lapangan.
- Mengirimkan notifikasi penting terkait tugas dan operasional kepada pengguna.
- Menganalisis data penggunaan secara anonim untuk meningkatkan fitur Aplikasi.
- Mendeteksi, mendiagnosis, dan memperbaiki error atau crash pada Aplikasi.
- Memenuhi kewajiban pelaporan dan audit internal PAM Jaya.

---

## 4. Berbagi Data dengan Pihak Ketiga

PAM Jaya **tidak menjual, menyewakan, atau membagikan** data pribadi pengguna kepada pihak ketiga untuk tujuan komersial. Data hanya dapat dibagikan dalam kondisi berikut:

- **Penyedia Layanan:** Google LLC (Firebase Analytics, Crashlytics, Cloud Messaging) selaku mitra teknologi dengan standar keamanan dan privasi yang ketat sesuai GDPR.
- **Kewajiban Hukum:** Jika diwajibkan oleh peraturan perundang-undangan yang berlaku atau perintah pengadilan yang sah.
- **Internal PAM Jaya:** Unit kerja yang berwenang untuk keperluan audit dan pelaporan operasional.

---

## 5. Keamanan Data

Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang memadai untuk melindungi data Anda, antara lain:

- Enkripsi data sensitif (PIN) menggunakan *Flutter Secure Storage* dengan enkripsi AES.
- Transmisi data menggunakan protokol HTTPS/TLS yang terenkripsi.
- Akses ke data dibatasi hanya untuk personel PAM Jaya yang berwenang.
- Pemantauan keamanan dan pembaruan sistem secara berkala.

Meski demikian, tidak ada metode transmisi atau penyimpanan data elektronik yang 100% aman. Kami akan segera memberitahu pengguna jika terjadi kebocoran data yang dapat merugikan kepentingan pengguna.

---

## 6. Penyimpanan dan Retensi Data

Data disimpan selama akun pengguna aktif dan diperlukan untuk tujuan operasional. Setelah pengguna tidak lagi aktif (pensiun, resign, atau dicabut aksesnya):

- Data akun akan dihapus atau dianonimkan dalam waktu **30 hari** setelah penonaktifan.
- Data operasional (trip, foto dokumentasi) disimpan sesuai kebijakan retensi arsip PAM Jaya.
- Data crash log dan analytics dihapus otomatis sesuai kebijakan retensi Google Firebase (90 hari).

---

## 7. Hak-Hak Pengguna

Sebagai pengguna Aplikasi, Anda memiliki hak-hak berikut:

- **Hak Akses:** Meminta informasi tentang data pribadi apa saja yang kami simpan.
- **Hak Koreksi:** Meminta perbaikan data yang tidak akurat atau tidak lengkap.
- **Hak Penghapusan:** Meminta penghapusan data pribadi Anda (sesuai ketentuan yang berlaku).
- **Hak Pembatasan:** Meminta pembatasan pemrosesan data dalam kondisi tertentu.
- **Hak Keberatan:** Mengajukan keberatan terhadap pemrosesan data untuk tujuan tertentu.

Untuk menggunakan hak-hak tersebut, hubungi tim IT PAM Jaya melalui kontak yang tercantum di Bagian 9.

---

## 8. Izin yang Diminta Aplikasi

Aplikasi Mobil Tanki memerlukan izin berikut pada perangkat Android Anda:

| Izin | Alasan |
|---|---|
| `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION` | Menangkap koordinat GPS untuk dokumentasi perjalanan dan foto lapangan |
| `CAMERA` | Mengambil foto dokumentasi kegiatan distribusi di lapangan |
| `READ_EXTERNAL_STORAGE`, `WRITE_EXTERNAL_STORAGE` | Menyimpan dan mengakses foto dokumentasi pada perangkat |
| `INTERNET` | Sinkronisasi data dengan server PAM Jaya dan layanan Firebase |
| `RECEIVE_BOOT_COMPLETED` | Memastikan notifikasi berjalan setelah perangkat restart |

Anda dapat mencabut izin kapan saja melalui menu **Pengaturan > Aplikasi > Mobil Tanki > Izin** pada perangkat Android Anda. Pencabutan izin tertentu dapat mempengaruhi fungsionalitas Aplikasi.

---

## 9. Kontak dan Informasi Lebih Lanjut

Jika Anda memiliki pertanyaan, kekhawatiran, atau ingin menggunakan hak-hak Anda terkait privasi data, silakan hubungi kami:

- **Organisasi:** PAM Jaya (Perusahaan Air Minum DKI Jakarta)
- **Alamat:** Jl. Penjernihan II No.1, Pejompongan, Kec. Tanah Abang, Jakarta Pusat 10210
- **Email:** info@pamjaya.co.id
- **Website:** www.pamjaya.co.id
- **Telepon:** 021-5705394

---

## 10. Perubahan Kebijakan Privasi

PAM Jaya berhak mengubah Kebijakan Privasi ini sewaktu-waktu. Setiap perubahan material akan diberitahukan kepada pengguna melalui notifikasi dalam Aplikasi paling lambat **14 hari** sebelum perubahan berlaku. Penggunaan Aplikasi yang berlanjut setelah tanggal efektif perubahan dianggap sebagai persetujuan Anda terhadap kebijakan yang telah diperbarui.

---

## 11. Dasar Hukum

Kebijakan Privasi ini disusun berdasarkan peraturan perundang-undangan yang berlaku, antara lain:

- Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)
- Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik (UU ITE)
- Peraturan Menteri Komunikasi dan Informatika No. 20 Tahun 2016 tentang Perlindungan Data Pribadi
- Kebijakan internal PAM Jaya tentang Keamanan Informasi

---

*Dokumen ini merupakan Kebijakan Privasi resmi aplikasi Mobil Tanki milik PAM Jaya.*  
*Berlaku sejak 30 Juni 2026 | pamjaya.apps.mobil_tanki | www.pamjaya.co.id*
