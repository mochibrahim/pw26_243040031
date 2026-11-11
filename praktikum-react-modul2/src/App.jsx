
import { useState, useEffect } from 'react';
import FormTransaksi from './FormTransaksi';
import DaftarTransaksi from './DaftarTransaksi';
import RingkasanSaldo from './RingkasanSaldo';
import './Keuangan.css';

function App() {
  // Mengambil data transaksi dari localStorage
  const [transaksi, setTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');

    if (dataTersimpan) {
      try {
        return JSON.parse(dataTersimpan);
      } catch {
        return [];
      }
    }

    return [];
  });

  // Menyimpan data setiap kali transaksi berubah
  useEffect(() => {
    localStorage.setItem(
      'catatan-keuangan',
      JSON.stringify(transaksi)
    );
  }, [transaksi]);

  // Menambahkan transaksi baru
  const tambahTransaksi = (transaksiBaru) => {
    setTransaksi((dataLama) => [
      ...dataLama,
      transaksiBaru,
    ]);
  };

  // Menghapus transaksi berdasarkan ID
  const hapusTransaksi = (id) => {
    setTransaksi((dataLama) =>
      dataLama.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="aplikasi-keuangan">
      <header className="header-keuangan">
        <h1>Catatan Keuangan Mini</h1>
        <p>Milik cimen and lala</p>
      </header>

      <RingkasanSaldo transaksi={transaksi} />

      <FormTransaksi onTambah={tambahTransaksi} />

      <DaftarTransaksi
        transaksi={transaksi}
        onHapus={hapusTransaksi}
      />
    </div>
  );
}

export default App;
