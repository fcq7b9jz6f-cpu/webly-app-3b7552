import React from "react";

const songs = [
  { title: "إنت عمري", poet: "أحمد شفيق كامل", composer: "محمد عبد الوهاب" },
  { title: "الأطلال", poet: "إبراهيم ناجي", composer: "رياض السنباطي" },
  { title: "ألف ليلة وليلة", poet: "مرسي جميل عزيز", composer: "بليغ حمدي" },
  { title: "أمل حياتي", poet: "أحمد شفيق كامل", composer: "محمد عبد الوهاب" },
  { title: "سيرة الحب", poet: "مرسي جميل عزيز", composer: "بليغ حمدي" },
  { title: "فات الميعاد", poet: "مرسي جميل عزيز", composer: "بليغ حمدي" }
];

export default function Songs() {
  return (
    <section className="section songs-section">
      <h2 className="title-gold">أيقونات غنائية</h2>
      <div className="songs-grid">
        {songs.map((song, index) => (
          <div key={index} className="song-card">
            <h3>{song.title}</h3>
            <p>كلمات: {song.poet}</p>
            <p>ألحان: {song.composer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
