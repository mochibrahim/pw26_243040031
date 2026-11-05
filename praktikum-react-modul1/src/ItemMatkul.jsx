function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div className="item-matkul">
      <div>
        <strong>{nama}</strong>
        <p>{kode} | {hari}</p>
      </div>

      <span>{sks} SKS</span>
    </div>
  );
}

export default ItemMatkul;