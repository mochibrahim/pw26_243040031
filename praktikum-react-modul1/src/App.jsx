import KartuProfil from './KartuProfil.jsx';
import KartuProyek from './KartuProyek.jsx';
// import BadgeSkill dan ItemMatkul tetap seperti kodemu yang lama

const daftarProyek = [
  {
    judul: 'Sistem Rental Mobil',
    deskripsi: 'Aplikasi untuk mengelola penyewaan mobil dan data pelanggan.',
    tagar: ['Java', 'MySQL'],
    link: 'https://github.com/Mochibrahim/sistem-rental-mobil',
  },
  {
    judul: 'Sistem Informasi Perpustakaan',
    deskripsi: 'Sistem pengelolaan data buku, anggota, dan peminjaman.',
    tagar: ['Java', 'Database'],
    link: 'https://github.com/Mochibrahim/sistem-perpustakaan',
  },
  {
    judul: 'Website Profil UMKM',
    deskripsi: 'Website untuk memperkenalkan produk dan informasi UMKM.',
    tagar: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Mochibrahim/website-umkm',
  },
  {
    judul: 'Aplikasi Daftar Tugas',
    deskripsi: 'Aplikasi sederhana untuk mencatat dan mengelola daftar tugas.',
    tagar: ['React JS', 'CSS'],
    link: 'https://github.com/Mochibrahim/daftar-tugas',
  },
];

function App() {
  return (
    <div>
      <h1>Praktikum Pemrograman Web</h1>
      <p>Laboratorium Informatika - Modul 1: Pengenalan React JS &amp; Vite</p>

      <h2>Profil Mahasiswa Praktikan</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <KartuProfil
          nama="Moch Ibrahim Movic"
          npm="243040031"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl="/foto_saya.jpeg"
        />
      </div>

      {/* Bagian Keahlian (BadgeSkill) dan Daftar Matkul (ItemMatkul)
          milikmu yang lama taruh di sini, jangan dihapus */}

      <h2>Showcase Portofolio Mini</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {daftarProyek.map((p) => (
          <KartuProyek
            key={p.judul}
            judul={p.judul}
            deskripsi={p.deskripsi}
            tagar={p.tagar}
            link={p.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;