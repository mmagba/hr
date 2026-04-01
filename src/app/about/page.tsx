import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-[#213988] mb-6">אודות</h1>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              ברוכים הבאים ל <strong>ENAS-HR</strong> משרד בוטיק להשמה ומיון תעסוקתי המחבר בין כישרונות דוברי השפה הערבית לבין החברות והתאגידים המובילים בישראל.
            </p>

            <p>
              הקמנו את המשרד מתוך הבנה ששוק העבודה משתנה. מועמדים היום מחפשים יותר מסתם &quot;לסגור חודש&quot; - הם מחפשים יציבות, תנאים מעולים, וגמישות המאפשרת עבודה מהבית או במודל היברידי. מנגד, החברות הגדולות מחפשות עובדים איכותיים שיישארו איתן לאורך זמן. אנחנו כאן כדי ליצור את הגשר המדויק הזה.
            </p>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">היתרון המקצועי שלנו: השמה מבוססת פסיכולוגיה</h2>
            <p>
              בשונה מחברות כוח אדם סטנדרטיות, תהליך המיון והליווי ב-ENAS-HR מנוהל מבעד לעדשה של גב&apos; אינאס אמארה, פסיכולוגית בעלת תואר שני בפסיכולוגיה תעסוקתית. המשמעות היא שאנחנו לא רק בוחנים קורות חיים, אלא מסתכלים על האדם שמאחוריהם:
            </p>

            <ul className="list-disc list-inside space-y-2 pr-4">
              <li>אנו מזהים את החוזקות האישיות של כל מועמד.</li>
              <li>אנו עורכים התאמה אישיותית לאופי התפקיד ולתרבות הארגונית, כדי למנוע שחיקה.</li>
              <li>אנו מעניקים הכוונה וכלים מקצועיים לקראת ראיונות העבודה, כדי שתגיעו בשיא הביטחון.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#213988] mt-8 mb-4">המחויבות שלנו למועמדים</h2>
            <p>
              אנו מאמינים שלכל אחד מגיעה הזדמנות שווה להשתלב בחזית המשק הישראלי. לכן, כל שירותי הייעוץ, המיון וההשמה ניתנים למועמדים ללא כל עלות.
            </p>

            <p>
              ההצלחה שלכם היא ההצלחה שלנו, ואנחנו נלווה אתכם צעד אחר צעד - מהשיחה הראשונה ועד לקליטה המוצלחת במקום העבודה החדש שלכם.
            </p>

            <p>
              המשרד פועל תחת רישיון חוקי ללשכה פרטית מטעם משרד העבודה והרווחה, תוך הקפדה על שקיפות, הוגנות ודיסקרטיות מלאה.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
