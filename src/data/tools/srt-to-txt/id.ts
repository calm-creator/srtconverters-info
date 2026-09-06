import type { ToolDetailContent } from './types';

export const idContent: ToolDetailContent = {
  metaTitle: 'Konverter SRT ke TXT Gratis – Ekstrak Teks Subtitle',
  metaDescription: 'Ubah file subtitle SRT menjadi teks TXT bersih secara online. Hapus timestamp dan nomor urut langsung di browser Anda dengan aman.',
  h1: 'Konverter SRT ke TXT',
  heroDescription: 'Konversi file subtitle SRT menjadi transkrip teks biasa yang rapi dan mudah dibaca. Menghapus kode waktu, nomor urut, dan tag format dengan privasi 100%.',
  toolName: 'Konverter SRT ke TXT',
  ui: {
    pasteTitle: 'Input SRT (.srt)',
    pastePlaceholder: 'Tempel konten SRT Anda di sini (contoh:\n1\n00:00:01,000 --> 00:00:04,000\nHalo, selamat datang di video kami.)...',
    orDivider: 'ATAU',
    uploadTitle: 'Opsi 2 — Unggah File SRT',
    convertButton: 'Konversi ke Teks',
    clearButton: 'Hapus',
    trySampleButton: 'Coba Contoh',
    livePreviewTitle: 'Teks Biasa Bersih (.txt)',
    errorNoInput: 'Silakan tempel konten SRT atau unggah file SRT untuk dikonversi.',
    pastedContentSource: 'Konten SRT Ditempel',
    dropzoneTitle: 'Tarik & lepas file .srt Anda di sini',
    dropzoneSubtitle: 'atau klik untuk memilih file dari perangkat',
    browseButton: 'Pilih File SRT',
    dropActiveText: 'Lepaskan file SRT di sini...',
    fileSelected: 'File dipilih',
    fileNameLabel: 'Nama File',
    fileSizeLabel: 'Ukuran',
    cueCountLabel: 'Subtitle Diekstrak',
    characterCountLabel: 'Karakter',
    downloadAction: 'Unduh .txt',
    copyAction: 'Salin ke Clipboard',
    copiedSuccess: 'Berhasil disalin!',
    resetAction: 'Konversi File Lain',
    previewTitle: 'Pratinjau Teks Bersih',
    previewEmpty: 'Teks hasil konversi akan muncul di sini segera setelah file SRT dipilih.',
    optionsTitle: 'Opsi Konversi',
    optEmptyLine: 'Tambahkan baris kosong antar subtitle',
    optRemoveTags: 'Hapus tag gaya (contoh: <i>, <b>, <font>)',
    errorInvalidFile: 'Silakan unggah file subtitle .srt yang valid.',
    errorEmptyFile: 'File yang diunggah kosong.',
    errorParseFailed: 'Gagal memproses file. Pastikan format SRT valid.',
  },
  sections: {
    whatIsSrt: {
      title: 'Apa itu File SRT?',
      content: [
        'File SRT (SubRip Subtitle) adalah format subtitle video paling umum. File ini memuat nomor urut, penanda waktu mulai dan selesai, serta baris dialog percakapan.',
        'Meskipun sangat berguna saat menonton film di media player, banyaknya angka dan kode waktu membuatnya sulit dibaca sebagai dokumen biasa.',
      ],
    },
    whatIsConverter: {
      title: 'Apa itu Konverter SRT ke TXT?',
      content: [
        'Konverter SRT ke TXT adalah alat yang membaca struktur file SRT dan menyaring penanda waktu serta nomor urut, menyisakan teks percakapan murni.',
        'Alat kami beroperasi sepenuhnya di dalam browser web Anda. File Anda tidak pernah dikirim ke server mana pun.',
      ],
    },
    howToConvert: {
      title: 'Cara Mengonversi SRT ke TXT',
      steps: [
        {
          title: '1. Pilih File',
          description: 'Tarik file .srt ke kotak unggah atau pilih dari penyimpanan perangkat Anda.',
        },
        {
          title: '2. Pemrosesan Otomatis',
          description: 'Sistem langsung menghapus penanda waktu dan membersihkan tag format.',
        },
        {
          title: '3. Unduh atau Salin',
          description: 'Simpan sebagai file .txt atau salin teks langsung ke clipboard.',
        },
      ],
    },
    whyConvert: {
      title: 'Mengapa Mengonversi SRT ke TXT?',
      benefits: [
        {
          title: 'Membaca Lebih Nyaman',
          description: 'Baca transkrip wawancara, podcast, atau materi kuliah dengan alur tulisan yang mengalir.',
        },
        {
          title: 'Optimal untuk AI',
          description: 'Masukkan teks bersih ke ChatGPT tanpa memboroskan token pada baris waktu.',
        },
        {
          title: 'Belajar Bahasa',
          description: 'Cetak naskah film untuk mempermudah mempelajari kosakata baru.',
        },
        {
          title: 'Pencarian Cepat',
          description: 'Format teks biasa memudahkan pencarian kata kunci tertentu di dalam video panjang.',
        },
      ],
    },
    comparison: {
      title: 'Perbandingan: SRT vs TXT',
      description: 'Perbedaan utama antara file subtitle SRT dan dokumen teks biasa TXT.',
      headers: ['Fitur', 'Format SRT (.srt)', 'Teks Biasa (.txt)'],
      rows: [
        ['Fungsi Utama', 'Sinkronisasi subtitle video', 'Membaca dan dokumentasi teks'],
        ['Penanda Waktu', 'Ada (contoh: 00:00:30,000 --> 00:00:35,000)', 'Tidak ada'],
        ['Nomor Baris', 'Ada (1, 2, 3...)', 'Tidak ada'],
        ['Tag Format', 'Bisa memuat tag HTML', 'Hanya teks murni'],
        ['Cocok Untuk', 'Pemutar video & editor', 'Membaca, catatan, dan AI'],
      ],
    },
    privacy: {
      title: 'Privasi & Keamanan Lokal',
      content: [
        'File Anda tidak pernah keluar dari perangkat Anda. Semua pemrosesan berlangsung via JavaScript di dalam browser.',
        'Aman untuk dokumen dan transkrip pribadi yang bersifat rahasia.',
      ],
    },
  },
  faqs: [
    {
      question: 'Apa itu file SRT?',
      answer: 'Format file subtitle standar yang berisi waktu tayang dan naskah dialog video.',
    },
    {
      question: 'Apakah waktu dan nomor subtitle terhapus?',
      answer: 'Ya, semua kode waktu dan angka penomoran akan dibersihkan secara otomatis.',
    },
    {
      question: 'Apakah file saya diunggah ke server?',
      answer: 'Tidak. Proses konversi berjalan 100% di browser lokal Anda.',
    },
    {
      question: 'Apakah mendukung karakter khusus dan Bahasa Indonesia?',
      answer: 'Ya, mendukung penuh standar Unicode UTF-8 untuk segala bahasa.',
    },
    {
      question: 'Bisakah digunakan di smartphone?',
      answer: 'Bisa, kompatibel dan responsif di browser HP Android dan iPhone.',
    },
    {
      question: 'Apakah tag HTML seperti <i> ikut terhapus?',
      answer: 'Ya, tag pemformatan akan dibersihkan agar hasil teks benar-benar rapi.',
    },
    {
      question: 'Apakah layanan ini gratis?',
      answer: 'Sepenuhnya gratis tanpa perlu mendaftar atau berlangganan.',
    },
    {
      question: 'Apakah ada batasan ukuran file?',
      answer: 'Tidak ada batasan file karena pemrosesan dilakukan oleh perangkat Anda sendiri.',
    },
  ],
};
