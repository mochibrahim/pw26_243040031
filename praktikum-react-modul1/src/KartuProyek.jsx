function KartuProyek({ judul, deskripsi, tagar, link }) {
  return (
    <div
      style={{
        border: '1px solid #D0D7DE',
        borderRadius: '10px',
        padding: '20px',
        backgroundColor: '#FFFFFF',
        color: '#222222',
        boxShadow: '0 4px 4px -1px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h3 style={{ marginTop: 0, color: '#1E3A8A' }}>{judul}</h3>
        <p>{deskripsi}</p>

        <div style={{ marginBottom: '16px' }}>
          {tagar.map((t) => (
            <span
              key={t}
              style={{
                display: 'inline-block',
                backgroundColor: '#E0E7FF',
                color: '#1E3A8A',
                padding: '2px 10px',
                borderRadius: '999px',
                fontSize: '0.85rem',
                marginRight: '6px',
                marginBottom: '6px',
              }}
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          textAlign: 'center',
          backgroundColor: '#24292F',
          color: '#FFFFFF',
          padding: '8px 16px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Lihat Repository GitHub
      </a>
    </div>
  );
}

export default KartuProyek;