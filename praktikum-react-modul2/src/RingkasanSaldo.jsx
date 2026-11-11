
function RingkasanSaldo({ transaksi }) {
  const totalPemasukan = transaksi
    .filter((item) => item.jenis === 'Pemasukan')
    .reduce((total, item) => total + item.nominal, 0);

  const totalPengeluaran = transaksi
    .filter((item) => item.jenis === 'Pengeluaran')
    .reduce((total, item) => total + item.nominal, 0);

  const saldo = totalPemasukan - totalPengeluaran;

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="ringkasan-saldo">
      <div className="kotak-saldo">
        <h3>Total Pemasukan</h3>
        <p className="nominal-masuk">
          {formatRupiah(totalPemasukan)}
        </p>
      </div>

      <div className="kotak-saldo">
        <h3>Total Pengeluaran</h3>
        <p className="nominal-keluar">
          {formatRupiah(totalPengeluaran)}
        </p>
      </div>

      <div className="kotak-saldo utama">
        <h3>Total Saldo</h3>
        <p>{formatRupiah(saldo)}</p>
      </div>
    </div>
  );
}

export default RingkasanSaldo;
