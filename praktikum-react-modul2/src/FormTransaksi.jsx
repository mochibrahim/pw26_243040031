
import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('Pemasukan');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keterangan.trim() || Number(nominal) <= 0) {
      return;
    }

    onTambah({
      id: Date.now(),
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis,
    });

    setKeterangan('');
    setNominal('');
    setJenis('Pemasukan');
  };

  return (
    <form onSubmit={handleSubmit} className="form-transaksi">
      <h2>Tambah Transaksi</h2>

      <label>Keterangan</label>
      <input
        type="text"
        placeholder="Contoh: Beli makanan"
        value={keterangan}
        onChange={(e) => setKeterangan(e.target.value)}
        required
      />

      <label>Nominal (Rp)</label>
      <input
        type="number"
        placeholder="Masukkan nominal"
        value={nominal}
        onChange={(e) => setNominal(e.target.value)}
        min="1"
        required
      />

      <label>Jenis Transaksi</label>
      <select
        value={jenis}
        onChange={(e) => setJenis(e.target.value)}
      >
        <option value="Pemasukan">Pemasukan</option>
        <option value="Pengeluaran">Pengeluaran</option>
      </select>

      <button type="submit" className="tombol-tambah">
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;
