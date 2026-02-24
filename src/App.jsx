import React from 'react';
import { Phone, CheckCircle, Snowflake, Wind, Droplets, ShieldCheck, MessageCircle } from 'lucide-react';

const App = () => {
  const services = [
    { name: "התקנת מזגנים מכל הסוגים", icon: <Wind size={18} /> },
    { name: "ניקוי עמוק (אנטי-בקטריאלי)", icon: <Droplets size={18} /> },
    { name: "תיקון תקלות ומילוי גז", icon: <Snowflake size={18} /> },
    { name: "שירות אמין ומהיר", icon: <CheckCircle size={18} /> }
  ];

  const whatsappUrl = "https://wa.me/972526952050?text=%D7%94%D7%99%D7%99%20%D7%9E%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%AA%D7%99%D7%90%D7%95%D7%9D%20%D7%A9%D7%99%D7%A8%D7%95%D7%AA%20%D7%9C%D7%9E%D7%96%D7%92%D7%9F";

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans select-none" dir="rtl">
      {/* Flyer Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-[3rem] overflow-hidden relative border border-slate-200">
        
        {/* Visual Header with "Image" */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400 p-8 flex flex-col items-center text-white relative overflow-hidden">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300/20 rounded-full -ml-16 -mb-16 blur-2xl"></div>

          {/* AC Unit Visual (SVG Illustration) */}
          <div className="relative z-10 w-full flex justify-center mb-6">
            <svg viewBox="0 0 400 120" className="w-64 h-auto drop-shadow-xl animate-pulse">
               {/* AC Body */}
               <rect x="20" y="20" width="360" height="80" rx="10" fill="white" />
               <rect x="20" y="70" width="360" height="20" fill="#f1f5f9" />
               <rect x="40" y="90" width="320" height="5" rx="2" fill="#e2e8f0" />
               {/* Logo/Detail on AC */}
               <circle cx="340" cy="50" r="5" fill="#3b82f6" />
               <rect x="330" y="60" width="20" height="2" fill="#cbd5e1" />
               {/* Air Waves */}
               <path d="M100 110 Q120 125 140 110" stroke="white" strokeWidth="2" fill="none" className="opacity-60" />
               <path d="M180 110 Q200 125 220 110" stroke="white" strokeWidth="2" fill="none" className="opacity-60" />
               <path d="M260 110 Q280 125 300 110" stroke="white" strokeWidth="2" fill="none" className="opacity-60" />
            </svg>
          </div>

          <h1 className="text-4xl font-black mb-1 drop-shadow-md">מאור מיזוג אוויר</h1>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-2xl text-xs font-bold border border-white/30">
            <ShieldCheck size={14} className="text-blue-200" />
            <span>טכנאי מזגנים מוסמך ומורשה</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8 bg-white">
          <div className="space-y-4">
            <h2 className="text-center text-slate-500 font-bold text-sm tracking-widest uppercase">השירותים שלנו</h2>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 hover:bg-blue-50 transition-colors">
                  <div className="bg-blue-600 text-white p-2 rounded-xl shadow-md">
                    {service.icon}
                  </div>
                  <span className="font-bold text-slate-700 text-lg">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-1 text-slate-400">
               <p className="text-[10px] font-black uppercase tracking-[0.2em]">זמין עכשיו עבורכם</p>
            </div>
            
            <div className="grid gap-3">
              {/* WhatsApp Button */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-emerald-500 text-white p-5 rounded-[2rem] font-black text-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 active:scale-[0.98] animate-bounce-subtle"
              >
                <div className="bg-white/20 p-2 rounded-xl">
                  <MessageCircle size={28} />
                </div>
                <span>דברו איתי בוואטסאפ</span>
              </a>

              {/* Call Button */}
              <a 
                href="tel:0526952050"
                className="flex items-center justify-center gap-3 bg-slate-900 text-white p-4 rounded-[1.5rem] font-bold text-lg hover:bg-slate-800 transition-all border border-slate-700 shadow-xl"
              >
                <Phone size={20} className="text-blue-400" />
                <span dir="ltr">052-6952050</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
           <p className="text-[10px] text-slate-400 font-medium">שירות מקצועי, מהיר ואדיב לכל סוגי המזגנים</p>
        </div>
      </div>
      
      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}} />
    </div>
  );
};

export default App;