"use client"

import Image from "next/image";
import Link from "next/link";
import { Rocket, Home, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [formData, setFormData] = useState({ fullName: "", phone: "", city: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar area */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="לוגו Enas-HR"
            width={180}
            height={60}
            className="w-auto h-10 md:h-14 object-contain"
            priority
          />
          <div className="text-[#213988] text-3xl md:text-4xl font-bold tracking-tight mt-3">Enas-HR</div>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-white py-8 md:py-0 md:min-h-[70vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">

            {/* Text Content - appears on the right in RTL */}
            <div className="md:w-[45%] space-y-5 text-center md:text-right">
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-extrabold text-[#213988] leading-snug">
                העבודה הבאה שלך<br />
                במרחק שיחה אחת
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                דרושים נציגי שירות ומכירה דוברי ערבית לחברות הגדולות במשק.<br />
                <span className="font-semibold text-gray-800">מסלול מהיר לריאיון | שכר מתגמל | הכשרה מלאה</span>
              </p>
              <div className="pt-2">
                <a href="#contact" className="inline-block bg-gradient-to-r from-[#1D827B] to-[#213988] hover:opacity-90 text-white font-bold text-base md:text-lg py-3 px-8 rounded-md shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] focus-visible:ring-offset-2">
                  לחצו כאן להרשמה למאגר &raquo;
                </a>
              </div>
            </div>

            {/* Hero Image - appears on the left in RTL */}
            <div className="md:w-[55%] w-full flex justify-center">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="אישה עובדת מהבית עם אוזניות מול מחשב"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-200">

              <div className="flex flex-col items-center pt-8 md:pt-0 pb-8 md:pb-0 px-4">
                <div className="w-16 h-16 text-[#213988] flex items-center justify-center mb-4">
                  <Rocket size={48} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">מסלול ישיר לראיון</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  (אנחנו עוקפים את חברות ההשמה הרגילות ומקשרים אתכם ישירות אל מנהל משאבי אנוש בחברה...)
                </p>
              </div>

              <div className="flex flex-col items-center pt-8 md:pt-0 pb-8 md:pb-0 px-4">
                <div className="w-16 h-16 text-[#213988] flex items-center justify-center mb-4">
                  <Home size={48} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">אפשרות לעבודה מהבית (או היברידי)</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  (חסכו זמן בפקקים, הוצאות נסיעה וזמן יקר. תהנו מאיזון מושלם בין בית לעבודה עם מגוון משרות...)
                </p>
              </div>

              <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
                <div className="w-16 h-16 text-[#213988] flex items-center justify-center mb-4 relative">
                  <HelpCircle size={40} strokeWidth={1.5} className="absolute -top-1 -right-2 text-[#213988] bg-white rounded-full p-0.5" aria-hidden="true" />
                  <div className="w-10 h-10 border-2 border-[#213988] rounded-full overflow-hidden flex items-end justify-center">
                    <div className="w-6 h-6 bg-[#213988] rounded-t-full"></div>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">ללא ניסיון? אין בעיה.</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  (אנחנו מחפשים פוטנציאל, מוטיביציה ויכולת למידה. כל החברות מספקות הכשרה מלאה ובתשלום...)
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="bg-[#F3F4F6] py-16 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                הירשמו עכשיו ונחזור אליכם עם משרות רלוונטיות
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end justify-center md:items-end w-full max-w-4xl mx-auto">

              <div className="w-full md:flex-1 space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 text-right">שם מלא</label>
                <input
                  id="fullName"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D827B] focus:border-transparent text-right bg-white text-gray-900"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  autoComplete="name"
                  suppressHydrationWarning
                />
              </div>

              <div className="w-full md:flex-1 space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-right">טלפון</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  dir="ltr"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D827B] focus:border-transparent text-right bg-white text-gray-900"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  autoComplete="tel"
                  suppressHydrationWarning
                />
              </div>

              <div className="w-full md:flex-1 space-y-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 text-right">עיר מגורים</label>
                <input
                  id="city"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D827B] focus:border-transparent text-right bg-white text-gray-900"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  autoComplete="address-level2"
                  suppressHydrationWarning
                />
              </div>

              <div className="w-full md:w-32 mt-4 md:mt-0 pt-2 flex shrink-0">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#213988] hover:bg-[#1a2d6b] text-white font-semibold py-[9px] px-8 rounded shadow-md transition-colors duration-200 flex items-center justify-center disabled:opacity-70 h-[42px] m-0 self-end cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D827B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F4F6]"
                  suppressHydrationWarning
                >
                  {status === 'submitting' ? 'שולח...' : 'שלח'}
                </button>
              </div>

            </form>

            {status === 'success' && (
              <div role="status" aria-live="polite" className="mt-8 p-4 bg-green-50 text-green-800 rounded-md text-center border border-green-200 w-full max-w-4xl mx-auto">
                תודה רבה! פנייתך התקבלה בהצלחה. נחזור אליך בהקדם.
              </div>
            )}
            {status === 'error' && (
              <div role="alert" aria-live="assertive" className="mt-8 p-4 bg-red-50 text-red-800 rounded-md text-center border border-red-200 w-full max-w-4xl mx-auto">
                אירעה שגיאה בשליחת הטופס. אנא נסה שוב.
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="לוגו Enas-HR"
              width={120}
              height={40}
              className="w-auto h-8 md:h-10 object-contain"
            />
            <div className="text-[#213988] text-xl md:text-2xl font-bold tracking-tight mt-2">Enas-HR</div>
          </div>



          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="/about" className="text-sm text-[#213988] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] focus-visible:ring-offset-2 rounded px-1">
              אודות
            </Link>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <Link href="/accessibility" className="text-sm text-[#213988] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] focus-visible:ring-offset-2 rounded px-1">
              הצהרת נגישות
            </Link>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <Link href="/privacy" className="text-sm text-[#213988] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] focus-visible:ring-offset-2 rounded px-1">
              מדיניות פרטיות
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Enas-HR. כל הזכויות שמורות.
          </div>

        </div>
      </footer>
    </div>
  );
}
