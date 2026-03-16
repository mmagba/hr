import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#213988] hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] rounded px-1 py-1">
            <ArrowLeft className="w-5 h-5 ml-2" aria-hidden="true" />
            חזרה לדף הבית
          </Link>
        </div>

        <main id="main-content">
          <h1 className="text-3xl md:text-4xl font-bold text-[#213988] mb-6">מדיניות פרטיות</h1>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              אנו ב-<strong>Enas HR</strong> מכבדים את פרטיותך ומחויבים להגן על המידע האישי שאתה משתף איתנו.
              מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים, ושומרים על המידע שלך כאשר אתה משתמש באתר שלנו.
            </p>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">איסוף מידע</h2>
            <p>
              אנו אוספים מידע שאתה מספק לנו מרצונך החופשי, כגון שם מלא, מספר טלפון, ועיר מגורים בעת מילוי טופס יצירת הקשר באתר.
              מידע זה דרוש לנו על מנת שנוכל לחזור אליך בנוגע למשרות רלוונטיות.
            </p>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">שימוש במידע</h2>
            <p>
              המידע שאנו אוספים משמש אך ורק למטרת יצירת קשר איתך ועדכונך לגבי הצעות עבודה שעשויות להתאים לכישוריך ולדרישותיך.
              איננו משתפים, מוכרים או מעבירים את המידע האישי שלך לצדדים שלישיים ללא הסכמתך המפורשת.
            </p>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">איסוף מידע סטטיסטי (Analytics)</h2>
            <p>
              על מנת לשפר ולייעל את השירותים שלנו, האתר משתמש בשירותי ניתוח נתונים של צד שלישי (כדוגמת Vercel Analytics).
              שירותים אלו עשויים לאסוף מידע טכני וסטטיסטי אנונימי על אופן השימוש באתר, כגון דפים נצפים, סוג הדפדפן, מערכת ההפעלה וזמני השהייה באתר.
              מידע זה אינו מזהה אותך באופן אישי ומשמש אך ורק למטרות סטטיסטיות ושיפור חוויית המשתמש.
            </p>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">אבטחת מידע</h2>
            <p>
              אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלך מפני גישה, שימוש או חשיפה בלתי מורשים.
              עם זאת, אין מערכת המאובטחת ב-100%, ולכן איננו יכולים להבטיח את אבטחתו המוחלטת של המידע.
            </p>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">יצירת קשר</h2>
            <p>
              אם יש לך שאלות או הערות בנוגע למדיניות הפרטיות שלנו, אנא צור איתנו קשר.
            </p>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            * מדיניות זו תקפה ונכונה לתאריך כתיבתה ועשויה להתעדכן מעת לעת.
          </div>
        </main>
      </div>
    </div>
  );
}
