import type { SrtToVttDetailContent } from './types';

export const idContent: SrtToVttDetailContent = {
  "metaTitle": "Konverter SRT ke VTT Gratis Online – Cepat & 100% di Browser",
  "metaDescription": "Konversi file subtitle SRT ke format WebVTT (.vtt) online gratis. Otomatis menambahkan header WEBVTT dan mengubah koma timestamp dengan privasi 100%.",
  "h1": "Konverter SRT ke VTT",
  "heroDescription": "Ubah subtitle SubRip (.srt) menjadi format standar WebVTT (.vtt) yang kompatibel dengan W3C untuk pemutar video HTML5, web streaming, dan aplikasi modern. 100% gratis, instan, dan aman di browser Anda.",
  "toolName": "Konverter SRT ke VTT",
  "ui": {
    "pasteTitle": "Masukan Teks Subtitle SRT (.srt)",
    "pastePlaceholder": "Tempel teks SRT Anda di sini (contoh:\n1\n00:00:01,000 --> 00:00:04,000\nSelamat datang di video tutorial kami!)...",
    "orDivider": "ATAU",
    "uploadTitle": "Opsi 2 — Unggah File SRT",
    "convertButton": "Konversi ke VTT",
    "clearButton": "Hapus",
    "trySampleButton": "Coba Contoh",
    "livePreviewTitle": "Hasil WebVTT Terkonversi (.vtt)",
    "errorNoInput": "Silakan tempel teks subtitle SRT atau unggah file .srt untuk memulai.",
    "pastedContentSource": "Teks SRT Ditempel",
    "dropzoneTitle": "Tarik & lepas file .srt Anda di sini",
    "dropzoneSubtitle": "atau klik untuk memilih dari perangkat Anda",
    "browseButton": "Pilih File SRT",
    "dropActiveText": "Lepas file SRT di sini...",
    "fileSelected": "File terpilih",
    "fileNameLabel": "Nama File",
    "fileSizeLabel": "Ukuran File",
    "cueCountLabel": "Subtitle Dikonversi",
    "characterCountLabel": "Karakter",
    "downloadAction": "Unduh .vtt",
    "copyAction": "Salin ke Papan Klip",
    "copiedSuccess": "Berhasil disalin!",
    "resetAction": "Konversi File Lain",
    "previewTitle": "Pratinjau WebVTT Terkonversi",
    "previewEmpty": "Subtitle WebVTT (.vtt) hasil konversi Anda akan langsung muncul di sini setelah memasukkan teks atau mengunggah file SRT.",
    "optionsTitle": "Opsi Konversi",
    "optIncludeCueNumbers": "Pertahankan nomor urut subtitle (cue index)",
    "optCleanTags": "Bersihkan tag HTML usang yang tidak didukung (mis. <font>)",
    "errorInvalidFile": "Silakan unggah file subtitle .srt yang valid.",
    "errorEmptyFile": "File atau teks yang dimasukkan kosong.",
    "errorParseFailed": "Gagal mendeteksi blok subtitle SRT yang valid. Pastikan penanda waktu menggunakan format 00:00:00,000 --> 00:00:00,000."
  },
  "sections": {
    "whatIsSrt": {
      "title": "Apa itu File SRT?",
      "content": [
        "File SRT (SubRip Subtitle) adalah format subtitle teks biasa yang paling populer dan banyak digunakan dalam sejarah video digital. Bermula dari perangkat lunak Windows SubRip —yang dirancang untuk mengekstrak subtitle dan penanda waktu dari kepingan DVD fisik— format .srt berkembang menjadi standar universal untuk pemutar media komputer, televisi, platform berbagi video, dan software penyunting video profesional.",
        "Secara struktural, file SRT terdiri dari blok-blok subtitle berurutan yang dipisahkan oleh baris kosong. Setiap blok memuat empat bagian utama: nomor urut (1, 2, 3...), penanda waktu presisi yang menunjukkan kapan teks muncul dan hilang (berformat jam:menit:detik,milidetik: 00:00:01,250 --> 00:00:04,500), satu atau beberapa baris dialog, dan diakhiri satu baris kosong.",
        "Meskipun format SRT sangat sederhana dan didukung oleh hampir semua media player mandiri seperti VLC Media Player, MPV, HandBrake, dan Premiere Pro, format ini diciptakan sebelum era web modern. Akibatnya, SRT tidak didukung secara bawaan oleh browser web HTML5 dan tidak menyediakan mekanisme standar untuk penyesuaian font responsif, pengaturan tata letak, ataupun styling dengan CSS."
      ]
    },
    "whatIsVtt": {
      "title": "Apa itu File WebVTT (.vtt)?",
      "content": [
        "WebVTT (Web Video Text Tracks) adalah format standar terbuka resmi untuk subtitle, teks keterangan, dan bab video di web yang dikembangkan oleh World Wide Web Consortium (W3C) dan WHATWG. Diperkenalkan bersamaan dengan spesifikasi HTML5, WebVTT didukung secara bawaan oleh seluruh browser modern —termasuk Google Chrome, Mozilla Firefox, Apple Safari, dan Microsoft Edge— tanpa memerlukan library JavaScript tambahan ataupun plugin eksternal.",
        "File WebVTT dikenali dari baris pembukanya yang wajib: baris pertama dokumen harus diawali dengan teks \"WEBVTT\". Setelah header ini, file WebVTT dapat memuat blok metadata opsional (seperti judul, bahasa, atau nama pembuat) serta aturan gaya tampilan sebelum rangkaian subtitle dimulai.",
        "Selain menampilkan dialog teks, WebVTT dirancang khusus untuk antarmuka web modern yang responsif. Format ini mendukung pengaturan bawaan untuk posisi vertikal, perataan horizontal, penempatan baris, dan ukuran kotak teks. Terlebih lagi, WebVTT terintegrasi sempurna dengan CSS melalui pseudo-element ::cue, memungkinkan desainer mengontrol font, bayangan teks, opasitas latar belakang, dan palet warna langsung dari stylesheet situs mereka."
      ]
    },
    "whatIsConverter": {
      "title": "Apa itu Konverter SRT ke VTT?",
      "content": [
        "Konverter SRT ke VTT adalah alat bantu subtitle khusus yang menjembatani format video desktop konvensional dengan kebutuhan penayangan video web modern. Alat ini menganalisis sintaks file SubRip (.srt), melakukan transformasi matematis dan struktural, serta menghasilkan file WebVTT (.vtt) yang valid dan mematuhi standar W3C untuk langsung dipasang pada elemen <video> HTML5.",
        "Perubahan struktural terpenting yang dilakukan oleh konverter ini adalah penyesuaian pemisah milidetik pada penanda waktu. Pada format SRT standar, milidetik diawali dengan tanda koma (contohnya 00:01:23,450). Namun, spesifikasi WebVTT mewajibkan tanda titik ASCII (00:01:23.450). Satu koma saja pada file WebVTT dapat menyebabkan browser menolak seluruh trek subtitle atau gagal menampilkan teks.",
        "Konverter kami menjalankan seluruh proses analisis, penyesuaian penanda waktu, dan pembuatan file 100% secara lokal di browser Anda. Tidak ada data yang dikirim ke server luar, menghadirkan kecepatan instan, privasi mutlak, serta tanpa batas ukuran file."
      ]
    },
    "srtVsVtt": {
      "title": "Perbedaan Teknis Utama: SRT vs VTT",
      "content": [
        "Meskipun SRT dan WebVTT memiliki susunan teks yang mirip, terdapat perbedaan arsitektur yang sangat signifikan antara keduanya:",
        "1. Header File Wajib: File SRT langsung dimulai dengan angka \"1\" di baris pertama. Sebaliknya, file WebVTT WAJIB diawali dengan kata \"WEBVTT\" di baris pertama dokumen. Tanpa header ini, browser akan menganggap file tersebut tidak valid.",
        "2. Tanda Milidetik pada Timestamp: SRT menggunakan koma (00:00:05,200), sedangkan WebVTT menggunakan tanda titik (00:00:05.200). WebVTT juga mengizinkan timestamp pendek tanpa jam (contoh: 05.200 --> 08.400) untuk video pendek, meskipun format lengkap HH:MM:SS.mmm tetap disarankan.",
        "3. Pengaturan Posisi di Layar: Format SRT tidak memiliki cara baku untuk mengatur posisi teks; semuanya berada di tengah bawah. WebVTT mendukung parameter posisi langsung pada baris waktu (\"line:10%\", \"position:80%\", \"align:left\", \"size:50%\"), mencegah subtitle menutupi nama narasumber atau grafik penting di bagian bawah video.",
        "4. Kemampuan Gaya dan Tampilan: SRT mengandalkan tag lama seperti <i>, <b>, dan <font color=\"...\"> yang sering dinonaktifkan oleh pemutar web demi keamanan. WebVTT mendukung tag suara pembicara (<v Pembicara>), anotasi ruby, kelas CSS (<c.sorotan>), dan styling visual menyeluruh via CSS ::cue.",
        "5. Kompatibilitas Streaming HLS & DASH: Protokol streaming modern seperti Apple HLS dan MPEG-DASH mendistribusikan subtitle dalam bentuk potongan segmen WebVTT. Menggunakan file SRT mentah pada manifest HLS akan memicu kegagalan pemutaran di Safari dan perangkat iOS."
      ]
    },
    "whyConvert": {
      "title": "Mengapa Mengonversi SRT ke VTT?",
      "benefits": [
        {
          "title": "Kompatibilitas Penuh Video HTML5",
          "description": "Diputar secara native di Google Chrome, Safari, Firefox, dan Edge melalui tag <track> tanpa perlu library JavaScript eksternal."
        },
        {
          "title": "Kustomisasi Tampilan Penuh dengan CSS",
          "description": "Sesuaikan font, warna teks, transparansi latar belakang, bayangan, dan batas subtitle menggunakan pseudo-element ::cue."
        },
        {
          "title": "Penempatan Posisi Tepat di Layar",
          "description": "Atur posisi subtitle di atas, bawah, atau samping agar tidak menutupi grafik, teks penting, ataupun wajah pembicara."
        },
        {
          "title": "Standar Industri Streaming HLS & DASH",
          "description": "Format baku yang dipersyaratkan oleh platform streaming adaptif (Apple HLS, AWS Elemental, Cloudflare Stream) untuk subtitle multibahasa."
        },
        {
          "title": "Meningkatkan Aksesibilitas & SEO Video",
          "description": "Membantu penonton tunarungu dan memungkinkan mesin pencari seperti Google mengindeks dialog percakapan dalam video Anda."
        },
        {
          "title": "Ukuran Ringan & Pemuatan Instan",
          "description": "File teks murni UTF-8 berukuran beberapa kilobyte saja, dapat dimuat dengan sangat cepat tanpa memperlambat performa web."
        }
      ]
    },
    "howToConvert": {
      "title": "Cara Mengonversi SRT ke VTT dalam 3 Langkah Mudah",
      "steps": [
        {
          "title": "1. Tempel Teks atau Unggah File .srt",
          "description": "Tempel teks subtitle SRT di kolom sebelah kiri atau seret file .srt Anda ke area unggah. Anda juga bisa mengklik \"Pilih File SRT\"."
        },
        {
          "title": "2. Konversi Otomatis di Browser",
          "description": "Alat ini secara instan memproses blok subtitle, menambahkan header WEBVTT, mengganti koma timestamp menjadi titik, dan memperbarui pratinjau secara real-time."
        },
        {
          "title": "3. Salin atau Unduh File WebVTT",
          "description": "Klik tombol \"Unduh .vtt\" untuk menyimpan file ke perangkat Anda, atau klik \"Salin ke Papan Klip\" untuk langsung memakainya dalam proyek web Anda."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Masalah Umum Format SRT & VTT Beserta Solusinya",
      "items": [
        {
          "title": "Masalah: Subtitle tidak muncul di browser web (Pemisah Koma)",
          "description": "Penyebab: File masih menggunakan koma pada penanda waktu SRT (mis. 00:00:02,500). Parser browser akan gagal membacanya. Solusi: Ubah semua koma menjadi titik (00:00:02.500) menggunakan konverter kami."
        },
        {
          "title": "Masalah: Browser menolak file dengan kesalahan sintaks (Header Hilang)",
          "description": "Penyebab: Mengubah ekstensi dari .srt ke .vtt tanpa menyertakan header wajib. Solusi: Baris pertama file harus memuat teks \"WEBVTT\" diikuti baris kosong."
        },
        {
          "title": "Masalah: Karakter berantakan atau simbol rusak (Encoding & BOM)",
          "description": "Penyebab: File disimpan dalam format ANSI, UTF-16, atau UTF-8 dengan Byte Order Mark (BOM). Solusi: Konverter kami secara otomatis membuang BOM dan merapikan teks ke format UTF-8 bersih."
        },
        {
          "title": "Masalah: Timestamp bertumpuk dan teks berkedip",
          "description": "Penyebab: Subtitle 1 berakhir di 00:00:05.000 tetapi subtitle 2 sudah dimulai di 00:00:04.500. Solusi: Pastikan waktu akhir subtitle sebelumnya tidak melebihi waktu mulai subtitle berikutnya."
        },
        {
          "title": "Masalah: Permintaan diblokir oleh kebijakan CORS",
          "description": "Penyebab: Saat file .vtt di-host pada domain atau CDN berbeda dari halaman video, browser memblokir request. Solusi: Konfigurasikan header \"Access-Control-Allow-Origin: *\" pada server CDN Anda."
        }
      ]
    },
    "html5VideoGuide": {
      "title": "Cara Menggunakan Subtitle VTT pada Video HTML5",
      "description": "Menyematkan subtitle WebVTT pada pemutar video HTML5 sangatlah mudah: Anda hanya perlu menambahkan tag bawaan <track> di dalam elemen <video>. Berikut struktur kode standar yang digunakan para web developer:",
      "codeSnippet": "<video controls width=\"800\" poster=\"/gambar/poster.jpg\">\n  <!-- File sumber video utama -->\n  <source src=\"/video/tutorial.mp4\" type=\"video/mp4\">\n  <source src=\"/video/tutorial.webm\" type=\"video/webm\">\n\n  <!-- Trek Subtitle WebVTT -->\n  <track \n    kind=\"subtitles\" \n    src=\"/subtitle/tutorial-id.vtt\" \n    srclang=\"id\" \n    label=\"Bahasa Indonesia\" \n    default>\n  \n  <track \n    kind=\"subtitles\" \n    src=\"/subtitle/tutorial-en.vtt\" \n    srclang=\"en\" \n    label=\"English\">\n\n  <p>Browser Anda tidak mendukung video HTML5. <a href=\"/video/tutorial.mp4\">Unduh videonya</a> untuk menonton.</p>\n</video>",
      "explanation": [
        {
          "term": "kind=\"subtitles\"",
          "description": "Menentukan jenis trek teks. Gunakan \"subtitles\" untuk terjemahan dialog, atau \"captions\" untuk teks keterangan lengkap bagi penonton tunarungu yang memuat deskripsi efek suara."
        },
        {
          "term": "src=\"jalur/ke/file.vtt\"",
          "description": "Alamat URL relatif atau absolut file WebVTT Anda. Pastikan server web menyajikan file dengan header Content-Type \"text/vtt; charset=utf-8\"."
        },
        {
          "term": "srclang=\"id\"",
          "description": "Kode bahasa standar BCP 47 (seperti \"id\" untuk Bahasa Indonesia, \"en\" untuk Inggris). Informasi ini penting bagi screen reader dan mesin penerjemah otomatis."
        },
        {
          "term": "label=\"Bahasa Indonesia\"",
          "description": "Nama deskriptif yang tampil di menu pilihan subtitle (CC) pemutar video agar memudahkan penonton memilih bahasa."
        },
        {
          "term": "default",
          "description": "Atribut penanda agar trek ini langsung aktif secara otomatis saat video mulai diputar, kecuali jika penonton telah memiliki preferensi lain."
        }
      ]
    },
    "comparison": {
      "title": "Perbandingan Spesifikasi Teknis: SRT vs WebVTT",
      "description": "Tinjau perbedaan kemampuan teknis, kompatibilitas, dan fitur antara SubRip (.srt) dan WebVTT (.vtt):",
      "headers": [
        "Aspek Teknis",
        "SubRip (.srt)",
        "WebVTT (.vtt)"
      ],
      "rows": [
        [
          "Lingkungan Penggunaan Utama",
          "Aplikasi pemutar desktop (VLC) & software editing",
          "Browser web HTML5, aplikasi mobile & streaming"
        ],
        [
          "Header Pembuka Wajib",
          "Tidak ada (langsung mulai dari angka 1)",
          "Wajib \"WEBVTT\" di baris pertama"
        ],
        [
          "Pemisah Milidetik",
          "Koma (contoh: 00:01:23,450)",
          "Titik (contoh: 00:01:23.450)"
        ],
        [
          "Pemutaran Web Native",
          "Tidak (membutuhkan library JS tambahan)",
          "Ya (native via tag <track> di semua browser)"
        ],
        [
          "Dukungan Styling Tampilan",
          "Tag lama terbatas (<i>, <b>, <font>)",
          "Styling penuh berbasis CSS via pseudo-element ::cue"
        ],
        [
          "Pengaturan Posisi di Layar",
          "Tidak baku (biasanya hanya di tengah bawah)",
          "Atribut native: line, position, size, align"
        ],
        [
          "Streaming HLS / MPEG-DASH",
          "Tidak didukung (wajib dikonversi)",
          "Format standar baku untuk transmisi streaming"
        ],
        [
          "Dukungan Komentar & Metadata",
          "Tidak memiliki sintaks komentar resmi",
          "Mendukung blok NOTE dan header STYLE"
        ],
        [
          "Ekstensi File Umum",
          ".srt",
          ".vtt"
        ],
        [
          "MIME Type Standar",
          "application/x-subrip",
          "text/vtt; charset=utf-8"
        ]
      ]
    },
    "privacy": {
      "title": "Jaminan Privasi & Keamanan 100% di Browser Anda",
      "content": [
        "Di SRTConverters.info, kami mengutamakan kerahasiaan dan privasi data Anda. Seluruh konversi dari SRT ke WebVTT diproses sepenuhnya di dalam mesin browser lokal Anda menggunakan JavaScript sisi klien.",
        "File subtitle, naskah video rahasia, rekaman wawancara, dan data pribadi Anda tidak pernah dikirim, disimpan, atau diproses di server pihak ketiga. Anda bahkan bisa mematikan koneksi internet setelah membuka halaman ini, dan alat konversi akan tetap bekerja dengan sempurna.",
        "Arsitektur pemrosesan lokal ini meniadakan segala risiko kebocoran informasi, menjadikan alat kami sangat aman untuk presentasi perusahaan, arsip hukum, berkas medis, dan materi sensitif lainnya."
      ]
    }
  },
  "faqs": [
    {
      "question": "Bolehkah saya hanya mengganti ekstensi file dari .srt menjadi .vtt?",
      "answer": "Tidak boleh. Mengubah ekstensi saja tidak akan membuat file tersebut valid sebagai WebVTT. WebVTT mewajibkan adanya header \"WEBVTT\" di baris pertama dan mengharuskan pemisah milidetik menggunakan tanda titik, bukan koma (00:00:01.000 bukan 00:00:01,000). Browser web akan menolak file SRT yang hanya diganti namanya."
    },
    {
      "question": "Mengapa subtitle WebVTT saya tidak muncul di video HTML5?",
      "answer": "Penyebab umumnya ada tiga: 1) File tidak memuat header \"WEBVTT\" di baris pertama; 2) Penanda waktu masih menggunakan tanda koma dan bukan titik; atau 3) Server web belum menyajikan file dengan MIME type \"text/vtt\" atau terhalang aturan CORS. Konverter kami memastikan format teks Anda 100% tepat."
    },
    {
      "question": "Apa perbedaan antara subtitles dan captions pada WebVTT?",
      "answer": "Subtitles (kind=\"subtitles\") ditujukan bagi penonton yang dapat mendengar audio namun membutuhkan terjemahan bahasa; format ini hanya memuat teks dialog. Sementara Captions (kind=\"captions\") dibuat untuk penonton tunarungu; selain dialog, terdapat deskripsi efek suara, suasana musik, dan identifikasi nama pembicara (mis. [Tepuk tangan], [Musik ceria]). Keduanya didukung oleh WebVTT di HTML5."
    },
    {
      "question": "Bagaimana cara mengubah gaya tampilan subtitle WebVTT dengan CSS?",
      "answer": "Anda dapat menyesuaikan tampilan subtitle secara langsung di file CSS situs Anda menggunakan pseudo-element ::cue. Contoh: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }"
    },
    {
      "question": "Apakah WebVTT berfungsi di ponsel seperti iPhone (Safari) dan Android (Chrome)?",
      "answer": "Ya! WebVTT didukung secara menyeluruh di semua browser ponsel modern, termasuk Safari di iOS dan Chrome di Android. Saat video diputar dalam mode layar penuh di HP, sistem operasi akan menampilkan subtitle WebVTT sesuai preferensi aksesibilitas perangkat pengguna."
    },
    {
      "question": "Bisakah saya mengunggah file WebVTT (.vtt) ke YouTube dan Vimeo?",
      "answer": "Bisa. Baik YouTube maupun Vimeo menyediakan dukungan bawaan untuk unggahan subtitle berformat WebVTT selain SRT. WebVTT memberikan keunggulan ekstra jika subtitle Anda memuat pengaturan koordinat posisi khusus."
    },
    {
      "question": "Apakah ada batasan ukuran file saat mengonversi di website ini?",
      "answer": "Tidak ada batasan. Karena semua pemrosesan berjalan langsung di komputer atau ponsel Anda tanpa melewati server eksternal, tidak ada batasan ukuran file, kuota penggunaan, ataupun biaya langganan. Anda bebas mengonversi film panjang atau rekaman seminar berdurasi jam-jaman secara leluasa."
    },
    {
      "question": "Apakah konverter ini mendukung huruf non-Latin, aksen, dan emoji?",
      "answer": "Ya. Konverter kami menerapkan pengolahan karakter berbasis UTF-8, sehingga aksen huruf, karakter non-Latin (seperti aksara Arab, Jepang, Korea, atau Vietnam), tanda baca khusus, dan emoji Unicode akan tetap terjaga rapi tanpa rusak."
    }
  ]
};
