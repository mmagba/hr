import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AccessibilityStatement() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-[#213988] mb-6">הצהרת נגישות</h1>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              אנו ב-<strong>Enas-HR</strong> רואים חשיבות רבה במתן שירות שוויוני לכלל הגולשים באתר האינטרנט שלנו ובשיפור השירות לאנשים עם מוגבלויות.
              לכן, אנו משקיעים משאבים רבים בהנגשת האתר שלנו על מנת להפוך אותו לזמין, נוח וידידותי לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.
            </p>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">רמת הנגישות</h2>
            <p>
              אתר זה נבנה בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013, ועומד בדרישות התקן הישראלי (ת&quot;י 5568) לנגישות תכנים באינטרנט ברמת AA,
              כמו גם בהמלצות מסמך WCAG 2.0 של ארגון ה-W3C.
            </p>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">אמצעי הנגישות באתר</h2>
            <ul className="list-disc list-inside space-y-2 pr-4">
              <li><strong>ניווט מקלדת:</strong> האתר מותאם לחלוטין לגלישה בעזרת מקלדת בלבד. ניתן להשתמש במקש Tab כדי לנווט בין אלמנטים אינטראקטיביים, ובמקש Enter להפעלתם. מצב הפוקוס מסומן באופן ברור ומודגש.</li>
              <li><strong>התאמה לקוראי מסך:</strong> האתר נכתב באופן סמנטי המאפשר לקוראי מסך (כגון NVDA או JAWS) לקרוא ולהבין את המבנה והתוכן.</li>
              <li><strong>תיאורי תמונות (Alt Text):</strong> לתמונות משמעותיות המופיעות באתר מצורף טקסט חלופי קולי (Alt). תמונות המשמשות לעיצוב בלבד מוגדרות ככאלו ואינן מוקראות על ידי קורא המסך.</li>
              <li><strong>ניגודיות צבעים:</strong> צבעי האתר, התפריטים והטקסט נבחרו בקפידה תוך שמירה על יחס ניגודיות גבוה לקריאה זריזה וחלקה של התוכן.</li>
              <li><strong>מבנה האתר:</strong> האתר משתמש ב-Landmarks תקניים (Header, Main, Footer) מותאמים לניווט קל באמצעות מערכות סיוע.</li>
              <li><strong>טפסים:</strong> שדות הטפסים ברורים וצמודים להם תגיות label כנדרש.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">פניות בנושא נגישות ומשוב</h2>
            <p>
              למרות מאמצינו להנגיש את כלל הדפים באתר, ייתכן שיתגלו חלקים ספציפיים שאינם נגישים במלואם. אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה, כולל אנשים עם מוגבלויות.
            </p>
            <p className="mt-4">
              אם נתקלתם בבעיית נגישות, או שיש לכם הצעה לשיפור, נשמח אם תפנו אלינו:
            </p>

            <div className="bg-[#F3F4F6] p-6 rounded-lg mt-4 border border-gray-200 inline-block">
              <h3 className="font-semibold text-gray-900 mb-2">פרטי יצירת קשר לנושאי נגישות:</h3>
              <ul className="space-y-1">
                <li><strong>טלפון:</strong> <span dir="ltr">04-6990691</span></li>
                <li><strong>דוא&quot;ל:</strong> <span dir="ltr">enas.hr.jobs@gmail.com</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500" suppressHydrationWarning>
            * הצהרת נגישות זו עודכנה לאחרונה בתאריך 16/03/2026. במקרה שיחולו שינויים מהותיים באתר, ההצהרה תעודכן בהתאם.
          </div>
        </main>
      </div>
    </div>
  );
}
