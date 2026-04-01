"use client"

import Link from "next/link";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

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
          <h1 className="text-3xl md:text-4xl font-bold text-[#213988] mb-6">יצירת קשר</h1>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              נשמח לשמוע מכם! צוות <strong>Enas-HR</strong> זמין עבורכם לכל שאלה, פנייה או בקשת מידע.
              אנו מתחייבים לחזור אליכם בהקדם האפשרי.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Phone */}
              <div className="bg-[#F3F4F6] p-6 rounded-lg border border-gray-200 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#213988] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">טלפון</h2>
                  <a href="tel:046990691" dir="ltr" className="text-[#213988] hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] rounded px-1">
                    04-6990691
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#F3F4F6] p-6 rounded-lg border border-gray-200 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#213988] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">דוא&quot;ל</h2>
                  <a href="mailto:enas.hr.jobs@gmail.com" dir="ltr" className="text-[#213988] hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] rounded px-1">
                    enas.hr.jobs@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-10 bg-[#F3F4F6] p-8 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-semibold text-[#213988] mb-6">שלחו לנו הודעה</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 text-right">שם מלא</label>
                    <input
                      id="contactName"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D827B] focus:border-transparent text-right bg-white text-gray-900"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 text-right">דוא&quot;ל</label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      dir="ltr"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D827B] focus:border-transparent text-right bg-white text-gray-900"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700 text-right">הודעה</label>
                  <textarea
                    id="contactMessage"
                    required
                    rows={5}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D827B] focus:border-transparent text-right bg-white text-gray-900 resize-y"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-[#213988] hover:bg-[#1a2d6b] text-white font-semibold py-3 px-10 rounded shadow-md transition-colors duration-200 disabled:opacity-70 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D827B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F4F6]"
                  >
                    {status === "submitting" ? "שולח..." : "שליחה"}
                  </button>
                </div>
              </form>

              {status === "success" && (
                <div role="status" aria-live="polite" className="mt-6 p-4 bg-green-50 text-green-800 rounded-md text-center border border-green-200">
                  תודה רבה! הודעתך התקבלה בהצלחה. נחזור אליך בהקדם.
                </div>
              )}
              {status === "error" && (
                <div role="alert" aria-live="assertive" className="mt-6 p-4 bg-red-50 text-red-800 rounded-md text-center border border-red-200">
                  אירעה שגיאה בשליחת ההודעה. אנא נסו שוב.
                </div>
              )}
            </div>

            <div className="mt-10 bg-gradient-to-r from-[#213988] to-[#1D827B] text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-3">מחפשים עבודה?</h2>
              <p className="text-white/90 mb-4">
                הירשמו למאגר המועמדים שלנו ונחזור אליכם עם הצעות עבודה מתאימות.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-white text-[#213988] font-bold py-3 px-8 rounded-md shadow-md hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#213988]"
              >
                להרשמה למאגר &raquo;
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
