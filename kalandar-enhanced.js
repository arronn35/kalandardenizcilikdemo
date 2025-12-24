// ===== KALANDAR DENIZCILIK - PROFESSIONAL TOURISM WEBSITE =====
// Enhanced with real photography for tourism sector appeal
// Featuring Fethiye coastline imagery and luxury yacht experiences

(() => {
  const mountId = "app";
  if (!document.getElementById(mountId)) {
    const d = document.createElement("div");
    d.id = mountId;
    document.body.appendChild(d);
  }

  // ========== i18n Dictionary ==========
  const I18N = {
    tr: {
      langName: "Türkçe",
      nav: { tours: "Turlar", about: "Hakkımızda", gallery: "Galeri", faq: "SSS", contact: "İletişim" },
      top: {
        title: "Uygun Tur Bul",
        route: "Rota",
        routePh: "Örn: Ölüdeniz • Butterfly Valley • Göcek",
        start: "Başlangıç",
        end: "Bitiş",
        guests: "Kişi",
        type: "Tur Tipi",
        types: {
          day: "Günübirlik", sunset: "Gün Batımı", private: "Özel Charter",
          search: "Müsaitlik Ara",
          note: "Fethiye'nin en güzel koylarını keşfedin.",
        },
        hero: {
          kpi1: "Lüks Deneyim",
          kpi2: "Profesyonel Ekip",
          kpi3: "Turkuaz Sular",
          headline: "Fethiye'nin turkuaz sularında unutulmaz deniz deneyimi",
          sub: "Ölüdeniz, Butterfly Valley ve Göcek koylarında modern tekneler ile premium tekne turları.",
          ctaPrimary: "Rezervasyon Yap",
          ctaSecondary: "Turları İncele",
        },
        trust: {
          a: { t: "Gizli Koylar", d: "Fethiye'nin en güzel ve saklı koylarını keşfedin." },
          b: { t: "Lüks Tekneler", d: "Modern ve konforlu yat filosu ile hizmetinizdeyiz." },
          c: { t: "Deneyimli Kaptan", d: "Bölgeyi iyi bilen profesyonel kaptan kadrosu." },
        },
        tours: {
          title: "Popüler Turlar",
          desc: "Fethiye kıyılarının en güzel rotaları ve koyları ile unutulmaz bir gün geçirin.",
          cards: [
            { name: "Ölüdeniz & 12 Adalar", tag: "En Popüler", dur: "8 saat", cap: "12–24 kişi" },
            { name: "Gün Batımı Turu", tag: "Romantik", dur: "3 saat", cap: "2–12 kişi" },
            { name: "Özel Yat Kiralama", tag: "Lüks", dur: "Esnek", cap: "Özel kapasite" },
          ],
          view: "Detayları Gör",
          book: "Rezervasyon Yap",
        },
        about: {
          title: "Kalandar Denizcilik",
          p1: "Fethiye'de deniz turizmi alanında 10 yılı aşkın deneyimimiz ile size en iyi hizmeti sunuyoruz.",
          p2: "Turkuaz sular, gizli koylar ve unutulmaz anılar için biz buradayız. Her tur, güvenlik ve konfor odaklı tasarlanır.",
          stats: [
            { k: "10+ yıl", v: "Fethiye Deneyimi" },
            { k: "4.9/5", v: "Müşteri Memnuniyeti" },
            { k: "50+ koy", v: "Özel Rotalar" },
          ],
          cta: "Teklif Al",
        },
        gallery: {
          title: "Galeri",
          desc: "Fethiye'nin turkuaz suları, gizli koyları ve teknelerimizden öne çıkan görüntüler.",
          add: "Daha Fazla",
        },
        faq: {
          title: "Sık Sorulan Sorular",
          items: [
            { q: "Hangi koyları ziyaret ediyoruz?", a: "Ölüdeniz, Butterfly Valley, Aquarium Bay, Gemiler Island ve daha fazlası..." },
            { q: "Yemek dahil mi?", a: "Evet, turlarımızda öğle yemeği ve ikramlar dahildir." },
            { q: "Özel tur düzenlenebilir mi?", a: "Elbette! Size özel rotalar ve programlar hazırlayabiliriz." },
            { q: "İptal koşulları nedir?", a: "48 saat öncesine kadar ücretsiz iptal. Hava koşulları nedeniyle iptal tam iade." },
            { q: "Hangi bölgelere hizmet veriyorsunuz?", a: "Fethiye, Ölüdeniz, Göcek, Butterfly Valley ve çevresindeki tüm koylara hizmet veriyoruz." },
            { q: "Dalış yapabilir miyiz?", a: "Evet, snorkel ekipmanları sağlanır ve dalış yapılabilecek en güzel noktalar ziyaret edilir." },
          ],
        },
        contact: {
          title: "İletişim",
          desc: "Fethiye'nin en güzel koylarında bir gün geçirmek için bize ulaşın.",
          form: {
            name: "Ad Soyad",
            email: "E-posta",
            phone: "Telefon",
            msg: "Mesajınız",
            send: "Gönder",
            nameReq: "Lütfen adınızı girin",
            emailReq: "Lütfen geçerli bir e-posta girin",
            phoneReq: "Lütfen telefon numaranızı girin",
            msgReq: "Lütfen mesajınızı girin",
          },
          quick: { call: "Ara", whatsapp: "WhatsApp", mail: "E-posta" },
          toastOk: "Mesajınız alındı. En kısa sürede dönüş yapacağız.",
        },
        footer: {
          rights: "Tüm hakları saklıdır.",
          links: { kvkk: "Gizlilik", terms: "Kullanım Şartları", cookies: "Çerezler" },
        },
        ui: {
          close: "Kapat",
          ok: "Tamam",
          copied: "Kopyalandı",
          loading: "Yükleniyor...",
          sending: "Gönderiliyor...",
        },
        alerts: {
          searching: "Müsait turlar aranıyor...",
          searchResults: "Müsait turlar bulundu!",
          quote: "Teklif talebi alındı.",
          book: "Rezervasyon formu hazırlandı.",
          details: "Tur Detayları",
          galleryAdded: "Daha fazla fotoğraf yüklendi.",
          copiedEmail: "E-posta kopyalandı.",
          copiedPhone: "Telefon kopyalandı.",
          formSuccess: "Form başarıyla gönderildi!",
          formError: "Lütfen tüm gerekli alanları doldurun.",
          dateError: "Lütfen geçerli tarih aralığı seçin.",
        },
      },

      en: {
        langName: "English",
        nav: { tours: "Tours", about: "About", gallery: "Gallery", faq: "FAQ", contact: "Contact" },
        top: {
          title: "Find a Tour",
          route: "Route",
          routePh: "e.g., Ölüdeniz • Butterfly Valley • Göcek",
          start: "Start",
          end: "End",
          guests: "Guests",
          type: "Tour Type",
          types: { day: "Day Trip", sunset: "Sunset", private: "Private Charter", diving: "Diving & Explore" },
          search: "Search Availability",
          note: "Discover the most beautiful bays of Fethiye.",
        },
        hero: {
          kpi1: "Luxury Experience",
          kpi2: "Professional Crew",
          kpi3: "Turquoise Waters",
          headline: "Unforgettable marine experience in Fethiye's turquoise waters",
          sub: "Premium boat tours in Ölüdeniz, Butterfly Valley and Göcek bays with modern vessels.",
          ctaPrimary: "Book Now",
          ctaSecondary: "Explore Tours",
        },
        trust: {
          a: { t: "Hidden Bays", d: "Discover the most beautiful and hidden bays of Fethiye." },
          b: { t: "Luxury Boats", d: "Modern and comfortable yacht fleet at your service." },
          c: { t: "Expert Captain", d: "Professional captain crew who knows the region well." },
        },
        tours: {
          title: "Popular Tours",
          desc: "Spend an unforgettable day with the most beautiful routes and bays of Fethiye coast.",
          cards: [
            { name: "Ölüdeniz & 12 Islands", tag: "Most Popular", dur: "8 hours", cap: "12–24 guests" },
            { name: "Sunset Tour", tag: "Romantic", dur: "3 hours", cap: "2–12 guests" },
            { name: "Private Yacht Charter", tag: "Luxury", dur: "Flexible", cap: "Custom capacity" },
          ],
          view: "View Details",
          book: "Book Now",
        },
        about: {
          title: "Kalandar Denizcilik",
          p1: "With over 10 years of experience in marine tourism in Fethiye, we offer you the best service.",
          p2: "We are here for turquoise waters, hidden bays and unforgettable memories. Every tour is designed with a focus on safety and comfort.",
          stats: [
            { k: "10+ yrs", v: "Fethiye Experience" },
            { k: "4.9/5", v: "Guest Satisfaction" },
            { k: "50+ bays", v: "Special Routes" },
          ],
          cta: "Request Quote",
        },
        gallery: {
          title: "Gallery",
          desc: "Featured images from Fethiye's turquoise waters, hidden bays and our boats.",
          add: "Load More",
        },
        faq: {
          title: "Frequently Asked Questions",
          items: [
            { q: "Which bays do we visit?", a: "Ölüdeniz, Butterfly Valley, Aquarium Bay, Gemiler Island and more..." },
            { q: "Is lunch included?", a: "Yes, lunch and refreshments are included in our tours." },
            { q: "Can we arrange a private tour?", a: "Of course! We can prepare special routes and programs for you." },
            { q: "What are the cancellation terms?", a: "Free cancellation up to 48 hours in advance. Full refund for weather cancellations." },
            { q: "Which regions do you serve?", a: "We serve all bays around Fethiye, Ölüdeniz, Göcek, Butterfly Valley." },
            { q: "Can we dive?", a: "Yes, snorkeling equipment is provided and the best diving spots are visited." },
          ],
        },
        contact: {
          title: "Contact",
          desc: "Get in touch with us to spend a day in the most beautiful bays of Fethiye.",
          form: {
            name: "Full Name",
            email: "Email",
            phone: "Phone",
            msg: "Message",
            send: "Send",
            nameReq: "Please enter your name",
            emailReq: "Please enter a valid email",
            phoneReq: "Please enter your phone number",
            msgReq: "Please enter your message",
          },
          quick: { call: "Call", whatsapp: "WhatsApp", mail: "Email" },
          toastOk: "Message received. We will get back to you shortly.",
        },
        footer: {
          rights: "All rights reserved.",
          links: { kvkk: "Privacy", terms: "Terms", cookies: "Cookies" },
        },
        ui: {
          close: "Close",
          ok: "OK",
          copied: "Copied",
          loading: "Loading...",
          sending: "Sending...",
        },
        alerts: {
          searching: "Searching available tours...",
          searchResults: "Available tours found!",
          quote: "Quote request received.",
          book: "Booking form prepared.",
          details: "Tour Details",
          galleryAdded: "More photos loaded.",
          copiedEmail: "Email copied.",
          copiedPhone: "Phone copied.",
          formSuccess: "Form submitted successfully!",
          formError: "Please fill all required fields.",
          dateError: "Please select a valid date range.",
        },
      },

      ru: {
        langName: "Русский",
        nav: { tours: "Туры", about: "О нас", gallery: "Галерея", faq: "FAQ", contact: "Контакты" },
        top: {
          title: "Найти тур",
          route: "Маршрут",
          routePh: "например: Ölüdeniz • Butterfly Valley • Göcek",
          start: "Начало",
          end: "Конец",
          guests: "Гостей",
          type: "Тип тура",
          types: { day: "Дневной тур", sunset: "Закат", private: "Частная яхта", diving: "Дайвинг" },
          search: "Проверить",
          note: "Откройте для себя самые красивые бухты Фетхие.",
        },
        hero: {
          kpi1: "Роскошь",
          kpi2: "Профи команда",
          kpi3: "Бирюзовые воды",
          headline: "Незабываемые впечатления в бирюзовых водах Фетхие",
          sub: "Премиум морские туры в Ölüdeniz, Butterfly Valley и бухтах Göcek на современных яхтах.",
          ctaPrimary: "Забронировать",
          ctaSecondary: "Смотреть туры",
        },
        trust: {
          a: { t: "Скрытые бухты", d: "Откройте для себя самые красивые и скрытые бухты Фетхие." },
          b: { t: "Роскошные яхты", d: "Современный и комфортабельный флот яхт к вашим услугам." },
          c: { t: "Опытный капитан", d: "Профессиональная команда капитанов, хорошо знающих регион." },
        },
        tours: {
          title: "Популярные туры",
          desc: "Проведите незабываемый день с самыми красивыми маршрутами и бухтами побережья Фетхие.",
          cards: [
            { name: "Ölüdeniz & 12 Островов", tag: "Хит", dur: "8 часов", cap: "12–24 гостя" },
            { name: "Тур на закате", tag: "Романтика", dur: "3 часа", cap: "2–12 гостей" },
            { name: "Частная яхта", tag: "Люкс", dur: "Гибко", cap: "Индивидуально" },
          ],
          view: "Подробнее",
          book: "Забронировать",
        },
        about: {
          title: "Kalandar Denizcilik",
          p1: "Имея более 10 лет опыта в морском туризме в Фетхие, мы предлагаем вам лучший сервис.",
          p2: "Мы здесь для бирюзовых вод, скрытых бухт и незабываемых воспоминаний. Каждый тур разработан с упором на безопасность и комфорт.",
          stats: [
            { k: "10+ лет", v: "Опыт в Фетхие" },
            { k: "4.9/5", v: "Довольные гости" },
            { k: "50+ бухт", v: "Особые маршруты" },
          ],
          cta: "Запросить",
        },
        gallery: {
          title: "Галерея",
          desc: "Избранные изображения бирюзовых вод Фетхие, скрытых бухт и наших яхт.",
          add: "Ещё",
        },
        faq: {
          title: "Частые вопросы",
          items: [
            { q: "Какие бухты мы посещаем?", a: "Ölüdeniz, Butterfly Valley, Aquarium Bay, Gemiler Island и другие..." },
            { q: "Обед включен?", a: "Да, обед и напитки включены в наши туры." },
            { q: "Можно ли организовать частный тур?", a: "Конечно! Мы можем подготовить специальные маршруты и программы для вас." },
            { q: "Условия отмены?", a: "Бесплатная отмена за 48 часов. Полный возврат при отмене из-за погоды." },
            { q: "В каких регионах вы работаете?", a: "Мы обслуживаем все бухты вокруг Фетхие, Ölüdeniz, Göcek, Butterfly Valley." },
            { q: "Можно ли нырять?", a: "Да, предоставляется снаряжение для снорклинга и посещаются лучшие места для дайвинга." },
          ],
        },
        contact: {
          title: "Контакты",
          desc: "Свяжитесь с нами, чтобы провести день в самых красивых бухтах Фетхие.",
          form: {
            name: "Имя и фамилия",
            email: "Email",
            phone: "Телефон",
            msg: "Сообщение",
            send: "Отправить",
            nameReq: "Пожалуйста, введите ваше имя",
            emailReq: "Пожалуйста, введите корректный email",
            phoneReq: "Пожалуйста, введите ваш телефон",
            msgReq: "Пожалуйста, введите сообщение",
          },
          quick: { call: "Позвонить", whatsapp: "WhatsApp", mail: "Email" },
          toastOk: "Сообщение получено. Мы свяжемся с вами в ближайшее время.",
        },
        footer: {
          rights: "Все права защищены.",
          links: { kvkk: "Конфиденциальность", terms: "Условия", cookies: "Cookies" },
        },
        ui: {
          close: "Закрыть",
          ok: "ОК",
          copied: "Скопировано",
          loading: "Загрузка...",
          sending: "Отправка...",
        },
        alerts: {
          searching: "Поиск доступных туров...",
          searchResults: "Найдены доступные туры!",
          quote: "Запрос получен.",
          book: "Форма бронирования подготовлена.",
          details: "Детали тура",
          galleryAdded: "Загружено больше фото.",
          copiedEmail: "Email скопирован.",
          copiedPhone: "Телефон скопирован.",
          formSuccess: "Форма успешно отправлена!",
          formError: "Пожалуйста, заполните все обязательные поля.",
          dateError: "Пожалуйста, выберите корректный диапазон дат.",
        },
      },
    };

    // ========== State Management ==========
    const state = {
      lang: "tr",
      galleryCount: 12,
      demoEmail: "info@kalandardenizcilik.com",
      demoPhone: "+90 850 000 00 00",
      demoWhatsapp: "+90 850 000 00 00",
    };

    // ========== Helper Functions ==========
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

    const t = (path) => {
      const parts = path.split(".");
      let cur = I18N[state.lang];
      for (const p of parts) cur = cur?.[p];
      return cur ?? path;
    };

    const toast = (msg, duration = 2600) => {
      const el = $("#toast");
      el.textContent = msg;
      el.classList.add("show");
      window.clearTimeout(toast._t);
      toast._t = window.setTimeout(() => el.classList.remove("show"), duration);
    };

    const scrollToId = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const copyToClipboard = async (value, okMsg) => {
      try {
        await navigator.clipboard.writeText(value);
        toast(okMsg);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        toast(okMsg);
      }
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => phone.trim().length >= 10;
    const validateName = (name) => name.trim().length >= 2;

    const showModal = (title, content) => {
      const modal = document.createElement("div");
      modal.className = "modal-overlay";
      modal.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>${esc(title)}</h3>
          <button class="modal-close" aria-label="${esc(t("ui.close"))}">&times;</button>
        </div>
        <div class="modal-body">${content}</div>
      </div>
    `;
      document.body.appendChild(modal);

      setTimeout(() => modal.classList.add("active"), 10);

      const close = () => {
        modal.classList.remove("active");
        setTimeout(() => modal.remove(), 300);
      };

      $(".modal-close", modal).addEventListener("click", close);
      modal.addEventListener("click", (e) => {
        if (e.target === modal) close();
      });

      document.addEventListener("keydown", function escHandler(e) {
        if (e.key === "Escape") {
          close();
          document.removeEventListener("keydown", escHandler);
        }
      });
    };

    // ========== Render Function ==========
    const render = () => {
      const root = document.getElementById(mountId);
      root.innerHTML = `
      <style>
        :root{
          --bg: #0d1821;
          --panel: rgba(117,149,174,.12);
          --panel2: rgba(117,149,174,.18);
          --text: rgba(255,255,255,.92);
          --muted: rgba(255,255,255,.70);
          --line: rgba(117,149,174,.16);
          --brand: #7595ae;
          --brand2: #5b7c99;
          --accent: #a8c5dd;
          --shadow: 0 18px 45px rgba(0,0,0,.4);
          --radius: 16px;
          --radius2: 22px;
          --max: 1180px;
          --error: #ff4757;
          --success: #5b7c99;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        html, body { height: 100%; }

        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Helvetica Neue", sans-serif;
          color: var(--text);
          background:
            linear-gradient(180deg, rgba(13,24,33,.88) 0%, rgba(13,24,33,.92) 50%, rgba(10,18,26,.96) 100%),
            url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=90') center top / cover fixed;
          line-height: 1.6;
          overflow-x: hidden;
        }

        body:before {
          content: "";
          position: fixed;
          inset: 0;
          background:
            radial-gradient(1200px 800px at 20% 0%, rgba(117,149,174,.12), transparent 65%),
            radial-gradient(900px 700px at 80% 10%, rgba(91,124,153,.10), transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .wrap {
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; }

        /* ===== TOPBAR ===== */
        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px) saturate(180%);
          background: rgba(117,149,174,.85);
          border-bottom: 1px solid var(--line);
          transition: all 0.3s ease;
        }

        .topbar.scrolled {
          background: rgba(91,124,153,.95);
          box-shadow: 0 4px 30px rgba(0,0,0,.4);
        }

        .topbarInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          gap: 12px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 240px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .brand:hover {
          transform: translateX(2px);
        }

        .logo {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--brand), var(--brand2));
          box-shadow: 0 10px 25px rgba(117,149,174,.30);
          position: relative;
          flex-shrink: 0;
        }

        .logo:after {
          content: "";
          position: absolute;
          inset: 10px 9px 9px 10px;
          border: 2px solid rgba(0,0,0,.25);
          border-left: none;
          border-top: none;
          transform: rotate(-12deg);
          border-radius: 8px;
          opacity: .45;
        }

        .brand h1 {
          font-size: 14.5px;
          letter-spacing: .2px;
        }

        .brand p {
          font-size: 12px;
          color: var(--muted);
        }

        .nav {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }

        .nav a {
          font-size: 13px;
          color: var(--muted);
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .nav a:hover {
          color: var(--text);
          border-color: var(--line);
          background: rgba(255,255,255,.04);
        }

        .nav a:active {
          transform: scale(0.98);
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 240px;
          justify-content: flex-end;
        }

        .lang {
          display: flex;
          gap: 6px;
          padding: 6px;
          border-radius: 14px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.04);
        }

        .chip {
          border: 0;
          cursor: pointer;
          color: var(--muted);
          background: transparent;
          padding: 8px 10px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 12px;
          transition: all 0.2s ease;
        }

        .chip:hover {
          background: rgba(255,255,255,.06);
        }

        .chip.active {
          color: #ffffff;
          background: linear-gradient(135deg, var(--brand), var(--brand2));
        }

        .btn {
          border: 1px solid var(--line);
          background: rgba(255,255,255,.04);
          color: var(--text);
          padding: 10px 12px;
          border-radius: 14px;
          cursor: pointer;
          font-weight: 700;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .btn:hover {
          background: rgba(255,255,255,.07);
          transform: translateY(-1px);
        }

        .btn:active {
          transform: translateY(0);
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
        }

        .btn.primary {
          border-color: transparent;
          color: #ffffff;
          background: linear-gradient(135deg, var(--brand), var(--brand2));
          box-shadow: 0 12px 28px rgba(117,149,174,.28);
        }

        .btn.primary:hover {
          filter: saturate(1.05) brightness(1.1);
          box-shadow: 0 14px 32px rgba(117,149,174,.38);
        }

        .btn.loading:after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent);
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .icon {
          width: 16px;
          height: 16px;
          display: inline-block;
          background: currentColor;
          mask-size: contain;
          -webkit-mask-size: contain;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
        }

        .i-arrow { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M13.5 5l7 7-7 7-1.4-1.4 4.6-4.6H3v-2h13.7l-4.6-4.6L13.5 5z"/></svg>'); }
        .i-search { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M10 2a8 8 0 105.3 14l4.4 4.4 1.4-1.4-4.4-4.4A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/></svg>'); }
        .i-mail { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'); }
        .i-phone { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.36 2.3.55 3.6.55a1 1 0 011 1V20a1 1 0 01-1 1C10.1 21 3 13.9 3 5a1 1 0 011-1h3.1a1 1 0 011 1c0 1.3.19 2.5.55 3.6a1 1 0 01-.25 1L6.6 10.8z"/></svg>'); }
        .i-wa { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="black"><path d="M19.11 17.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/><path d="M16 3C8.83 3 3 8.83 3 16c0 2.28.6 4.5 1.74 6.46L3 29l6.75-1.71A12.9 12.9 0 0016 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.5c-2.02 0-4-.54-5.73-1.55l-.41-.24-4 .99 1.05-3.9-.27-.4A10.95 10.95 0 015.5 16C5.5 9.66 10.66 4.5 16 4.5S26.5 9.66 26.5 16 21.34 26.5 16 26.5z"/></svg>'); }

        .section { padding: 46px 0; }

        /* ===== HERO ===== */
        .hero {
          padding: 26px 0 36px;
          animation: fadeIn 0.6s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 18px;
          align-items: stretch;
        }

        .card {
          background: linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.05));
          backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid var(--line);
          border-radius: var(--radius2);
          box-shadow: var(--shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(0,0,0,.5), 0 0 0 1px rgba(117,149,174,.25);
        }

        .heroVisual {
          min-height: 360px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(165deg, rgba(0,0,0,.30) 0%, rgba(0,0,0,.10) 50%, rgba(0,0,0,.40) 100%),
            url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=90') center / cover;
        }

        .heroVisual:before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(600px 400px at 30% 30%, rgba(117,149,174,.18), transparent 70%),
            radial-gradient(500px 350px at 70% 60%, rgba(91,124,153,.12), transparent 65%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .heroVisual .overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(3,10,14,.40), transparent 55%),
            linear-gradient(180deg, rgba(3,10,14,.10), rgba(3,10,14,.50));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          gap: 10px;
        }

        .pillRow {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          animation: slideIn 0.6s ease 0.2s both;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .pill {
          font-size: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.06);
          color: var(--muted);
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .pill:hover {
          background: rgba(255,255,255,.10);
          transform: translateY(-1px);
        }

        .heroCopy { padding: 22px; }

        .heroCopy h2 {
          margin: 10px 0 10px;
          font-size: 34px;
          line-height: 1.1;
          animation: slideIn 0.6s ease 0.3s both;
        }

        .heroCopy p {
          margin: 0 0 18px;
          color: var(--muted);
          font-size: 14.5px;
          line-height: 1.6;
          animation: slideIn 0.6s ease 0.4s both;
        }

        .ctaRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          animation: slideIn 0.6s ease 0.5s both;
        }

        /* ===== BOOKING BAR ===== */
        .bookingBar {
          margin-top: 14px;
          padding: 14px;
          display: grid;
          grid-template-columns: 1.2fr .8fr .8fr .6fr .9fr .8fr;
          gap: 10px;
          align-items: end;
          border-radius: var(--radius2);
          background: rgba(255,255,255,.07);
          border: 1px solid var(--line);
          animation: slideIn 0.6s ease 0.6s both;
        }

        .field { position: relative; }

        .field label {
          display: block;
          font-size: 12px;
          color: var(--muted);
          margin: 0 0 6px;
        }

        .input, select {
          width: 100%;
          padding: 11px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(0,0,0,.25);
          color: var(--text);
          outline: none;
          transition: all 0.2s ease;
          font-size: 13px;
        }

        .input:focus, select:focus {
          border-color: rgba(117,149,174,.65);
          box-shadow: 0 0 0 4px rgba(117,149,174,.18);
        }

        .input.error {
          border-color: var(--error);
        }

        .field-error {
          position: absolute;
          bottom: -18px;
          left: 0;
          font-size: 11px;
          color: var(--error);
          animation: shake 0.3s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        .hint {
          margin-top: 10px;
          color: var(--muted);
          font-size: 12.5px;
        }

        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .miniCard { padding: 16px; }

        .miniCard h4 {
          margin: 0 0 6px;
          font-size: 14px;
        }

        .miniCard p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.55;
        }

        /* ===== SECTION TITLE ===== */
        .sectionTitle {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 14px;
        }

        .sectionTitle h3 {
          margin: 0;
          font-size: 22px;
        }

        .sectionTitle p {
          margin: 0;
          color: var(--muted);
          font-size: 13.5px;
          max-width: 680px;
          line-height: 1.6;
        }

        /* ===== TOUR CARDS ===== */
        .tourCard {
          padding: 18px;
          position: relative;
          overflow: hidden;
        }

        .tourCard:before {
          content: "";
          position: absolute;
          inset: -40px -40px auto -40px;
          height: 160px;
          background:
            radial-gradient(260px 160px at 40% 40%, rgba(117,149,174,.22), transparent 65%),
            radial-gradient(200px 120px at 70% 30%, rgba(168,197,221,.10), transparent 70%);
          pointer-events: none;
        }

        .tourTop {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: flex-start;
        }

        .badge {
          font-size: 11.5px;
          font-weight: 800;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(117,149,174,.20);
          border: 1px solid rgba(117,149,174,.35);
          color: rgba(255,255,255,.90);
          white-space: nowrap;
        }

        .tourCard h4 {
          margin: 10px 0 10px;
          font-size: 16px;
        }

        .metaRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 12.5px;
        }

        .meta {
          padding: 7px 10px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: rgba(255,255,255,.04);
        }

        .tourBtns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 14px;
        }

        /* ===== ABOUT ===== */
        .aboutGrid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 14px;
          align-items: stretch;
        }

        .aboutBox { padding: 20px; }

        .aboutBox.withBg {
          background:
            linear-gradient(165deg, rgba(0,0,0,.60) 0%, rgba(0,0,0,.40) 100%),
            url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=85') center / cover;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 14px;
        }

        .stat {
          padding: 14px;
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.04);
          transition: all 0.2s ease;
        }

        .stat:hover {
          background: rgba(255,255,255,.07);
          transform: translateY(-2px);
        }

        .stat b {
          display: block;
          font-size: 18px;
          background: linear-gradient(135deg, var(--brand), var(--brand2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat span {
          display: block;
          margin-top: 4px;
          color: var(--muted);
          font-size: 12.5px;
        }

        /* ===== GALLERY ===== */
        .galleryGrid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
        }

        .ph {
          aspect-ratio: 4 / 3;
          border-radius: 16px;
          border: 1px solid var(--line);
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        /* Real Fethiye Bay Photos */
        .ph:nth-child(1) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=85') center / cover;
        }

        .ph:nth-child(2) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=85') center / cover;
        }

        .ph:nth-child(3) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=85') center / cover;
        }

        .ph:nth-child(4) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1540206395-68808572332f?w=400&q=85') center / cover;
        }

        .ph:nth-child(5) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=85') center / cover;
        }

        .ph:nth-child(6) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1596895111956-bf1cf0599e5e?w=400&q=85') center / cover;
        }

        .ph:nth-child(7) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&q=85') center / cover;
        }

        .ph:nth-child(8) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&q=85') center / cover;
        }

        .ph:nth-child(9) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=85') center / cover;
        }

        .ph:nth-child(10) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1584355589360-9d7e9dbb1190?w=400&q=85') center / cover;
        }

        .ph:nth-child(11) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=85') center / cover;
        }

        .ph:nth-child(12) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=85') center / cover;
        }

        .ph:nth-child(n+13) {
          background:
            linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.38)),
            url('https://images.unsplash.com/photo-1540206395-68808572332f?w=400&q=85') center / cover;
        }

        .ph:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,.5);
        }

        .ph:after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.20));
          transition: opacity 0.3s ease;
        }

        .ph:hover:after {
          opacity: 0.5;
        }

        .ph span {
          position: absolute;
          left: 12px;
          bottom: 10px;
          font-size: 12px;
          color: rgba(255,255,255,.85);
          background: rgba(0,0,0,.40);
          border: 1px solid rgba(255,255,255,.20);
          padding: 6px 8px;
          border-radius: 999px;
          z-index: 1;
          backdrop-filter: blur(8px);
        }

        /* ===== FAQ ===== */
        .faqGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        details {
          border: 1px solid var(--line);
          background: rgba(255,255,255,.04);
          border-radius: 18px;
          padding: 12px 14px;
          transition: all 0.2s ease;
        }

        details:hover {
          background: rgba(255,255,255,.06);
        }

        details[open] {
          background: rgba(255,255,255,.08);
        }

        summary {
          cursor: pointer;
          font-weight: 800;
          font-size: 13.5px;
          color: rgba(255,255,255,.90);
          outline: none;
          list-style: none;
          user-select: none;
        }

        summary::-webkit-details-marker {
          display: none;
        }

        summary:hover {
          color: var(--brand);
        }

        details p {
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 13.2px;
          line-height: 1.6;
        }

        /* ===== CONTACT ===== */
        .contactGrid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 14px;
        }

        .form { padding: 18px; }

        .formGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 10px;
        }

        textarea.input {
          min-height: 118px;
          resize: vertical;
          font-family: inherit;
        }

        .quick { padding: 18px; }

        .quickCard {
          padding: 14px;
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.04);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          transition: all 0.2s ease;
        }

        .quickCard:hover {
          background: rgba(255,255,255,.06);
          transform: translateX(2px);
        }

        .quickCard small {
          color: var(--muted);
          display: block;
          margin-top: 2px;
        }

        /* ===== FOOTER ===== */
        footer {
          padding: 26px 0 34px;
          border-top: 1px solid var(--line);
          background:
            linear-gradient(180deg, rgba(0,0,0,.70), rgba(0,0,0,.80)),
            url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80') center bottom / cover;
          position: relative;
        }

        .footerRow {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .footLinks {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 12.5px;
        }

        .footLinks a {
          transition: color 0.2s ease;
        }

        .footLinks a:hover {
          color: var(--brand);
        }

        /* ===== TOAST ===== */
        .toast {
          position: fixed;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          background: rgba(0,0,0,.80);
          border: 1px solid rgba(255,255,255,.20);
          color: rgba(255,255,255,.92);
          padding: 10px 12px;
          border-radius: 999px;
          backdrop-filter: blur(12px);
          box-shadow: 0 14px 35px rgba(0,0,0,.40);
          opacity: 0;
          pointer-events: none;
          transition: opacity .18s ease, transform .18s ease;
          font-size: 13px;
          z-index: 100;
          max-width: 90vw;
        }

        .toast.show {
          opacity: 1;
          transform: translateX(-50%) translateY(-4px);
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.75);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .modal-overlay.active {
          opacity: 1;
        }

        .modal {
          background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.06));
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid var(--line);
          border-radius: var(--radius2);
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,.6);
          transform: scale(0.9);
          transition: transform 0.3s ease;
        }

        .modal-overlay.active .modal {
          transform: scale(1);
        }

        .modal-header {
          padding: 18px;
          border-bottom: 1px solid var(--line);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 18px;
        }

        .modal-close {
          background: transparent;
          border: none;
          font-size: 28px;
          color: var(--muted);
          cursor: pointer;
          line-height: 1;
          transition: color 0.2s ease;
          padding: 0;
          width: 32px;
          height: 32px;
        }

        .modal-close:hover {
          color: var(--text);
        }

        .modal-body {
          padding: 18px;
          line-height: 1.7;
        }

        .modal-body p {
          margin: 0 0 12px;
        }

        .modal-body ul {
          padding-left: 20px;
          margin: 0 0 12px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 980px) {
          .heroGrid { grid-template-columns: 1fr; }
          .bookingBar { grid-template-columns: 1fr 1fr; }
          .grid3 { grid-template-columns: 1fr; }
          .aboutGrid { grid-template-columns: 1fr; }
          .faqGrid { grid-template-columns: 1fr; }
          .contactGrid { grid-template-columns: 1fr; }
          .galleryGrid { grid-template-columns: repeat(3, 1fr); }
          .brand, .actions { min-width: auto; }
          .stats { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .formGrid { grid-template-columns: 1fr; }
          .bookingBar { grid-template-columns: 1fr; }
          .galleryGrid { grid-template-columns: repeat(2, 1fr); }
          .nav { display: none; }
          .heroCopy h2 { font-size: 26px; }
        }
      </style>

      <div class="topbar" id="topbar">
        <div class="wrap topbarInner">
          <div class="brand" onclick="window.scrollTo({top:0,behavior:'smooth'})">
            <div class="logo" aria-hidden="true"></div>
            <div>
              <h1>Kalandar Denizcilik</h1>
              <p>Fethiye Marine Tours</p>
            </div>
          </div>

          <nav class="nav" aria-label="Primary">
            <a href="#tours" data-scroll="tours">${esc(t("nav.tours"))}</a>
            <a href="#about" data-scroll="about">${esc(t("nav.about"))}</a>
            <a href="#gallery" data-scroll="gallery">${esc(t("nav.gallery"))}</a>
            <a href="#faq" data-scroll="faq">${esc(t("nav.faq"))}</a>
            <a href="#contact" data-scroll="contact">${esc(t("nav.contact"))}</a>
          </nav>

          <div class="actions">
            <div class="lang" role="group" aria-label="Language switcher">
              <button class="chip ${state.lang === "tr" ? "active" : ""}" data-lang="tr" aria-label="Türkçe">TR</button>
              <button class="chip ${state.lang === "en" ? "active" : ""}" data-lang="en" aria-label="English">EN</button>
              <button class="chip ${state.lang === "ru" ? "active" : ""}" data-lang="ru" aria-label="Русский">RU</button>
            </div>
            <button class="btn primary" id="btnTopQuote">
              <span class="icon i-arrow" aria-hidden="true"></span>
              ${esc(t("hero.ctaPrimary"))}
            </button>
          </div>
        </div>
      </div>

      <main>
        <section class="hero">
          <div class="wrap">
            <div class="heroGrid">
              <div class="card heroCopy">
                <div class="pillRow">
                  <span class="pill">${esc(t("hero.kpi1"))}</span>
                  <span class="pill">${esc(t("hero.kpi2"))}</span>
                  <span class="pill">${esc(t("hero.kpi3"))}</span>
                </div>

                <h2>${esc(t("hero.headline"))}</h2>
                <p>${esc(t("hero.sub"))}</p>

                <div class="ctaRow">
                  <button class="btn primary" id="btnHeroQuote">
                    <span class="icon i-arrow" aria-hidden="true"></span>
                    ${esc(t("hero.ctaPrimary"))}
                  </button>
                  <button class="btn" id="btnHeroExplore">
                    ${esc(t("hero.ctaSecondary"))}
                  </button>
                </div>

                <div class="bookingBar" role="region" aria-label="${esc(t("top.title"))}">
                  <div class="field">
                    <label>${esc(t("top.route"))}</label>
                    <input class="input" id="route" placeholder="${esc(t("top.routePh"))}" />
                  </div>

                  <div class="field">
                    <label>${esc(t("top.start"))}</label>
                    <input class="input" id="startDate" type="date" />
                  </div>

                  <div class="field">
                    <label>${esc(t("top.end"))}</label>
                    <input class="input" id="endDate" type="date" />
                  </div>

                  <div class="field">
                    <label>${esc(t("top.guests"))}</label>
                    <input class="input" id="guests" type="number" min="1" max="48" value="6" />
                  </div>

                  <div class="field">
                    <label>${esc(t("top.type"))}</label>
                    <select id="tourType">
                      <option value="day">${esc(t("top.types.day"))}</option>
                      <option value="sunset">${esc(t("top.types.sunset"))}</option>
                      <option value="private">${esc(t("top.types.private"))}</option>
                      <option value="diving">${esc(t("top.types.diving"))}</option>
                    </select>
                  </div>

                  <div class="field">
                    <button class="btn primary" id="btnSearch" style="width:100%">
                      <span class="icon i-search" aria-hidden="true"></span>
                      ${esc(t("top.search"))}
                    </button>
                  </div>
                </div>

                <div class="hint">${esc(t("top.note"))}</div>
              </div>

              <div class="card heroVisual" aria-label="Hero visual">
                <div class="overlay">
                  <div class="grid3" style="gap:10px">
                    <div class="miniCard card" style="box-shadow:none">
                      <h4>${esc(t("trust.a.t"))}</h4>
                      <p>${esc(t("trust.a.d"))}</p>
                    </div>
                    <div class="miniCard card" style="box-shadow:none">
                      <h4>${esc(t("trust.b.t"))}</h4>
                      <p>${esc(t("trust.b.d"))}</p>
                    </div>
                    <div class="miniCard card" style="box-shadow:none">
                      <h4>${esc(t("trust.c.t"))}</h4>
                      <p>${esc(t("trust.c.d"))}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section class="section" id="tours">
              <div class="sectionTitle">
                <div>
                  <h3>${esc(t("tours.title"))}</h3>
                  <p>${esc(t("tours.desc"))}</p>
                </div>
              </div>

              <div class="grid3">
                ${I18N[state.lang].tours.cards
          .map(
            (c, idx) => `
                    <div class="card tourCard">
                      <div class="tourTop">
                        <span class="badge">${esc(c.tag)}</span>
                        <span class="pill">#${idx + 1}</span>
                      </div>
                      <h4>${esc(c.name)}</h4>
                      <div class="metaRow">
                        <span class="meta">⏱ ${esc(c.dur)}</span>
                        <span class="meta">👥 ${esc(c.cap)}</span>
                        <span class="meta">⚓ Fethiye</span>
                      </div>
                      <div class="tourBtns">
                        <button class="btn" data-action="details" data-tour="${idx}">
                          ${esc(t("tours.view"))}
                        </button>
                        <button class="btn primary" data-action="book" data-tour="${idx}">
                          ${esc(t("tours.book"))}
                        </button>
                      </div>
                    </div>
                  `
          )
          .join("")}
              </div>
            </section>

            <section class="section" id="about">
              <div class="sectionTitle">
                <div>
                  <h3>${esc(t("about.title"))}</h3>
                  <p>${esc(t("about.p1"))}</p>
                </div>
              </div>

              <div class="aboutGrid">
                <div class="card aboutBox">
                  <p style="margin:0; color:var(--muted); line-height:1.7">${esc(t("about.p2"))}</p>

                  <div class="stats">
                    ${I18N[state.lang].about.stats
          .map(
            (s) => `
                        <div class="stat">
                          <b>${esc(s.k)}</b>
                          <span>${esc(s.v)}</span>
                        </div>
                      `
          )
          .join("")}
                  </div>

                  <div style="margin-top:14px">
                    <button class="btn primary" id="btnCorporate">
                      <span class="icon i-arrow" aria-hidden="true"></span>
                      ${esc(t("about.cta"))}
                    </button>
                  </div>
                </div>

                <div class="card aboutBox withBg">
                  <h4 style="margin:0 0 10px; font-size:16px">Kalandar Denizcilik</h4>
                  <p style="margin:0; color:var(--muted); line-height:1.7; text-shadow: 0 1px 2px rgba(0,0,0,.5);">
                    • Modern tekne filosu<br/>
                    • Ölüdeniz & Göcek uzmanı<br/>
                    • Rota ve program kişiselleştirme<br/>
                    • Emniyet ve sigorta garantisi
                  </p>
                  <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap">
                    <button class="btn" id="btnCopyPhone">
                      <span class="icon i-phone"></span>${esc(t("contact.quick.call"))}
                    </button>
                    <button class="btn" id="btnCopyEmail">
                      <span class="icon i-mail"></span>${esc(t("contact.quick.mail"))}
                    </button>
                    <button class="btn" id="btnWhatsapp">
                      <span class="icon i-wa"></span>${esc(t("contact.quick.whatsapp"))}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section class="section" id="gallery">
              <div class="sectionTitle">
                <div>
                  <h3>${esc(t("gallery.title"))}</h3>
                  <p>${esc(t("gallery.desc"))}</p>
                </div>
                <button class="btn" id="btnAddPhoto">+ ${esc(t("gallery.add"))}</button>
              </div>

              <div class="galleryGrid" id="galleryGrid">
                ${Array.from({ length: state.galleryCount })
          .map((_, i) => {
            const labels = [
              "Ölüdeniz Beach",
              "Butterfly Valley",
              "Blue Lagoon",
              "Kabak Bay",
              "Turquoise Coast",
              "Fethiye Marina",
              "Göcek Bays",
              "Gemiler Island",
              "Cleopatra Bath",
              "Aquarium Bay",
              "12 Islands Tour",
              "Sunset Cruise"
            ];
            return `
                    <div class="ph" role="img" aria-label="${labels[i] || 'Gallery photo ' + (i + 1)}" data-gallery-idx="${i}">
                      <span>${labels[i] || 'Photo ' + (i + 1)}</span>
                    </div>
                  `;
          })
          .join("")}
              </div>
            </section>

            <section class="section" id="faq">
              <div class="sectionTitle">
                <div>
                  <h3>${esc(t("faq.title"))}</h3>
                </div>
              </div>

              <div class="faqGrid">
                ${I18N[state.lang].faq.items
          .map(
            (it, i) => `
                    <details ${i === 0 ? "open" : ""}>
                      <summary>${esc(it.q)}</summary>
                      <p>${esc(it.a)}</p>
                    </details>
                  `
          )
          .join("")}
              </div>
            </section>

            <section class="section" id="contact">
              <div class="sectionTitle">
                <div>
                  <h3>${esc(t("contact.title"))}</h3>
                  <p>${esc(t("contact.desc"))}</p>
                </div>
              </div>

              <div class="contactGrid">
                <div class="card form">
                  <div class="formGrid">
                    <div class="field">
                      <label>${esc(t("contact.form.name"))}</label>
                      <input class="input" id="cName" placeholder="Kalandar Guest" required />
                      <div class="field-error" id="cNameError"></div>
                    </div>
                    <div class="field">
                      <label>${esc(t("contact.form.email"))}</label>
                      <input class="input" id="cEmail" type="email" placeholder="name@email.com" required />
                      <div class="field-error" id="cEmailError"></div>
                    </div>
                  </div>

                  <div class="formGrid">
                    <div class="field">
                      <label>${esc(t("contact.form.phone"))}</label>
                      <input class="input" id="cPhone" type="tel" placeholder="+90..." required />
                      <div class="field-error" id="cPhoneError"></div>
                    </div>
                    <div class="field">
                      <label>&nbsp;</label>
                      <button class="btn primary" id="btnSend" style="width:100%">
                        <span class="icon i-arrow" aria-hidden="true"></span>
                        ${esc(t("contact.form.send"))}
                      </button>
                    </div>
                  </div>

                  <div class="field">
                    <label>${esc(t("contact.form.msg"))}</label>
                    <textarea class="input" id="cMsg" placeholder="..." required></textarea>
                    <div class="field-error" id="cMsgError"></div>
                  </div>
                </div>

                <div class="card quick">
                  <div class="quickCard">
                    <div>
                      <b style="font-size:14px">${esc(t("contact.quick.call"))}</b>
                      <small>${esc(state.demoPhone)}</small>
                    </div>
                    <button class="btn" id="btnCallNow">
                      <span class="icon i-phone"></span>${esc(t("ui.ok"))}
                    </button>
                  </div>

                  <div class="quickCard">
                    <div>
                      <b style="font-size:14px">${esc(t("contact.quick.whatsapp"))}</b>
                      <small>${esc(state.demoWhatsapp)}</small>
                    </div>
                    <button class="btn" id="btnWaNow">
                      <span class="icon i-wa"></span>${esc(t("ui.ok"))}
                    </button>
                  </div>

                  <div class="quickCard" style="margin-bottom:0">
                    <div>
                      <b style="font-size:14px">${esc(t("contact.quick.mail"))}</b>
                      <small>${esc(state.demoEmail)}</small>
                    </div>
                    <button class="btn" id="btnMailNow">
                      <span class="icon i-mail"></span>${esc(t("ui.ok"))}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer>
        <div class="wrap footerRow">
          <div style="color:var(--muted); font-size:12.5px">
            © ${new Date().getFullYear()} <b style="color:rgba(255,255,255,.92)">Kalandar Denizcilik</b> — ${esc(t("footer.rights"))}
          </div>
          <div class="footLinks">
            <a href="#" data-foot="kvkk">${esc(t("footer.links.kvkk"))}</a>
            <a href="#" data-foot="terms">${esc(t("footer.links.terms"))}</a>
            <a href="#" data-foot="cookies">${esc(t("footer.links.cookies"))}</a>
          </div>
        </div>
      </footer>

      <div class="toast" id="toast" role="status" aria-live="polite"></div>
    `;

      // ========== Event Handlers ==========

      // Topbar scroll effect
      window.addEventListener("scroll", () => {
        const topbar = $("#topbar");
        if (window.pageYOffset > 100) {
          topbar.classList.add("scrolled");
        } else {
          topbar.classList.remove("scrolled");
        }
      });

      // Navigation smooth scroll
      $$("[data-scroll]").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          scrollToId(a.getAttribute("data-scroll"));
        });
      });

      // Language switcher
      $$("[data-lang]").forEach((b) => {
        b.addEventListener("click", () => {
          const newLang = b.getAttribute("data-lang");
          if (newLang !== state.lang) {
            state.lang = newLang;
            document.documentElement.lang = newLang;
            render();
            toast(I18N[newLang].langName);
          }
        });
      });

      // Hero CTAs
      $("#btnTopQuote").addEventListener("click", () => {
        toast(t("alerts.quote"));
        scrollToId("contact");
        setTimeout(() => {
          $("#cMsg").value = `${I18N[state.lang].hero.ctaPrimary} — `;
          $("#cName").focus();
        }, 600);
      });

      $("#btnHeroQuote").addEventListener("click", () => $("#btnTopQuote").click());
      $("#btnHeroExplore").addEventListener("click", () => scrollToId("tours"));

      // Search availability with validation
      $("#btnSearch").addEventListener("click", () => {
        const route = $("#route").value.trim();
        const start = $("#startDate").value;
        const end = $("#endDate").value;
        const guests = $("#guests").value;
        const type = $("#tourType").value;

        // Validate dates
        if (start && end && new Date(start) > new Date(end)) {
          toast(t("alerts.dateError"), 3000);
          return;
        }

        toast(t("alerts.searching"));

        setTimeout(() => {
          toast(t("alerts.searchResults"), 3000);
          setTimeout(() => {
            scrollToId("contact");
            $("#cMsg").value =
              `Availability request:\n` +
              `Route: ${route || "(not specified)"}\n` +
              `Start: ${start || "(not specified)"}\n` +
              `End: ${end || "(not specified)"}\n` +
              `Guests: ${guests}\n` +
              `Type: ${t("top.types." + type)}\n\n` +
              `Notes: `;
          }, 800);
        }, 1200);
      });

      // Tour details with modal
      $$("[data-action='details']").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-tour"));
          const c = I18N[state.lang].tours.cards[idx];

          const content = `
          <p><strong>${esc(c.name)}</strong></p>
          <p><strong>Duration:</strong> ${esc(c.dur)}<br/>
          <strong>Capacity:</strong> ${esc(c.cap)}<br/>
          <strong>Location:</strong> Fethiye Coast</p>

          <p>This tour features:</p>
          <ul>
            <li>Professional captain and crew</li>
            <li>Modern, well-maintained vessel</li>
            <li>Lunch and refreshments included</li>
            <li>Snorkeling equipment provided</li>
            <li>Swimming stops at beautiful bays</li>
            <li>Full insurance coverage</li>
          </ul>

          <p>Contact us for pricing and availability.</p>

          <button class="btn primary" onclick="this.closest('.modal-overlay').querySelector('.modal-close').click(); document.getElementById('contact').scrollIntoView({behavior:'smooth',block:'start'});" style="margin-top:10px">
            ${esc(t("tours.book"))}
          </button>
        `;

          showModal(t("alerts.details") + ": " + c.name, content);
        });
      });

      // Tour booking
      $$("[data-action='book']").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-tour"));
          const c = I18N[state.lang].tours.cards[idx];
          toast(t("alerts.book"));
          scrollToId("contact");
          setTimeout(() => {
            $("#cMsg").value = `Booking request: ${c.name}\nPreferred date(s): \nGuests: \n\nAdditional notes: `;
            $("#cEmail").focus();
          }, 600);
        });
      });

      // Corporate CTA
      $("#btnCorporate").addEventListener("click", () => {
        toast(t("alerts.quote"));
        scrollToId("contact");
        setTimeout(() => {
          $("#cMsg").value = `Corporate quote request:\n• Date:\n• Guest count:\n• Special requests:\n`;
          $("#cName").focus();
        }, 600);
      });

      // Copy contact info
      $("#btnCopyPhone").addEventListener("click", () =>
        copyToClipboard(state.demoPhone, t("alerts.copiedPhone"))
      );

      $("#btnCopyEmail").addEventListener("click", () =>
        copyToClipboard(state.demoEmail, t("alerts.copiedEmail"))
      );

      $("#btnWhatsapp").addEventListener("click", () => {
        const url = `https://wa.me/${state.demoWhatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
          "Hello, I'd like to get info about Fethiye boat tours."
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");
      });

      // Gallery add
      $("#btnAddPhoto").addEventListener("click", () => {
        state.galleryCount += 6;
        render();
        toast(t("alerts.galleryAdded"));
        setTimeout(() => scrollToId("gallery"), 200);
      });

      // Gallery click
      $$("[data-gallery-idx]").forEach((el) => {
        el.addEventListener("click", () => {
          const idx = Number(el.getAttribute("data-gallery-idx"));
          const labels = [
            "Ölüdeniz Beach",
            "Butterfly Valley",
            "Blue Lagoon",
            "Kabak Bay",
            "Turquoise Coast",
            "Fethiye Marina",
            "Göcek Bays",
            "Gemiler Island",
            "Cleopatra Bath",
            "Aquarium Bay",
            "12 Islands Tour",
            "Sunset Cruise"
          ];
          const content = `
          <div style="text-align:center">
            <div class="ph" style="max-width:100%; margin:0 auto; cursor:default">
              <span>${labels[idx] || 'Photo ' + (idx + 1)}</span>
            </div>
            <p style="margin-top:14px; color:var(--muted)">
              ${labels[idx] || 'Gallery photo'}<br/>
              Fethiye, Turkey
            </p>
          </div>
        `;
          showModal(`Gallery - ${labels[idx] || 'Photo ' + (idx + 1)}`, content);
        });
      });

      // Contact form with validation
      const clearFieldError = (fieldId) => {
        $(`#${fieldId}`).classList.remove("error");
        $(`#${fieldId}Error`).textContent = "";
      };

      const setFieldError = (fieldId, message) => {
        $(`#${fieldId}`).classList.add("error");
        $(`#${fieldId}Error`).textContent = message;
      };

      ["cName", "cEmail", "cPhone", "cMsg"].forEach((id) => {
        $(`#${id}`).addEventListener("input", () => clearFieldError(id));
      });

      $("#btnSend").addEventListener("click", () => {
        ["cName", "cEmail", "cPhone", "cMsg"].forEach(clearFieldError);

        const name = $("#cName").value.trim();
        const email = $("#cEmail").value.trim();
        const phone = $("#cPhone").value.trim();
        const message = $("#cMsg").value.trim();

        let hasError = false;

        if (!validateName(name)) {
          setFieldError("cName", t("contact.form.nameReq"));
          hasError = true;
        }

        if (!validateEmail(email)) {
          setFieldError("cEmail", t("contact.form.emailReq"));
          hasError = true;
        }

        if (!validatePhone(phone)) {
          setFieldError("cPhone", t("contact.form.phoneReq"));
          hasError = true;
        }

        if (message.length < 10) {
          setFieldError("cMsg", t("contact.form.msgReq"));
          hasError = true;
        }

        if (hasError) {
          toast(t("alerts.formError"), 3000);
          return;
        }

        const btn = $("#btnSend");
        btn.disabled = true;
        btn.classList.add("loading");
        btn.innerHTML = `<span class="icon i-arrow"></span>${esc(t("ui.sending"))}`;

        const payload = {
          name,
          email,
          phone,
          message,
          lang: state.lang,
          ts: new Date().toISOString(),
        };

        setTimeout(() => {
          const key = "kalandar_contact_submissions";
          const prev = JSON.parse(localStorage.getItem(key) || "[]");
          prev.push(payload);
          localStorage.setItem(key, JSON.stringify(prev));

          btn.disabled = false;
          btn.classList.remove("loading");
          btn.innerHTML = `<span class="icon i-arrow"></span>${esc(t("contact.form.send"))}`;

          toast(t("contact.toastOk"), 3500);

          $("#cName").value = "";
          $("#cEmail").value = "";
          $("#cPhone").value = "";
          $("#cMsg").value = "";
        }, 1500);
      });

      // Quick contact buttons
      $("#btnCallNow").addEventListener("click", () => {
        window.location.href = `tel:${state.demoPhone.replace(/\s/g, "")}`;
      });

      $("#btnWaNow").addEventListener("click", () => $("#btnWhatsapp").click());

      $("#btnMailNow").addEventListener("click", () => {
        window.location.href = `mailto:${state.demoEmail}?subject=${encodeURIComponent(
          "Kalandar Denizcilik — Fethiye Tours Inquiry"
        )}`;
      });

      // Footer policy links
      $$("[data-foot]").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const type = a.getAttribute("data-foot");
          let content = "";

          if (type === "kvkk") {
            content = `
            <p>Privacy Policy placeholder.</p>
            <ul>
              <li>Data collection and usage</li>
              <li>Personal information protection</li>
              <li>User rights under KVKK/GDPR</li>
              <li>Contact for privacy inquiries</li>
            </ul>
          `;
          } else if (type === "terms") {
            content = `
            <p>Terms of Service placeholder.</p>
            <ul>
              <li>Service usage terms</li>
              <li>Booking and cancellation policies</li>
              <li>Payment terms</li>
              <li>Liability limitations</li>
            </ul>
          `;
          } else if (type === "cookies") {
            content = `
            <p>Cookie Policy placeholder.</p>
            <ul>
              <li>Types of cookies used</li>
              <li>Purpose of each cookie</li>
              <li>How to control cookies</li>
            </ul>
          `;
          }

          showModal(a.textContent, content);
        });
      });

      // Date constraints
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      const minDate = `${yyyy}-${mm}-${dd}`;

      $("#startDate").setAttribute("min", minDate);
      $("#endDate").setAttribute("min", minDate);

      $("#startDate").addEventListener("change", () => {
        const s = $("#startDate").value;
        if (s) $("#endDate").setAttribute("min", s);
      });

      // Keyboard shortcuts
      document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
          e.preventDefault();
          $("#route").focus();
        }
      });
    };

    render();
  })();
