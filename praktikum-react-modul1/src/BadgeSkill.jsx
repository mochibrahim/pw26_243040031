function BadgeSkill({ namaSkill, level }) {
  const warnaLevel = {
    Pemula: "pemula",
    Menengah: "menengah",
    Mahir: "mahir",
  };

  return (
    <span className={`badge-skill ${warnaLevel[level] || "pemula"}`}>
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;