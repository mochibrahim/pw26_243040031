
function DaftarTransaksi({ transaksi, onHapus }) {
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="daftar-transaksi">
      <h2>Daftar Transaksi</h2>

      {transaksi.length === 0 ? (
        <p className="pesan-kosong">
          Belum ada transaksi. Silakan tambahkan transaksi!
        </p>
      ) : (
        <ul>
          {transaksi.map((item) => (
            <li key={item.id} className="item-transaksi">
              <div>
                <strong>{item.keterangan}</strong>
                <p>{item.jenis}</p>
              </div>

              <span
                className={
                  item.jenis === 'Pemasukan'
                    ? 'nominal-masuk'
                    : 'nominal-keluar'
                }
              >
                {item.jenis === 'Pemasukan' ? '+' : '-'}
                {formatRupiah(item.nominal)}
              </span>

              <button
                className="tombol-hapus"
                onClick={() => onHapus(item.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DaftarTransaksi;
