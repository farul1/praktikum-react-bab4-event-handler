# 🧩 Praktikum React Bab 4 – Event Handler

Repositori ini berisi hasil praktikum **Bab 4: Event Handler** pada pembelajaran ReactJS.  
Tujuan dari praktikum ini adalah memahami cara menangani event pada komponen React, baik menggunakan **Functional Component** maupun **Class Component**.

---

## 📁 Struktur Folder

praktikum-react-bab4-event-handler/
│
├── 04_event_handler/
│ ├── index.html
│ ├── event_handler.js # Versi Functional Component
│ └── event_handler_class.js # Versi Class Component
│
├── Counter_class/
│ ├── index.html
│ └── Counter.js # Counter menggunakan Class Component
│
└── CounterFunctional/
├── index.html
└── CounterFunctional.js # Counter menggunakan Functional Component


---

## ⚙️ Cara Menjalankan

1. Buka salah satu folder (misalnya `04_event_handler`).
2. Klik kanan pada file `index.html` → pilih **Open with Live Server** *(atau buka manual di browser)*.
3. Pastikan koneksi internet aktif karena file menggunakan CDN:
   - React
   - ReactDOM
   - Babel

---

## 💡 Penjelasan Singkat

### 🔸 Functional Component (`event_handler.js`)
- Menggunakan fungsi untuk membuat komponen.
- Event ditangani dengan arrow function.
- Cocok untuk komponen yang ringan dan sederhana.

### 🔸 Class Component (`event_handler_class.js`)
- Menggunakan class yang mewarisi `React.Component`.
- Event handler ditulis dalam method class.
- Memungkinkan penggunaan **state** dan **lifecycle** (pada React versi lama).

### 🔸 Counter Component
Menampilkan contoh implementasi **state** untuk menambah dan mengurangi angka menggunakan dua pendekatan berbeda:
- `Counter.js` → Class Component  
- `CounterFunctional.js` → Functional Component (dengan hook `useState`)

---

## ✍️ Pembuat
**Nama:** Syafarul Priwantoro  
**Mata Kuliah:** Pemrograman Aplikasi Berbasis Praktikum (PAB)  
**Topik:** ReactJS – Event Handler dan Component
