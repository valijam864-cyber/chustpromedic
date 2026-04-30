import React, { useState } from 'react';
import { Shield, BookOpen, Microscope, ArrowRight, Leaf, Sparkles, Phone, User, CheckCircle2, GraduationCap, Users, Dna, MapPin } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Telegram Bot logic
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
       setStatus({ type: 'error', message: 'Tizimda xatolik: Bot sozlanmagan. Iltimos admin bilan bog\'laning.' });
       setIsSubmitting(false);
       return;
    }

    const message = `🔔 *Yangi o'quvchi ro'yxatdan o'tdi!*\n\n👤 *Ism:* ${formData.name}\n📞 *Tel:* +998 ${formData.phone}\n\n🧬 *Kurs:* Chust Promedic Academy`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Arizangiz muvaffaqiyatli qabul qilindi! O\'quv markazimiz ma\'muriyati tez orada siz bilan bog\'lanadi.' });
        setFormData({ name: '', phone: '' });
      } else {
        setStatus({ type: 'error', message: 'Xatolik yuz berdi. Iltimos qayta urinib ko\'ring.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Tarmoq xatosi. Iltimos internetingizni tekshiring.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-800 font-sans overflow-x-hidden relative selection:bg-green-200">
      <div className="absolute inset-0 pattern-bg opacity-70 -z-10 animate-fade-in-up"></div>
      
      {/* Floating DNA Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { top: '10%', left: '5%', size: 40, duration: 25, delay: 0 },
          { top: '25%', left: '80%', size: 60, duration: 28, delay: 5 },
          { top: '65%', left: '15%', size: 50, duration: 22, delay: 12 },
          { top: '80%', left: '75%', size: 45, duration: 26, delay: 8 },
          { top: '45%', left: '50%', size: 70, duration: 30, delay: 15 },
          { top: '15%', left: '45%', size: 35, duration: 20, delay: 3 },
          { top: '85%', left: '30%', size: 55, duration: 24, delay: 18 },
        ].map((item, i) => (
          <div 
            key={i} 
            className="absolute animate-float-dna text-green-600/20"
            style={{
              top: item.top,
              left: item.left,
              animationDuration: `${item.duration}s`,
              animationDelay: `-${item.delay}s`
            }}
          >
            <Dna width={item.size} height={item.size} />
          </div>
        ))}
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-green-200/50 blur-[120px] rounded-full pointer-events-none animate-fade-in-left"></div>
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-emerald-200/40 blur-[120px] rounded-full pointer-events-none animate-fade-in-right delay-200"></div>
      
      {/* Header */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-green-100 px-6 py-4 flex justify-between items-center shadow-sm animate-fade-in-down">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
            <Leaf className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            Chust <span className="text-green-600">Promedic</span> Academy
          </span>
        </div>
        <div>
          <a href="#register" className="hidden sm:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
            Ro'yxatdan o'tish
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 space-y-8 z-10 animate-fade-in-left delay-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 border border-green-200">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">2026-yilgi qabul boshlandi</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
            Biologiyani Chuqur Va <br className="hidden lg:block"/>
            <span className="text-green-600">Oson O'rganing</span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Tibbiyot oliygohlariga va DTM imtihonlariga sifatli tayyorgarlik. Tajribali ustozlar, zamonaviy o'quv xonalari va mukammal darsliklar yordamida talaba bo'lish orzuingizga erishing.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#register" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-green-600/30 group">
              Kursga yozilish <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="flex items-center gap-8 pt-8 text-slate-800 animate-fade-in-up delay-300">
             <div className="flex flex-col">
               <span className="text-3xl font-black text-green-600">100%</span>
               <span className="text-sm font-medium text-slate-500 mt-1">Sifat kafolati</span>
             </div>
             <div className="w-px h-12 bg-slate-200"></div>
             <div className="flex flex-col">
               <span className="text-3xl font-black text-green-600">5+</span>
               <span className="text-sm font-medium text-slate-500 mt-1">Yillik tajriba</span>
             </div>
          </div>
        </div>
        
        <div className="flex-1 lg:max-w-lg relative z-10 w-full animate-fade-in-right delay-200">
          {/* Main Hero Image */}
          <div className="relative rounded-3xl p-2 bg-white/50 backdrop-blur shadow-2xl border border-white animate-float-soft">
            <img 
              src="/hero-bio.png" 
              alt="Biology students" 
              className="w-full h-auto object-cover rounded-2xl"
            />
            {/* Floating badge */}
            <div className="absolute -left-6 bottom-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Yuqori natijalar</div>
                <div className="text-xs text-slate-500">Talabalarimiz yutuqlari</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up delay-100">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">O'quv markazimizning <span className="text-green-600">afzalliklari</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Biz sizga nafaqat bilim, balki oliygohga kirish uchun to'g'ri yo'nalish ham beramiz.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen className="w-7 h-7" />, title: "Mukammal Darsliklar", desc: "Mavzularni oson tushunish uchun maxsus ishlab chiqilgan o'quv qo'llanmalar.", delay: "delay-200" },
              { icon: <Users className="w-7 h-7" />, title: "Tajribali Ustozlar", desc: "Ko'p yillik tajribaga ega malakali o'qituvchilar jamoasi.", delay: "delay-300" },
              { icon: <CheckCircle2 className="w-7 h-7" />, title: "DTM Testlar", desc: "Haqiqiy imtihon formatiga tushuvchi testlar bazasi bilan ishlash mashg'ulotlari.", delay: "delay-400" },
            ].map((f, i) => (
              <div key={i} className={`organic-card p-8 group animate-fade-in-up ${f.delay}`}>
                <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row animate-fade-in-up delay-200">
            <div className="p-10 lg:p-14 md:w-5/12 bg-green-600 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-900/20 rounded-full blur-2xl"></div>
              
              <h2 className="text-3xl font-bold mb-4 relative z-10">Maqsad sari birinchi qadam!</h2>
              <p className="text-green-50 mb-8 relative z-10 text-lg">Ma'lumotlaringizni qoldiring, biz sizga kurslarimiz haqida to'liq ma'lumot beramiz.</p>
              
              <ul className="space-y-4 relative z-10 font-medium">
                <li className="flex items-center gap-3 text-green-50">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>Bepul sinov darsi</span>
                </li>
                <li className="flex items-center gap-3 text-green-50">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>Qulay dars jadvali</span>
                </li>
                <li className="flex items-center gap-3 text-green-50">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>Markaz bo'ylab ekskursiya</span>
                </li>
              </ul>
            </div>
            
            <div className="p-10 lg:p-14 md:w-7/12 bg-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">O'quv kursiga yozilish</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">O'quvchining ism-familiyasi</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Anvarjon Sobirov" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-800 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all font-medium"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Telefon raqam</label>
                  <div className="relative flex items-center">
                    <Phone className="absolute left-4 w-5 h-5 text-slate-400" />
                    <span className="absolute left-11 font-bold text-slate-800">+998</span>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => {
                        const val = e.target.value.replace(/\D/g, '');
                        if (val.length <= 9) {
                          setFormData({...formData, phone: val});
                        }
                      }}
                      placeholder="90 123 45 67" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-24 pr-4 text-slate-800 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all font-medium tracking-wide"
                    />
                  </div>
                </div>

                {status.message && (
                  <div className={`p-4 rounded-xl text-sm font-medium flex items-start gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    <div className="mt-0.5">{status.type === 'success' ? <CheckCircle2 className="w-5 h-5"/> : <Shield className="w-5 h-5"/>}</div>
                    <span className="leading-relaxed">{status.message}</span>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-600/30 flex justify-center items-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Ro'yxatdan o'tishni yuborish"
                  )}
                </button>
              </form>
            </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 px-6 relative z-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Biz bilan bog'lanish</h3>
            <p className="text-slate-500 max-w-md">Markazimizga tashrif buyuring yoki telefon orqali bepul maslahat oling.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 animate-fade-in-left delay-100">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Telefon raqam</div>
                <div className="font-bold text-slate-800 text-lg">+998 93 677 52 54</div>
              </div>
            </div>
            
            {/* <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 animate-fade-in-left delay-200">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Manzil</div>
                <div className="font-bold text-slate-800 text-lg"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] group">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-60 duration-1000"></div>
        <a 
          href="tel:+998936775254" 
          className="relative flex items-center justify-center bg-gradient-to-tr from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all transform hover:scale-110 hover:shadow-green-500/50 border border-green-400/20"
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7" />
        </a>
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg whitespace-nowrap translate-x-2 group-hover:translate-x-0">
          Hoziroq qo'ng'iroq qiling!
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-10 text-center text-slate-400 animate-fade-in-up delay-400">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Leaf className="w-6 h-6 text-green-500" />
          <span className="font-bold text-xl text-white tracking-tight">Chust <span className="text-green-500">Promedic</span> Academy</span>
        </div>
        <p className="text-sm">© 2026 Barcha huquqlar himoyalangan. O'quv markazi platformasi.</p>
      </footer>
    </div>
  );
}

export default App;