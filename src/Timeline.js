import React from "react";

const milstones = [
  { year: "1898", event: "الميلاد في طماي الزهايرة (التاريخ المرجح)." },
  { year: "1923", event: "الانتقال النهائي إلى القاهرة وبداية الاحتراف." },
  { year: "1926", event: "تأسيس أول تخت موسيقي خاص بها بدلاً من البطانة." },
  { year: "1934", event: "افتتاح الإذاعة المصرية بصوتها كأول فنانة تغني فيها." },
  { year: "1944", event: "تكريم الملك فاروق لها بمنحها وسام الكمال." },
  { year: "1954", event: "الزواج من الدكتور حسن الحفناوي." },
  { year: "1964", event: "لقاء السحاب لأول مرة مع محمد عبد الوهاب في 'إنت عمري'." },
  { year: "1967", event: "بدء جولاتها العالمية لدعم المجهود الحربي بعد النكسة." },
  { year: "1973", event: "تسجيل آخر أغانيها 'حكم علينا الهوى'." },
  { year: "1975", event: "رحيل الهرم الرابع عن عالمنا وحزن عميق في أرجاء الوطن العربي." }
];

export default function Timeline() {
  return (
    <section className="section timeline-section">
      <h2 className="title-gold">محطات في حياة الكوكب</h2>
      <div className="timeline-grid">
        {milstones.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="year">{item.year}</span>
            <p>{item.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
