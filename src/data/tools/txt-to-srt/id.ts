import type { TxtToSrtDetailContent } from "./types";

export const idContent: TxtToSrtDetailContent = {
  "metaTitle": "Konverter TXT ke SRT Gratis – Ubah Teks Menjadi Subtitle",
  "metaDescription": "Konversi transkrip TXT dan teks biasa ke file subtitle SRT online. Pembuatan timestamp otomatis, pengaturan cerdas, dan pemrosesan 100% privat di peramban.",
  "h1": "Konverter TXT ke SRT",
  "heroDescription": "Ubah naskah, transkrip dialog, dan dokumen teks menjadi file subtitle SubRip (.srt) dengan kode waktu berurutan otomatis yang dapat disesuaikan. Cepat, aman, dan gratis.",
  "toolName": "Konverter TXT ke SRT",
  "timingNotice": "Catatan Waktu: File teks biasa tidak memiliki kode waktu bawaan. Konverter kami otomatis membuat nomor urut dan timestamp berdasarkan preferensi Anda, yang dapat disesuaikan lebih lanjut di editor video.",
  "ui": {
    "pasteTitle": "Input Teks Biasa (.txt)",
    "pastePlaceholder": "Tempel teks atau transkrip Anda di sini (setiap baris atau paragraf menjadi baris subtitle)...\n\nContoh:\nHalo dan selamat datang di video tutorial ini.\nDalam panduan ini, kita membahas konversi subtitle.\nMari langsung mulai ke pembahasannya.",
    "orDivider": "ATAU",
    "uploadTitle": "Opsi 2 — Unggah File TXT",
    "convertButton": "Konversi ke SRT",
    "clearButton": "Hapus",
    "trySampleButton": "Coba Contoh",
    "livePreviewTitle": "Subtitle Dihasilkan (.srt)",
    "errorNoInput": "Silakan tempel teks atau unggah file .txt untuk dikonversi.",
    "pastedContentSource": "Konten Teks Ditempel",
    "dropzoneTitle": "Tarik & lepas file .txt Anda di sini",
    "dropzoneSubtitle": "atau klik untuk memilih dari perangkat Anda",
    "browseButton": "Pilih File TXT",
    "dropActiveText": "Lepaskan file TXT di sini...",
    "fileSelected": "File dipilih",
    "fileNameLabel": "Nama File",
    "fileSizeLabel": "Ukuran File",
    "cueCountLabel": "Subtitle Dibuat",
    "characterCountLabel": "Karakter",
    "downloadAction": "Unduh .srt",
    "copyAction": "Salin ke Papan Klip",
    "copiedSuccess": "Berhasil disalin ke papan klip!",
    "resetAction": "Konversi Teks Lain",
    "previewTitle": "Pratinjau SRT Dihasilkan",
    "previewEmpty": "Subtitle SRT Anda akan langsung muncul di sini setelah teks dimasukkan.",
    "timingOptionsTitle": "Pengaturan Waktu & Pemisahan",
    "optStartTime": "Waktu Mulai (detik)",
    "optDuration": "Durasi per Subtitle (detik)",
    "optGap": "Jeda antar Subtitle (detik)",
    "optSplitMethod": "Pisahkan Teks Berdasarkan",
    "optSplitParagraphs": "Paragraf (Baris Ganda)",
    "optSplitLines": "Setiap Baris (Baris Tunggal)",
    "optSplitSentences": "Kalimat (. ? !)",
    "timingNoticeBadge": "Timestamp Otomatis Dibuat",
    "errorInvalidFile": "Silakan unggah file teks (.txt) yang valid.",
    "errorEmptyFile": "File yang diunggah kosong.",
    "errorParseFailed": "Tidak dapat mengekstrak teks yang valid."
  },
  "sections": {
    "whatIsTxt": {
      "title": "Apa itu File Teks Biasa (TXT)?",
      "content": [
        "File TXT (.txt) adalah format dokumen digital paling mendasar dalam dunia komputer. Format ini hanya menyimpan karakter huruf, angka, kata, kalimat, dan jeda baris murni tanpa format khusus, dengan pengkodean universal seperti UTF-8 atau ASCII.",
        "Karena tidak memuat kode pemformatan rumit atau metadata berat, file TXT dapat dibuka di semua sistem operasi, ponsel pintar, dan editor teks. Pembuat konten sering menggunakannya untuk naskah narasi, transkrip wawancara, dan teks terjemahan.",
        "Namun, file teks biasa tidak memiliki koordinat waktu dan urutan nomor yang dibutuhkan pemutar video untuk menyinkronkan teks dengan audio. Membuka file TXT di pemutar media atau YouTube tidak akan menampilkan subtitle pada waktu yang tepat."
      ]
    },
    "whatIsSrt": {
      "title": "Apa itu File Subtitle SRT (SubRip)?",
      "content": [
        "File SRT (SubRip Text) adalah standar global untuk subtitle video digital dan closed caption. Didukung luas oleh YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve, dan pemutar media seperti VLC, file SRT menyusun dialog menjadi segmen waktu yang teratur.",
        "Setiap blok subtitle dalam file SRT yang valid harus mematuhi struktur empat bagian yang ketat:",
        "1. Nomor indeks berurutan (1, 2, 3, 4...)",
        "2. Timestamp mulai dan selesai yang presisi dalam format HH:MM:SS,mmm --> HH:MM:SS,mmm (Jam:Menit:Detik,Milidetik)",
        "3. Satu baris atau lebih teks dialog subtitle",
        "4. Satu baris kosong wajib untuk memisahkan dari blok subtitle berikutnya",
        "Tanpa struktur ini, pemutar video dan software editing tidak dapat mengetahui kapan subtitle harus muncul, berapa lama harus ditampilkan, dan kapan harus berganti ke kalimat berikutnya."
      ]
    },
    "whatIsConverter": {
      "title": "Apa itu Konverter TXT ke SRT?",
      "content": [
        "Konverter TXT ke SRT adalah alat penataan format cerdas yang menjembatani teks polos tanpa waktu menjadi file subtitle yang tersinkronisasi untuk video.",
        "Alat ini menerima transkrip teks, naskah video, catatan wawancara, atau teks terjemahan dan mengubahnya menjadi file SubRip (.srt) standar lengkap dengan nomor urut, tanda panah waktu (-->), presisi milidetik, dan spasi antar-blok.",
        "Konverter online kami beroperasi 100% di memori browser Anda menggunakan Web API modern. Naskah rahasia dan dokumen pribadi Anda tidak pernah dikirim ke server cloud mana pun."
      ]
    },
    "howToConvert": {
      "title": "Cara Mengonversi TXT ke SRT Langkah demi Langkah",
      "steps": [
        {
          "title": "1. Tempel Teks atau Unggah File",
          "description": "Ketik atau tempel transkrip Anda ke editor teks, atau unggah dokumen .txt dari komputer atau ponsel Anda."
        },
        {
          "title": "2. Atur Waktu dan Metode Pemisahan",
          "description": "Pilih pemisahan per baris, paragraf, atau kalimat, lalu tentukan durasi per subtitle (misalnya 3.0 detik) dan jeda istirahat (misalnya 0.5 detik)."
        },
        {
          "title": "3. Pratinjau Langsung Seketika",
          "description": "Lihat panel pratinjau yang langsung menghasilkan format waktu SRT standar dengan presisi hingga milidetik."
        },
        {
          "title": "4. Unduh atau Salin SRT",
          "description": "Klik \"Unduh .srt\" untuk menyimpan file ke perangkat Anda, atau salin teks untuk ditempelkan ke software editing video."
        }
      ]
    },
    "whyRenameDoesntWork": {
      "title": "Mengapa Sekadar Mengganti Nama .txt Menjadi .srt Tidak Berfungsi",
      "content": [
        "Salah satu kekeliruan umum di kalangan pembuat video adalah mengira bahwa hanya dengan mengubah ekstensi file dari 'transkrip.txt' menjadi 'transkrip.srt' pemutar video akan langsung mengenalinya sebagai subtitle.",
        "Ekstensi file hanya memberi tahu sistem operasi aplikasi apa yang harus membukanya, tanpa mengubah struktur data di dalamnya. Pemutar seperti VLC membutuhkan sintaks SubRip yang tepat. Jika menemukan teks biasa tanpa nomor urut dan interval waktu '00:00:00,000 --> 00:00:00,000', file akan diabaikan atau menimbulkan pesan error.",
        "Mengganti nama hanya berhasil jika file tersebut memang sudah berisi kode SRT yang tidak sengaja tersimpan sebagai .txt. Untuk teks biasa dan naskah, konversi nyata menggunakan alat kami mutlak diperlukan."
      ]
    },
    "timingAndSyncExplanation": {
      "title": "Cara Kerja Pembuatan Waktu Otomatis dan Sinkronisasi",
      "content": [
        "Karena file teks biasa tidak memuat informasi waktu, konverter kami menerapkan algoritma pembagian waktu kronologis yang teratur.",
        "Mulai dari waktu awal yang Anda tentukan (standar 00:00:01,000), setiap unit teks diberikan jendela tayang sesuai durasi yang dipilih (misal 3.0 detik). Setelah setiap subtitle, sistem menyisipkan jeda (misal 0.5 detik) sebelum subtitle berikutnya dimulai.",
        "Jika teks Anda sudah memuat penanda waktu (seperti [01:23] atau 00:02:15), parser pintar kami akan otomatis mendeteksi dan menghitung kode waktu mulai dan selesai yang sesuai.",
        "Tips praktis sinkronisasi: Waktu otomatis menyediakan kerangka kerja yang rapi dan benar secara sintaksis. Karena pembicara alami memiliki variasi kecepatan dan jeda bernapas, Anda disarankan melakukan sedikit penyesuaian geser di Premiere Pro, DaVinci Resolve, atau YouTube Studio agar pas dengan suara asli."
      ]
    },
    "realWorldUseCases": {
      "title": "Penggunaan Praktis Konversi TXT ke SRT",
      "cases": [
        {
          "title": "Subtitle Video YouTube dan Optimasi SEO",
          "description": "Unggah subtitle terstruktur ke YouTube untuk meningkatkan visibilitas pencarian, membantu penonton internasional, dan memperpanjang durasi tonton."
        },
        {
          "title": "Transkrip Podcast dan Webinar",
          "description": "Ubah rekaman wawancara audio menjadi trek subtitle untuk klip media sosial, audiogram, dan video promosi."
        },
        {
          "title": "Penerjemahan Konten Video Internasional",
          "description": "Terjemahkan naskah video asing ke teks biasa, ubah ke file SRT dengan ritme yang sesuai, dan masukkan ke proyek video Anda."
        },
        {
          "title": "Pasca-Pemrosesan Pengenalan Suara AI (STT)",
          "description": "Format teks mentah dari Whisper AI, dikte suara, atau notula rapat menjadi file subtitle yang siap diimpor."
        },
        {
          "title": "Kuliah Online dan Pembelajaran E-Learning",
          "description": "Sediakan subtitle yang mudah diakses untuk kursus online, seminar pelatihan, dan materi tutorial."
        },
        {
          "title": "Video Vertikal Media Sosial (Reels, TikTok, Shorts)",
          "description": "Impor file SRT ke CapCut atau Premiere untuk membuat animasi subtitle dinamis pada video berformat pendek."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Kendala Umum dan Cara Mengatasinya",
      "items": [
        {
          "title": "Subtitle menghilang terlalu cepat atau tampil terlalu lama",
          "description": "Sesuaikan opsi Durasi per Subtitle pada panel pengaturan. Kalimat cepat membutuhkan 2 hingga 3 detik, sedangkan kalimat panjang butuh 4 hingga 5 detik."
        },
        {
          "title": "Subtitle saling tumpang tindih waktu tayangnya",
          "description": "Konverter kami menerapkan perhitungan matematis agar tidak saling bertabrakan. Pastikan opsi jeda disetel antara 0.2 hingga 0.5 detik."
        },
        {
          "title": "Karakter khusus atau tanda baca rusak (mojibake)",
          "description": "Hal ini terjadi jika file disimpan dengan enkripsi lama seperti ANSI. Alat kami menggunakan UTF-8 universal sehingga semua karakter dan aksen tetap terjaga."
        },
        {
          "title": "Baris subtitle terlalu panjang untuk layar ponsel",
          "description": "Gunakan metode pemisahan berdasarkan 'Kalimat' atau 'Setiap Baris' alih-alih paragraf penuh agar teks tetap ringkas (di bawah 42 karakter per baris)."
        }
      ]
    },
    "comparison": {
      "title": "Perbandingan Teknis: TXT vs SRT",
      "description": "Pelajari perbedaan teknis mendasar antara teks biasa tanpa penunjuk waktu dan file subtitle SubRip yang tersinkronisasi.",
      "headers": [
        "Aspek Teknis",
        "Teks Biasa (.txt)",
        "Subtitle SubRip (.srt)"
      ],
      "rows": [
        [
          "Koordinat Waktu",
          "Tidak ada (tanpa waktu)",
          "Presisi milidetik (HH:MM:SS,mmm)"
        ],
        [
          "Penomoran Berurutan",
          "Tidak ada",
          "Wajib bilangan bulat urut (1, 2, 3...)"
        ],
        [
          "Pemisah Kode Waktu",
          "Tidak ada",
          "Tanda panah wajib (-->)"
        ],
        [
          "Dukungan Pemutar Video",
          "Tidak bisa dimuat sebagai subtitle",
          "Didukung langsung di VLC, YouTube, dll."
        ],
        [
          "Impor ke Editor Video",
          "Perlu penempatan manual",
          "Langsung menempel pada trek subtitle timeline"
        ],
        [
          "Tag Gaya Format",
          "Hanya teks polos",
          "Mendukung tag dasar (<i>, <b>, <font>)"
        ],
        [
          "Keunggulan Utama",
          "Kemudahan baca & dokumentasi",
          "Sinkronisasi audiovisual yang presisi"
        ]
      ]
    },
    "privacy": {
      "title": "Jaminan Privasi 100% di Peramban Anda",
      "content": [
        "Keamanan dan kerahasiaan data Anda terlindungi sepenuhnya. Berbeda dengan layanan berbasis cloud yang mengunggah teks Anda ke server eksternal, alat kami memproses semuanya secara lokal di dalam memori browser Anda.",
        "Naskah video rahasia, rekaman wawancara bisnis, dan dokumen pribadi Anda tidak pernah melewati jaringan internet. Anda bahkan dapat mematikan koneksi internet setelah halaman dimuat, dan konverter akan tetap berjalan lancar."
      ]
    }
  },
  "faqs": [
    {
      "question": "Bagaimana cara mengubah file TXT menjadi SRT?",
      "answer": "Tempelkan teks biasa ke editor atau unggah file .txt Anda. Pilih metode pemisahan (paragraf, baris, atau kalimat) serta durasi tayang yang diinginkan. Konverter akan menghitung kode waktu dan menghasilkan file .srt standar yang siap diunduh."
    },
    {
      "question": "Bisakah saya mengonversi TXT ke SRT tanpa menginstal software?",
      "answer": "Ya. Alat ini berjalan langsung di browser modern di komputer, tablet, maupun ponsel pintar tanpa perlu memasang aplikasi atau ekstensi apa pun."
    },
    {
      "question": "Apakah file TXT biasa memiliki timestamp subtitle?",
      "answer": "Tidak. File TXT standar hanya berisi teks dan baris baru. Oleh karena itu, konverter kami secara otomatis menambahkan nomor urut dan timestamp berdasarkan pengaturan yang Anda pilih."
    },
    {
      "question": "Bagaimana konverter menghitung timestamp secara otomatis?",
      "answer": "Konverter menggunakan sistem waktu linier berurutan. Dimulai dari waktu awal yang Anda tentukan (misalnya 1.0 detik), setiap baris diberi durasi (misalnya 3.0 detik), diikuti jeda jeda singkat (misalnya 0.5 detik) sebelum baris berikutnya dimulai."
    },
    {
      "question": "Bisakah saya mengonversi naskah panjang atau transkrip lengkap sekaligus?",
      "answer": "Ya. Anda cukup menyalin seluruh teks dan menempelkannya ke alat ini. Memilih pemisahan berdasarkan baris atau kalimat akan mengubah setiap kalimat menjadi satu balok subtitle mandiri."
    },
    {
      "question": "Apakah file SRT yang dihasilkan bisa langsung diunggah ke YouTube?",
      "answer": "Ya. File .srt yang dibuat mematuhi standar resmi SubRip dan dapat langsung diunggah di YouTube Studio pada tab Subtitle video Anda."
    },
    {
      "question": "Mengapa tidak cukup hanya dengan mengganti ekstensi file dari .txt ke .srt?",
      "answer": "Mengganti nama hanya mengubah label eksternal file, bukan struktur isinya. Pemutar video memerlukan nomor urut dan panah waktu standar (00:00:01,000 --> 00:00:04,000) untuk menampilkan teks."
    },
    {
      "question": "Bisakah saya mengedit waktu SRT setelah selesai dikonversi?",
      "answer": "Ya. File .srt adalah format teks terbuka yang dapat dibuka di Notepad atau dimasukkan ke software editing (Premiere Pro, DaVinci Resolve, Subtitle Edit) untuk penyelarasan lebih detail."
    },
    {
      "question": "Apakah alat ini mendukung bahasa selain bahasa Inggris seperti Arab, Jepang, dan Indonesia?",
      "answer": "Ya. Alat ini mendukung standar UTF-8 Unicode secara menyeluruh untuk semua bahasa di dunia, termasuk aksara Arab kanan-ke-kiri (RTL), Kanji Jepang, Hangeul Korea, dan tanda baca khusus."
    },
    {
      "question": "Apakah file atau teks saya diunggah ke server?",
      "answer": "Tidak. Semua pemrosesan berlangsung 100% di perangkat Anda menggunakan JavaScript di browser. Teks maupun file Anda tidak pernah dikirimkan ke server eksternal."
    },
    {
      "question": "Apa yang harus dilakukan jika subtitle sedikit tidak pas dengan suara di video?",
      "answer": "Karena waktu otomatis menggunakan estimasi rata-rata, Anda dapat menyesuaikan opsi durasi di alat ini, atau menggeser trek subtitle sedikit di software video editor atau YouTube Studio agar sesuai dengan jeda ucapan yang sebenarnya."
    },
    {
      "question": "Berapa durasi ideal untuk satu baris subtitle?",
      "answer": "Standar internasional merekomendasikan kecepatan baca antara 21 hingga 24 karakter per detik, yang setara dengan sekitar 2.5 hingga 4 detik untuk satu baris kalimat standar berisi 30 hingga 40 karakter."
    }
  ]
};
