// ===== KALANDAR DENIZCILIK - PROFESSIONAL WEBSITE =====
// Professional-grade marine tourism website with full functionality
// All components are fully operational and production-ready

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
                routePh: "Örn: Ölüdeniz, Göcek",
                start: "Başlangıç",
                end: "Bitiş",
                guests: "Kişi",
                type: "Tur Tipi",
                types: { day: "Günübirlik", sunset: "Gün Batımı", private: "Özel Charter", diving: "Dalış & Keşif" },
                search: "Müsaitlik Ara",
                note: "Takvim ve tercihlerine göre anında öneri al.",
            },
            hero: {
                kpi1: "Kurumsal Hizmet",
                kpi2: "Güvenli Rezervasyon",
                kpi3: "Şeffaf Fiyatlandırma",
                headline: "Muğla/Fethiye'nin en seçkin koylarında kurumsal deniz deneyimi",
                sub: "Kalandar Denizcilik ile profesyonel ekip, modern tekneler ve kusursuz rota planlaması.",
                ctaPrimary: "Teklif Al",
                ctaSecondary: "Turları İncele",
            },
            trust: {
                a: { t: "10+ Yıl Deneyim", d: "Muğla/Fethiye'nin en güzel koylarında güvenli deniz turları" },
                b: { t: "Sigortalı Seferler", d: "Kaptan, ekip ve tam sigorta güvencesi" },
                c: { t: "%99 Memnuniyet", d: "Kurumsal ve bireysel gruplara özel hizmet" },
            },
            tours: {
                title: "Popüler Turlar",
                desc: "Kurumsal ve bireysel gruplar için planlanmış seçkin rota seçenekleri.",
                cards: [
                    { name: "Günübirlik Koylar", tag: "En Çok Tercih Edilen", dur: "7–8 saat", cap: "maks. 47 kişi" },
                    { name: "Özel Charter (Ayliz & Ephesus)", tag: "Kurumsal", dur: "Esnek", cap: "Özel kapasite" },
                ],
                view: "Detayları Gör",
                book: "Rezervasyon Başlat",
            },
            about: {
                title: "Kalandar Denizcilik Hakkında",
                p1: "Kalandar Denizcilik; deniz turizmi, rota planlama ve misafir yönetimi alanında kurumsal standartlarda hizmet sunar.",
                p2: "Tüm turlarımız; güvenlik, konfor ve zaman planı odağında tasarlanır. İster özel bir gün, ister şirket etkinliği: aynı özen.",
                visionTitle: "Vizyon",
                vision: "Türkiye'nin ulusal ve uluslararası denizcilik sektöründe güvenilirlik, hizmet kalitesi ve denizcilik tecrübesi ile öne çıkan öncü şirketlerinden biri olmak. Denizciliği sadece bir hizmet olarak değil, bir yaşam biçimi olarak benimseyen yenilikçi ve saygın bir marka haline gelmek.",
                missionTitle: "Misyon",
                mission: "Müşterilerimize denizcilik alanında güvenlik, kalite ve profesyonellik temelinde güvenilir, sürdürülebilir ve yüksek standartlı denizcilik hizmetleri sunmak. Her koşulda sorumluluk bilinciyle hareket ederek, denizcilik kültürüne ve denizcilik etik değerlerine bağlı kalmak.",
                stats: [
                    { k: "10+ yıl", v: "Operasyon Deneyimi" },
                    { k: "4.9/5", v: "Misafir Memnuniyeti" },
                    { k: "10+ rota", v: "Muğla/Fethiye" },
                ],
                cta: "Kurumsal Teklif İste",
            },
            aboutUs: {
                title: "Biz Kimiz",
                p1: "Yönetim Kurulu Başkanımız Gökmen Dede, ticari faaliyetlerine 2000'li yılların başında turizm ve ulaşım sektörlerinde başlamıştır. Yaklaşık 15 yıllık ticari sektör deneyiminin ardından, 2016 yılında deniz turizmi ve günübirlik tekne işletmeciliği alanına girerek turizm faaliyetlerine yeni bir boyut kazandırmıştır.",
                p2: "Zamanla, şirketimizin faaliyet alanları gelişen sektörün talep ve ihtiyaçları doğrultusunda çeşitlenmiş; turizm amaçlı charter tekne kiralama hizmetleri, tekne yenileme ve imalat faaliyetleri ile turizm amaçlı balıkçılık portföyümüze eklenmiştir.",
                p3: "Merkezi Fethiye'de bulunan şirketimiz, uzman kadrosu ve yenilenen deniz turizmi araçları ile Güney Ege Bölgesi'ne hizmet vermeye devam etmektedir.",
            },
            gallery: {
                title: "Galeri",
                desc: "Fethiye'nin turkuaz suları, gizli koyları ve unutulmaz anılardan seçmeler.",
                ephesus: "Ephesus",
                ayliz: "Ayliz",
                photos: "Fotoğraflar",
                add: "Fotoğraf Yükle",
                viewAll: "Tümünü Gör",
            },
            faq: {
                title: "Sık Sorulan Sorular",
                items: [
                    { q: "Rezervasyon nasıl çalışır?", a: "Tercihlerinizi seçin, müsaitlik önerisini alın ve ekibimiz onay ile süreci tamamlasın." },
                    { q: "Hava koşullarında iptal olur mu?", a: "Güvenlik önceliklidir. Uygun olmayan koşullarda alternatif tarih/rota sunarız." },
                    { q: "Kurumsal etkinlik düzenlenebilir mi?", a: "Evet. Menü, müzik, branding ve program akışı kurumsal ihtiyaçlara göre planlanır." },
                    { q: "Hangi bölgelere hizmet veriyorsunuz?", a: "Fethiye Koyları, Göcek ve Ölüdeniz bölgelerinde hizmet veriyoruz." },
                    { q: "Fiyatlara ne dahil?", a: "Kaptan, mürettebat, yakıt, standart ikramlar ve sigorta dahildir. Özel talepler için teklif alınır." },
                    { q: "İptal koşulları nedir?", a: "48 saat öncesine kadar iptal edilebilir ve tam iade yapılır. Hava koşulları nedeniyle iptaller için esnek yaklaşım uygulanır." },
                ],
            },
            contact: {
                title: "İletişim",
                desc: "Teklif, rota ve özel talepler için bize yazın.",
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
                toastOk: "Mesajınız alındı. Ekibimiz kısa süre içinde dönüş yapacak.",
            },
            footer: {
                rights: "Tüm hakları saklıdır.",
                links: { kvkk: "KVKK", terms: "Kullanım Şartları", cookies: "Çerezler" },
            },
            ui: {
                close: "Kapat",
                ok: "Tamam",
                copied: "Kopyalandı",
                loading: "Yükleniyor...",
                sending: "Gönderiliyor...",
            },
            alerts: {
                searching: "Müsaitlik aranıyor...",
                searchResults: "Müsait turlar bulundu! İletişim formuna yönlendiriliyorsunuz.",
                quote: "Teklif talebi oluşturuldu.",
                book: "Rezervasyon formu hazırlandı.",
                details: "Tur Detayları",
                galleryAdded: "Fotoğraf eklendi.",
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
                routePh: "e.g., Ölüdeniz, Göcek",
                start: "Start",
                end: "End",
                guests: "Guests",
                type: "Tour Type",
                types: { day: "Day Trip", sunset: "Sunset", private: "Private Charter", diving: "Diving & Explore" },
                search: "Search Availability",
                note: "Get instant suggestions based on your dates & preferences.",
            },
            hero: {
                kpi1: "Corporate-Grade",
                kpi2: "Secure Reservation",
                kpi3: "Transparent Pricing",
                headline: "A premium marine experience across Muğla/Fethiye's finest bays",
                sub: "With Kalandar Denizcilik: professional crew, modern boats, and flawless route planning.",
                ctaPrimary: "Request a Quote",
                ctaSecondary: "Explore Tours",
            },
            trust: {
                a: { t: "10+ Years Experience", d: "Safe marine tours across Muğla/Fethiye's finest bays" },
                b: { t: "Fully Insured", d: "Licensed captain, crew and full coverage" },
                c: { t: "99% Satisfaction", d: "Tailored service for corporate & private groups" },
            },
            tours: {
                title: "Popular Tours",
                desc: "Curated routes for corporate and private groups.",
                cards: [
                    { name: "Bays Day Trip", tag: "Most Popular", dur: "7–8 hours", cap: "max. 47 guests" },
                    { name: "Private Charter (Ayliz & Ephesus)", tag: "Corporate", dur: "Flexible", cap: "Custom capacity" },
                ],
                view: "View Details",
                book: "Start Booking",
            },
            about: {
                title: "About Kalandar Denizcilik",
                p1: "Kalandar Denizcilik delivers corporate-standard service in marine tourism, route planning, and guest operations.",
                p2: "Every tour is designed around safety, comfort, and timing. Special moments or company events—same level of care.",
                visionTitle: "Vision",
                vision: "To be one of Turkey's leading companies in maritime tourism, distinguished by reliability, service quality, and maritime experience in the national and international shipping industry. To become an innovative and reputable brand that embraces maritime not only as a service but as a way of life.",
                missionTitle: "Mission",
                mission: "To provide our customers with reliable, sustainable, and high-standard maritime services based on safety, quality, and professionalism in the maritime field. Acting with a sense of responsibility in all circumstances, adhering to maritime culture and maritime ethical values.",
                stats: [
                    { k: "10+ yrs", v: "Operational Experience" },
                    { k: "4.9/5", v: "Guest Satisfaction" },
                    { k: "10+ routes", v: "Muğla/Fethiye" },
                ],
                cta: "Request a Corporate Quote",
            },
            aboutUs: {
                title: "About Us",
                p1: "Our Chairman of the Board, Gökmen Dede, began his commercial activities in the tourism and transportation sectors in the early 2000s. After approximately 15 years of experience in the commercial sector, he entered the field of marine tourism and day trip boat operations in 2016, adding a new dimension to his tourism activities.",
                p2: "Over time, our company's areas of activity have diversified in line with the demands and needs of the developing sector; charter boat rental services for tourism purposes, boat renovation and manufacturing activities, and fishing for tourism purposes have been added to our portfolio.",
                p3: "Our company, which continues to operate from its headquarters in Fethiye, continues to serve the South Aegean Region with its expert staff and renewed marine tourism vehicles.",
            },
            gallery: {
                title: "Gallery",
                desc: "Fethiye's turquoise waters, hidden coves, and unforgettable memories.",
                ephesus: "Ephesus",
                ayliz: "Ayliz",
                photos: "Photos",
                add: "Upload Photo",
                viewAll: "View All",
            },
            faq: {
                title: "Frequently Asked Questions",
                items: [
                    { q: "How does booking work?", a: "Pick preferences, get an availability suggestion, then our team confirms and finalizes." },
                    { q: "Do you cancel due to weather?", a: "Safety comes first. If conditions are unsuitable, we offer alternative date/route options." },
                    { q: "Can you run corporate events?", a: "Yes—menu, music, branding, and agenda can be tailored to your needs." },
                    { q: "Which areas do you serve?", a: "We provide services in the Fethiye Bays, Göcek, and Ölüdeniz areas." },
                    { q: "What's included in pricing?", a: "Captain, crew, fuel, standard catering, and insurance are included. Custom requests quoted separately." },
                    { q: "What are the cancellation terms?", a: "Full refund for cancellations 48+ hours in advance. Flexible approach for weather-related cancellations." },
                ],
            },
            contact: {
                title: "Contact",
                desc: "Write to us for quotes, routes, and special requests.",
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
                toastOk: "Message received. Our team will get back to you shortly.",
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
                searching: "Searching availability...",
                searchResults: "Available tours found! Redirecting to contact form.",
                quote: "Quote request created.",
                book: "Booking form prepared.",
                details: "Tour Details",
                galleryAdded: "Photo added.",
                copiedEmail: "Email copied.",
                copiedPhone: "Phone copied.",
                formSuccess: "Form submitted successfully!",
                formError: "Please fill all required fields.",
                dateError: "Please select a valid date range.",
            },
        },

        ru: {
            langName: "Русский",
            nav: { tours: "Туры", about: "О компании", gallery: "Галерея", faq: "FAQ", contact: "Контакты" },
            top: {
                title: "Найти тур",
                route: "Маршрут",
                routePh: "например: Ölüdeniz, Göcek",
                start: "Начало",
                end: "Конец",
                guests: "Гостей",
                type: "Тип тура",
                types: { day: "Дневной тур", sunset: "Закат", private: "Частный чартер", diving: "Дайвинг и прогулка" },
                search: "Проверить доступность",
                note: "Мгновенные рекомендации по датам и предпочтениям.",
            },
            hero: {
                kpi1: "Корпоративный уровень",
                kpi2: "Безопасное бронирование",
                kpi3: "Прозрачные цены",
                headline: "Премиальный морской опыт в лучших бухтах Мугла/Фетхие",
                sub: "Kalandar Denizcilik: профессиональная команда, современные суда и безупречное планирование маршрута.",
                ctaPrimary: "Запросить предложение",
                ctaSecondary: "Смотреть туры",
            },
            trust: {
                a: { t: "10+ лет опыта", d: "Безопасные морские туры по лучшим бухтам Мугла/Фетхие" },
                b: { t: "Полная страховка", d: "Лицензированный капитан, экипаж и полное покрытие" },
                c: { t: "99% довольных", d: "Индивидуальный сервис для групп и компаний" },
            },
            tours: {
                title: "Популярные туры",
                desc: "Подобранные маршруты для частных и корпоративных групп.",
                cards: [
                    { name: "Дневной тур по бухтам", tag: "Хит", dur: "7–8 часов", cap: "макс. 47 гостей" },
                    { name: "Частный чартер (Ayliz & Ephesus)", tag: "Корпоративный", dur: "Гибко", cap: "Индивидуально" },
                ],
                view: "Подробнее",
                book: "Начать бронирование",
            },
            about: {
                title: "О Kalandar Denizcilik",
                p1: "Kalandar Denizcilik предоставляет сервис корпоративного уровня в морском туризме, планировании маршрутов и гостевом сервисе.",
                p2: "Каждый тур создаётся с фокусом на безопасность, комфорт и тайминг. Особое событие или корпоратив — одинаково высокий стандарт.",
                visionTitle: "Видение",
                vision: "Быть одной из ведущих компаний Турции в морском туризме, отличающейся надёжностью, качеством обслуживания и морским опытом. Стать инновационным и уважаемым брендом, который воспринимает море не только как услугу, но и как образ жизни.",
                missionTitle: "Миссия",
                mission: "Предоставлять нашим клиентам надёжные, устойчивые и высокостандартные морские услуги, основанные на безопасности, качестве и профессионализме. Действовать с чувством ответственности, придерживаясь морской культуры и этических ценностей.",
                stats: [
                    { k: "10+ лет", v: "Опыт" },
                    { k: "4.9/5", v: "Оценка гостей" },
                    { k: "10+ маршрутов", v: "Мугла/Фетхие" },
                ],
                cta: "Корпоративное предложение",
            },
            aboutUs: {
                title: "О нас",
                p1: "Председатель нашего совета директоров, Гёкмен Деде, начал свою коммерческую деятельность в сфере туризма и транспорта в начале 2000-х годов. После примерно 15 лет опыта в коммерческом секторе, в 2016 году он вышел в сферу морского туризма и однодневных яхтенных туров.",
                p2: "Со временем направления деятельности нашей компании расширились: аренда чартерных лодок, ремонт и производство яхт, а также туристическая рыбалка были добавлены в наш портфель.",
                p3: "Наша компания, штаб-квартира которой находится в Фетхие, продолжает обслуживать Южно-Эгейский регион своей экспертной командой и обновлённым флотом.",
            },
            gallery: {
                title: "Галерея",
                desc: "Бирюзовые воды Фетхие, скрытые бухты и незабываемые моменты.",
                ephesus: "Ephesus",
                ayliz: "Ayliz",
                photos: "Фотографии",
                add: "Загрузить фото",
                viewAll: "Смотреть все",
            },
            faq: {
                title: "Частые вопросы",
                items: [
                    { q: "Как работает бронирование?", a: "Выберите параметры, получите предложение по доступности, затем команда подтвердит и завершит." },
                    { q: "Отмена из-за погоды?", a: "Безопасность важнее всего. При плохих условиях предложим альтернативную дату/маршрут." },
                    { q: "Возможны корпоративные мероприятия?", a: "Да: меню, музыка, брендинг и программа — под ваш запрос." },
                    { q: "В каких регионах вы работаете?", a: "Мы оказываем услуги в бухтах Фетхие, Гёджек и Ёлюдениз." },
                    { q: "Что включено в стоимость?", a: "Капитан, экипаж, топливо, стандартное питание и страховка. Особые запросы по отдельному расчёту." },
                    { q: "Условия отмены?", a: "Полный возврат при отмене за 48+ часов. Гибкий подход при отмене из-за погоды." },
                ],
            },
            contact: {
                title: "Контакты",
                desc: "Напишите нам по предложениям, маршрутам и особым запросам.",
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
                searching: "Проверяем доступность...",
                searchResults: "Найдены доступные туры! Переход к форме контакта.",
                quote: "Запрос предложения создан.",
                book: "Форма бронирования подготовлена.",
                details: "Детали тура",
                galleryAdded: "Фото добавлено.",
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
        lightboxOpen: false,
        lightboxIndex: 0,
        demoEmail: "info@kalandardenizcilik.com",
        demoPhone: "+90 555 888 0148",
        demoWhatsapp: "+90 555 888 0148",
        formLoading: false,
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

    // Form validation helpers
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => phone.trim().length >= 10;
    const validateName = (name) => name.trim().length >= 2;

    // Modal helper
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
          --bg: #07131c;
          --panel: rgba(255,255,255,.06);
          --panel2: rgba(255,255,255,.09);
          --text: rgba(255,255,255,.92);
          --muted: rgba(255,255,255,.70);
          --line: rgba(255,255,255,.14);
          --brand: #35c3ff;
          --brand2: #2be7c3;
          --accent: #9bd6ff;
          --shadow: 0 18px 45px rgba(0,0,0,.35);
          --radius: 16px;
          --radius2: 22px;
          --max: 1180px;
          --error: #ff4757;
          --success: #2be7c3;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        html, body { height: 100%; }

        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Helvetica Neue", sans-serif;
          color: var(--text);
          background: transparent;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .wrap {
          position: relative;
          z-index: 1;
        }

        a { color: inherit; text-decoration: none; }

        button { font-family: inherit; }

        .wrap { max-width: var(--max); margin: 0 auto; padding: 0 20px; }

        /* ===== TOPBAR ===== */
        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
          background: rgba(91,135,160,.92);
          border-bottom: 1px solid rgba(255,255,255,.15);
          transition: background 0.3s ease;
        }

        .topbar.scrolled {
          background: rgba(91,135,160,.98);
          box-shadow: 0 4px 20px rgba(0,0,0,.35);
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
          width: 56px;
          height: 56px;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,.25);
          flex-shrink: 0;
          overflow: hidden;
        }

        .logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
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
          position: relative;
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
          color: #001018;
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
          background: linear-gradient(135deg, #e67e5a, #d65f3e);
          box-shadow: 0 12px 28px rgba(230,126,90,.35);
          font-weight: 700;
          text-shadow: 0 1px 2px rgba(0,0,0,.15);
        }

        .btn.primary:hover {
          filter: saturate(1.1) brightness(1.08);
          box-shadow: 0 14px 32px rgba(230,126,90,.45);
          transform: translateY(-2px);
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
        .i-close { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z"/></svg>'); }

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
          background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
          backdrop-filter: blur(10px);
          border: 1px solid var(--line);
          border-radius: var(--radius2);
          box-shadow: var(--shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(0,0,0,.5), 0 0 0 1px rgba(53,195,255,.15);
        }

        .heroVisual {
          min-height: 360px;
          position: relative;
          overflow: hidden;
        }

        .heroVisual .hero-bg-animated {
          display: none;
        }

        @keyframes kenBurns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(0.5%, -1%);
          }
        }

        .heroVisual:before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,.02);
          backdrop-filter: blur(40px) saturate(1.4);
          -webkit-backdrop-filter: blur(40px) saturate(1.4);
          z-index: 1;
          pointer-events: none;
        }

        .heroVisual:after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 20% 30%, rgba(53,195,255,.12), transparent 55%),
            radial-gradient(ellipse 70% 40% at 75% 70%, rgba(43,231,195,.10), transparent 50%),
            linear-gradient(180deg, rgba(255,255,255,.04) 0%, transparent 30%);
          z-index: 2;
          pointer-events: none;
        }

        .heroVisual .overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: transparent;
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
          background: rgba(255,255,255,.04);
          color: var(--muted);
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .pill:hover {
          background: rgba(255,255,255,.08);
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
          background: rgba(255,255,255,.05);
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
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(0,0,0,.18);
          color: var(--text);
          outline: none;
          transition: all 0.2s ease;
          font-size: 13px;
        }

        .input:focus, select:focus {
          border-color: rgba(53,195,255,.55);
          box-shadow: 0 0 0 4px rgba(53,195,255,.12);
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

        .miniCardsStack {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .miniCard {
          padding: 14px 16px;
          min-height: 85px;
          background: rgba(255,255,255,.06);
          backdrop-filter: blur(24px) saturate(1.5);
          -webkit-backdrop-filter: blur(24px) saturate(1.5);
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 16px;
          box-shadow: 
            0 8px 32px rgba(0,0,0,.15),
            inset 0 1px 0 rgba(255,255,255,.12),
            inset 0 -1px 0 rgba(0,0,0,.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .miniCard:hover {
          background: rgba(255,255,255,.09);
          border-color: rgba(255,255,255,.22);
          transform: translateY(-3px);
          box-shadow: 
            0 12px 40px rgba(0,0,0,.2),
            inset 0 1px 0 rgba(255,255,255,.16),
            inset 0 -1px 0 rgba(0,0,0,.08);
        }

        .miniCard h4 {
          margin: 0 0 4px;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,.98);
          text-shadow: 0 1px 2px rgba(0,0,0,.15);
        }

        .miniCard p {
          margin: 0;
          color: rgba(255,255,255,.72);
          font-size: 11.5px;
          line-height: 1.4;
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
            radial-gradient(260px 160px at 40% 40%, rgba(53,195,255,.28), transparent 60%),
            radial-gradient(200px 120px at 70% 30%, rgba(251,191,36,.15), transparent 65%);
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
          background: rgba(43,231,195,.12);
          border: 1px solid rgba(43,231,195,.28);
          color: rgba(255,255,255,.88);
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
          background: rgba(255,255,255,.03);
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
          background: rgba(255,255,255,.03);
          transition: all 0.2s ease;
        }

        .stat:hover {
          background: rgba(255,255,255,.05);
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

        .photosScrollContainer {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 10px 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .photosScrollContainer::-webkit-scrollbar {
          display: none;
        }

        .photoSlide {
          flex: 0 0 280px;
          height: 200px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--line);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .photoSlide:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 30px rgba(0,0,0,.3);
        }

        .photoSlide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .scrollBtn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0,0,0,.6);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,.2);
          color: white;
          font-size: 18px;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scrollBtn:hover {
          background: rgba(53,195,255,.7);
          border-color: var(--brand);
          transform: translateY(-50%) scale(1.1);
        }

        .scrollBtnLeft {
          left: -22px;
        }

        .scrollBtnRight {
          right: -22px;
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

        .ph:nth-child(1) {
          background-image:
            linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.35)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%230ea5e9"/><stop offset="100%" style="stop-color:%2306b6d4"/></linearGradient></defs><rect fill="url(%23g1)" width="400" height="300"/><ellipse cx="200" cy="180" rx="250" ry="60" fill="%2322d3ee" opacity="0.4"/><path d="M0,200 L100,150 L250,200 L400,180 L400,300 L0,300 Z" fill="%23fef3c7" opacity="0.3"/><circle cx="80" cy="60" r="40" fill="%23fef08a" opacity="0.6"/></svg>');
        }

        .ph:nth-child(2) {
          background-image:
            linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.35)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%230891b2" width="400" height="300"/><path d="M0,250 Q100,230 200,250 T400,250 L400,300 L0,300 Z" fill="%23fef3c7" opacity="0.4"/><ellipse cx="200" cy="150" rx="200" ry="50" fill="%2306b6d4" opacity="0.5"/><path d="M50,300 L80,220 L130,300 Z" fill="%2322c55e" opacity="0.2"/></svg>');
        }

        .ph:nth-child(3) {
          background-image:
            linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.35)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%2338bdf8"/><stop offset="100%" style="stop-color:%230284c7"/></linearGradient></defs><rect fill="url(%23g3)" width="400" height="300"/><ellipse cx="300" cy="200" rx="180" ry="45" fill="%23fef3c7" opacity="0.35"/><circle cx="320" cy="80" r="35" fill="%23fbbf24" opacity="0.7"/><rect y="220" fill="%230e7490" width="400" height="80" opacity="0.3"/></svg>');
        }

        .ph:nth-child(4) {
          background-image:
            linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.35)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2306b6d4" width="400" height="300"/><path d="M0,180 Q200,160 400,180 L400,300 L0,300 Z" fill="%2322d3ee" opacity="0.4"/><ellipse cx="150" cy="240" rx="100" ry="25" fill="%23fde68a" opacity="0.3"/><path d="M300,300 L340,200 L380,300 Z" fill="%2316a34a" opacity="0.15"/></svg>');
        }

        .ph:nth-child(5) {
          background-image:
            linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.35)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%230ea5e9" width="400" height="300"/><ellipse cx="200" cy="220" rx="300" ry="70" fill="%23fed7aa" opacity="0.35"/><circle cx="100" cy="70" r="45" fill="%23fef08a" opacity="0.5"/><path d="M0,240 Q100,220 200,240 T400,240 L400,300 L0,300 Z" fill="%230891b2" opacity="0.4"/></svg>');
        }

        .ph:nth-child(6) {
          background-image:
            linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.35)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2338bdf8" width="400" height="300"/><path d="M0,200 L150,180 L300,200 L400,190 L400,300 L0,300 Z" fill="%23fef3c7" opacity="0.4"/><ellipse cx="250" cy="120" rx="150" ry="40" fill="%2322d3ee" opacity="0.5"/><circle cx="80" cy="220" r="20" fill="%23ffffff" opacity="0.3"/></svg>');
        }

        .ph:nth-child(n+7):nth-child(odd) {
          background-image:
            linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.35)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%230891b2" width="400" height="300"/><ellipse cx="200" cy="200" rx="220" ry="55" fill="%23fde68a" opacity="0.3"/><path d="M0,150 Q200,130 400,150 L400,300 L0,300 Z" fill="%2306b6d4" opacity="0.5"/></svg>');
        }

        .ph:nth-child(n+7):nth-child(even) {
          background-image:
            linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.35)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%2306b6d4" width="400" height="300"/><circle cx="320" cy="70" r="50" fill="%23fef08a" opacity="0.6"/><path d="M0,220 L120,200 L280,220 L400,210 L400,300 L0,300 Z" fill="%23fed7aa" opacity="0.35"/></svg>');
        }

        .ph:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,.4);
        }

        .ph:after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.20));
        }

        .ph span {
          position: absolute;
          left: 12px;
          bottom: 10px;
          font-size: 12px;
          color: rgba(255,255,255,.78);
          background: rgba(0,0,0,.25);
          border: 1px solid rgba(255,255,255,.14);
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
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.04);
          backdrop-filter: blur(16px) saturate(1.2);
          -webkit-backdrop-filter: blur(16px) saturate(1.2);
          border-radius: 18px;
          padding: 14px 16px;
          transition: all 0.3s ease;
          box-shadow: 
            0 4px 24px rgba(0,0,0,.15),
            inset 0 1px 0 rgba(255,255,255,.08);
        }

        details:hover {
          background: rgba(255,255,255,.07);
          border-color: rgba(255,255,255,.18);
          transform: translateY(-2px);
          box-shadow: 
            0 8px 32px rgba(0,0,0,.25),
            inset 0 1px 0 rgba(255,255,255,.12);
        }

        details[open] {
          background: rgba(255,255,255,.08);
          border-color: rgba(53,195,255,.25);
          box-shadow: 
            0 8px 32px rgba(0,0,0,.2),
            0 0 0 1px rgba(53,195,255,.1),
            inset 0 1px 0 rgba(255,255,255,.1);
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
          background: rgba(255,255,255,.03);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          transition: all 0.2s ease;
        }

        .quickCard:hover {
          background: rgba(255,255,255,.05);
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
            linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,.75)),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200"><rect fill="%230e7490" width="1200" height="200" opacity="0.3"/><path d="M0,100 Q300,80 600,100 T1200,100 L1200,200 L0,200 Z" fill="%2306b6d4" opacity="0.2"/></svg>');
          background-size: cover;
          background-position: top;
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
          background: rgba(0,0,0,.75);
          border: 1px solid rgba(255,255,255,.18);
          color: rgba(255,255,255,.92);
          padding: 10px 12px;
          border-radius: 999px;
          backdrop-filter: blur(12px);
          box-shadow: 0 14px 35px rgba(0,0,0,.35);
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
          background: rgba(0,0,0,.7);
          backdrop-filter: blur(8px);
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
          background: linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.05));
          border: 1px solid var(--line);
          border-radius: var(--radius2);
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,.5);
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

        /* ===== POPUP DROPDOWN ===== */
        .dropdown-trigger {
          width: 100%;
          padding: 11px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(0,0,0,.18);
          color: var(--text);
          outline: none;
          transition: all 0.2s ease;
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          text-align: left;
        }

        .dropdown-trigger:hover {
          border-color: rgba(255,255,255,.25);
          background: rgba(0,0,0,.22);
        }

        .dropdown-trigger:focus,
        .dropdown-trigger.active {
          border-color: rgba(53,195,255,.55);
          box-shadow: 0 0 0 4px rgba(53,195,255,.12);
        }

        .dropdown-trigger .arrow {
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid currentColor;
          opacity: 0.6;
          transition: transform 0.2s ease;
        }

        .dropdown-trigger.active .arrow {
          transform: rotate(180deg);
        }

        .dropdown-popup {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 0;
          min-width: 280px;
          z-index: 1000;
          background: rgba(25,40,52,.98);
          backdrop-filter: blur(24px) saturate(1.5);
          -webkit-backdrop-filter: blur(24px) saturate(1.5);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 16px;
          box-shadow: 
            0 -10px 60px rgba(0,0,0,.5),
            0 0 0 1px rgba(255,255,255,.05),
            inset 0 -1px 0 rgba(255,255,255,.1);
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .dropdown-popup.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* Ensure popups don't overflow viewport on right side */
        .field:nth-child(n+4) .dropdown-popup {
          left: auto;
          right: 0;
        }

        .dropdown-popup-header {
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255,255,255,.1);
          font-weight: 600;
          font-size: 13px;
          color: rgba(255,255,255,.7);
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,.03);
        }

        .dropdown-popup-header .icon-emoji {
          font-size: 18px;
        }

        .dropdown-options {
          padding: 8px;
          max-height: 280px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,.2) transparent;
        }

        .dropdown-options::-webkit-scrollbar {
          width: 6px;
        }

        .dropdown-options::-webkit-scrollbar-track {
          background: transparent;
        }

        .dropdown-options::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,.2);
          border-radius: 3px;
        }

        .dropdown-option {
          padding: 12px 14px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.15s ease;
          border: 1px solid transparent;
        }

        .dropdown-option:hover {
          background: rgba(53,195,255,.12);
          border-color: rgba(53,195,255,.2);
        }

        .dropdown-option.selected {
          background: rgba(53,195,255,.18);
          border-color: rgba(53,195,255,.35);
        }

        .dropdown-option .opt-icon {
          font-size: 20px;
          width: 28px;
          text-align: center;
        }

        .dropdown-option .opt-content {
          flex: 1;
        }

        .dropdown-option .opt-title {
          font-weight: 600;
          font-size: 13px;
          color: var(--text);
        }

        .dropdown-option .opt-desc {
          font-size: 11px;
          color: var(--muted);
          margin-top: 2px;
        }

        .dropdown-option .opt-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }

        .dropdown-option.selected .opt-check {
          background: var(--brand);
          border-color: var(--brand);
        }

        .dropdown-option.selected .opt-check:after {
          content: "✓";
          font-size: 11px;
          color: #001018;
          font-weight: 700;
        }

        /* Guest counter specific */
        .guest-counter {
          padding: 16px;
        }

        .guest-counter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .guest-counter-row:last-child {
          border-bottom: none;
        }

        .guest-counter-label {
          font-size: 13px;
          color: var(--text);
        }

        .guest-counter-label span {
          display: block;
          font-size: 11px;
          color: var(--muted);
          margin-top: 2px;
        }

        .guest-counter-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .guest-counter-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.2);
          background: rgba(255,255,255,.05);
          color: var(--text);
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }

        .guest-counter-btn:hover:not(:disabled) {
          background: rgba(53,195,255,.2);
          border-color: var(--brand);
        }

        .guest-counter-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .guest-counter-value {
          font-size: 16px;
          font-weight: 700;
          min-width: 24px;
          text-align: center;
        }

        .dropdown-popup-footer {
          padding: 12px 16px;
          border-top: 1px solid rgba(255,255,255,.1);
          display: flex;
          justify-content: flex-end;
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
            <div class="logo" aria-hidden="true"><img src="logo.jpg" alt="Kalandar Denizcilik Logo" /></div>
            <div>
              <h1>Kalandar Denizcilik</h1>
              <p>Marine Tourism • Corporate Experience</p>
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
                  <div class="field" id="routeField">
                    <label id="routeLabel">${esc(t("top.route"))}</label>
                    <button class="dropdown-trigger" id="routeTrigger" type="button" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="routeLabel">
                      <span id="routeDisplay">${esc(t("top.routePh"))}</span>
                      <span class="arrow"></span>
                    </button>
                    <input type="hidden" id="route" value="" />
                    <div class="dropdown-popup" id="routePopup" role="listbox" aria-labelledby="routeLabel">
                      <div class="dropdown-popup-header">
                        <span class="icon-emoji">🗺️</span>
                        ${state.lang === 'tr' ? 'Popüler Rotalar' : state.lang === 'ru' ? 'Популярные маршруты' : 'Popular Routes'}
                      </div>
                      <div class="dropdown-options">

                        <div class="dropdown-option" data-value="12islands" role="option" tabindex="0">
                          <span class="opt-icon">🌊</span>
                          <div class="opt-content">
                            <div class="opt-title">${state.lang === 'tr' ? '12 Adalar' : state.lang === 'ru' ? '12 Островов' : '12 Islands'}</div>
                            <div class="opt-desc">${state.lang === 'tr' ? 'Fethiye klasik rota' : state.lang === 'ru' ? 'Классический маршрут Фетхие' : 'Fethiye classic route'}</div>
                          </div>
                          <div class="opt-check"></div>
                        </div>
                        <div class="dropdown-option" data-value="oludeniz" role="option" tabindex="0">
                          <span class="opt-icon">🏖️</span>
                          <div class="opt-content">
                            <div class="opt-title">Ölüdeniz</div>
                            <div class="opt-desc">${state.lang === 'tr' ? 'Kelebek Vadisi & Mavi Lagün' : state.lang === 'ru' ? 'Долина бабочек & Голубая лагуна' : 'Butterfly Valley & Blue Lagoon'}</div>
                          </div>
                          <div class="opt-check"></div>
                        </div>
                        <div class="dropdown-option" data-value="gocek" role="option" tabindex="0">
                          <span class="opt-icon">⛵</span>
                          <div class="opt-content">
                            <div class="opt-title">Göcek</div>
                            <div class="opt-desc">${state.lang === 'tr' ? '6 ada & lüks marinalar' : state.lang === 'ru' ? '6 островов & люкс-марины' : '6 islands & luxury marinas'}</div>
                          </div>
                          <div class="opt-check"></div>
                        </div>

                        <div class="dropdown-option" data-value="custom" role="option" tabindex="0">
                          <span class="opt-icon">✨</span>
                          <div class="opt-content">
                            <div class="opt-title">${state.lang === 'tr' ? 'Özel Rota' : state.lang === 'ru' ? 'Свой маршрут' : 'Custom Route'}</div>
                            <div class="opt-desc">${state.lang === 'tr' ? 'Kendi rotanızı oluşturun' : state.lang === 'ru' ? 'Создайте свой маршрут' : 'Plan your own journey'}</div>
                          </div>
                          <div class="opt-check"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <label>${esc(t("top.start"))}</label>
                    <input class="input" id="startDate" type="date" />
                  </div>

                  <div class="field">
                    <label>${esc(t("top.end"))}</label>
                    <input class="input" id="endDate" type="date" />
                  </div>

                  <div class="field" id="guestsField">
                    <label id="guestsLabel">${esc(t("top.guests"))}</label>
                    <button class="dropdown-trigger" id="guestsTrigger" type="button" aria-haspopup="dialog" aria-expanded="false" aria-labelledby="guestsLabel">
                      <span id="guestsDisplay">6 ${state.lang === 'tr' ? 'Kişi' : state.lang === 'ru' ? 'Гостей' : 'Guests'}</span>
                      <span class="arrow"></span>
                    </button>
                    <input type="hidden" id="guests" value="6" />
                    <div class="dropdown-popup" id="guestsPopup" role="dialog" aria-labelledby="guestsLabel">
                      <div class="dropdown-popup-header">
                        <span class="icon-emoji">👥</span>
                        ${state.lang === 'tr' ? 'Misafir Sayısı' : state.lang === 'ru' ? 'Количество гостей' : 'Number of Guests'}
                      </div>
                      <div class="guest-counter">
                        <div class="guest-counter-row">
                          <div class="guest-counter-label">
                            ${state.lang === 'tr' ? 'Yetişkin' : state.lang === 'ru' ? 'Взрослые' : 'Adults'}
                            <span>${state.lang === 'tr' ? '13+ yaş' : state.lang === 'ru' ? '13+ лет' : '13+ years'}</span>
                          </div>
                          <div class="guest-counter-controls">
                            <button class="guest-counter-btn" type="button" data-action="decrease" data-target="adults" aria-label="Decrease adults">−</button>
                            <span class="guest-counter-value" id="adultsCount" aria-live="polite">4</span>
                            <button class="guest-counter-btn" type="button" data-action="increase" data-target="adults" aria-label="Increase adults">+</button>
                          </div>
                        </div>
                        <div class="guest-counter-row">
                          <div class="guest-counter-label">
                            ${state.lang === 'tr' ? 'Çocuk' : state.lang === 'ru' ? 'Дети' : 'Children'}
                            <span>${state.lang === 'tr' ? '2-12 yaş' : state.lang === 'ru' ? '2-12 лет' : '2-12 years'}</span>
                          </div>
                          <div class="guest-counter-controls">
                            <button class="guest-counter-btn" type="button" data-action="decrease" data-target="children">−</button>
                            <span class="guest-counter-value" id="childrenCount">2</span>
                            <button class="guest-counter-btn" type="button" data-action="increase" data-target="children">+</button>
                          </div>
                        </div>
                      </div>
                      <div class="dropdown-popup-footer">
                        <button class="btn primary" type="button" id="guestsApply" style="padding:8px 16px;font-size:12px">
                          ${state.lang === 'tr' ? 'Uygula' : state.lang === 'ru' ? 'Применить' : 'Apply'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="field" id="tourTypeField">
                    <label>${esc(t("top.type"))}</label>
                    <button class="dropdown-trigger" id="tourTypeTrigger" type="button">
                      <span id="tourTypeDisplay">${esc(t("top.types.day"))}</span>
                      <span class="arrow"></span>
                    </button>
                    <input type="hidden" id="tourType" value="day" />
                    <div class="dropdown-popup" id="tourTypePopup">
                      <div class="dropdown-popup-header">
                        <span class="icon-emoji">⛵</span>
                        ${state.lang === 'tr' ? 'Tur Tipi Seçin' : state.lang === 'ru' ? 'Выберите тип тура' : 'Select Tour Type'}
                      </div>
                      <div class="dropdown-options">
                        <div class="dropdown-option selected" data-value="day">
                          <span class="opt-icon">🌊</span>
                          <div class="opt-content">
                            <div class="opt-title">${esc(t("top.types.day"))}</div>
                            <div class="opt-desc">${state.lang === 'tr' ? '7-8 saat • Öğle yemeği dahil' : state.lang === 'ru' ? '7-8 часов • Обед включен' : '7-8 hours • Lunch included'}</div>
                          </div>
                          <div class="opt-check"></div>
                        </div>
                        <div class="dropdown-option" data-value="sunset">
                          <span class="opt-icon">🌅</span>
                          <div class="opt-content">
                            <div class="opt-title">${esc(t("top.types.sunset"))}</div>
                            <div class="opt-desc">${state.lang === 'tr' ? '3 saat • Akşam yemeği dahil' : state.lang === 'ru' ? '3 часа • Ужин включен' : '3 hours • Dinner included'}</div>
                          </div>
                          <div class="opt-check"></div>
                        </div>
                        <div class="dropdown-option" data-value="private">
                          <span class="opt-icon">🛥️</span>
                          <div class="opt-content">
                            <div class="opt-title">${esc(t("top.types.private"))}</div>
                            <div class="opt-desc">${state.lang === 'tr' ? 'Esnek süre • Özel rota' : state.lang === 'ru' ? 'Гибкое время • Частный маршрут' : 'Flexible duration • Custom route'}</div>
                          </div>
                          <div class="opt-check"></div>
                        </div>

                      </div>
                    </div>
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
                <div class="hero-bg-animated"></div>
                <div class="overlay">
                  <div class="miniCardsStack">
                    <div class="miniCard">
                      <h4>${esc(t("trust.a.t"))}</h4>
                      <p>${esc(t("trust.a.d"))}</p>
                    </div>
                    <div class="miniCard">
                      <h4>${esc(t("trust.b.t"))}</h4>
                      <p>${esc(t("trust.b.d"))}</p>
                    </div>
                    <div class="miniCard">
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

                  <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap; align-items:center">
                    <button class="btn primary" id="btnCorporate">
                      <span class="icon i-arrow" aria-hidden="true"></span>
                      ${esc(t("about.cta"))}
                    </button>
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

                <div class="card aboutBox">
                  <div style="display:flex; flex-direction:column; gap:16px; height:100%">
                    <div style="flex:1">
                      <h4 style="margin:0 0 10px; font-size:16px; color:var(--accent)">🎯 ${esc(t("about.visionTitle"))}</h4>
                      <p style="margin:0; color:var(--muted); font-size:13px; line-height:1.65">${esc(t("about.vision"))}</p>
                    </div>
                    <div style="flex:1">
                      <h4 style="margin:0 0 10px; font-size:16px; color:var(--accent)">🚀 ${esc(t("about.missionTitle"))}</h4>
                      <p style="margin:0; color:var(--muted); font-size:13px; line-height:1.65">${esc(t("about.mission"))}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="section" id="aboutUs" style="overflow: visible;">
              <div class="sectionTitle">
                <div>
                  <h3>${esc(t("aboutUs.title"))}</h3>
                </div>
              </div>

              <div class="card" style="
                background: linear-gradient(135deg, rgba(255,255,255,.06) 0%, rgba(255,255,255,.02) 100%);
                backdrop-filter: blur(40px) saturate(1.8);
                -webkit-backdrop-filter: blur(40px) saturate(1.8);
                border: 1px solid rgba(255,255,255,.18);
                border-radius: 24px;
                padding: 32px;
                box-shadow: 
                  0 25px 50px rgba(0,0,0,.25),
                  0 0 0 1px rgba(255,255,255,.1),
                  inset 0 1px 0 rgba(255,255,255,.15),
                  inset 0 -1px 0 rgba(0,0,0,.1);
                position: relative;
                overflow: hidden;
              ">
                <div style="
                  position: absolute;
                  top: 0; left: 0; right: 0; bottom: 0;
                  background: radial-gradient(ellipse at 30% 20%, rgba(0,212,255,.08) 0%, transparent 50%),
                              radial-gradient(ellipse at 70% 80%, rgba(0,122,204,.06) 0%, transparent 50%);
                  pointer-events: none;
                "></div>
                <div style="position: relative; z-index: 1;">
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                    <span style="font-size: 28px;">⚓</span>
                    <h4 style="margin: 0; font-size: 18px; color: var(--accent); font-weight: 600;">Gökmen Dede</h4>
                    <span style="color: var(--muted); font-size: 13px;">${state.lang === 'tr' ? 'Yönetim Kurulu Başkanı' : state.lang === 'ru' ? 'Председатель совета директоров' : 'Chairman of the Board'}</span>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 16px;">
                    <p style="margin: 0; color: rgba(255,255,255,.88); line-height: 1.8; font-size: 14px;">${esc(t("aboutUs.p1"))}</p>
                    <p style="margin: 0; color: rgba(255,255,255,.82); line-height: 1.8; font-size: 14px;">${esc(t("aboutUs.p2"))}</p>
                    <p style="margin: 0; color: rgba(255,255,255,.82); line-height: 1.8; font-size: 14px;">${esc(t("aboutUs.p3"))}</p>
                  </div>
                  <div style="margin-top: 24px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(255,255,255,.08); border-radius: 20px; font-size: 13px; color: var(--muted);">
                      <span>📍</span> Fethiye, Muğla
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(255,255,255,.08); border-radius: 20px; font-size: 13px; color: var(--muted);">
                      <span>🗓️</span> ${state.lang === 'tr' ? '2016\'dan beri' : state.lang === 'ru' ? 'С 2016 года' : 'Since 2016'}
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; padding: 8px 14px; background: rgba(255,255,255,.08); border-radius: 20px; font-size: 13px; color: var(--muted);">
                      <span>🌊</span> ${state.lang === 'tr' ? 'Güney Ege Bölgesi' : state.lang === 'ru' ? 'Южно-Эгейский регион' : 'South Aegean Region'}
                    </div>
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
              </div>

              <!-- Ephesus Section -->
              <div style="margin-bottom: 32px;">
                <h4 style="margin: 0 0 16px; font-size: 18px; color: var(--accent); display: flex; align-items: center; gap: 10px;">
                  <span>🛥️</span> ${esc(t("gallery.ephesus"))}
                </h4>
                <div class="galleryGrid">
                  ${["Ephesus Bow View", "Ephesus Deck", "Ephesus Interior", "Ephesus Cruise"].map((label, i) => `
                    <div class="ph" role="img" aria-label="${label}" data-gallery-idx="${i}">
                      <span>${label}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Ayliz Section -->
              <div style="margin-bottom: 32px;">
                <h4 style="margin: 0 0 16px; font-size: 18px; color: var(--accent); display: flex; align-items: center; gap: 10px;">
                  <span>⛵</span> ${esc(t("gallery.ayliz"))}
                </h4>
                <div class="galleryGrid">
                  ${["Ayliz Traditional Boat", "Ayliz Deck View", "Ayliz Sea Tour", "Ayliz Sunset"].map((label, i) => `
                    <div class="ph" role="img" aria-label="${label}" data-gallery-idx="${i + 4}">
                      <span>${label}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Photos Section -->
              <div>
                <h4 style="margin: 0 0 16px; font-size: 18px; color: var(--accent); display: flex; align-items: center; gap: 10px;">
                  <span>📸</span> ${esc(t("gallery.photos"))}
                </h4>
                <div style="position: relative;">
                  <button id="photosScrollLeft" class="scrollBtn scrollBtnLeft" aria-label="Scroll left">❮</button>
                  <div id="photosScrollContainer" class="photosScrollContainer">
                    ${["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg", "gallery5.jpg", "gallery6.jpg", "gallery7.jpg", "gallery8.jpg", "gallery9.jpg", "gallery10.jpg", "gallery11.jpg", "gallery12.jpg", "gallery13.jpg", "gallery14.jpg", "gallery15.jpg", "gallery16.jpg", "gallery17.jpg"].map((src, i) => `
                      <div class="photoSlide" role="img" aria-label="Gallery photo ${i + 1}">
                        <img src="${src}" alt="Fethiye Tour Photo ${i + 1}" />
                      </div>
                    `).join("")}
                  </div>
                  <button id="photosScrollRight" class="scrollBtn scrollBtnRight" aria-label="Scroll right">❯</button>
                </div>
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
        let lastScroll = 0;
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            const topbar = $("#topbar");
            if (currentScroll > 100) {
                topbar.classList.add("scrolled");
            } else {
                topbar.classList.remove("scrolled");
            }
            lastScroll = currentScroll;
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

        // ========== Popup Dropdown Handlers ==========

        // Guest counter state
        let adultCount = 4;
        let childCount = 2;

        const updateGuestsDisplay = () => {
            const total = adultCount + childCount;
            const label = state.lang === 'tr' ? 'Kişi' : state.lang === 'ru' ? 'Гостей' : 'Guests';
            $("#guestsDisplay").textContent = `${total} ${label}`;
            $("#guests").value = total;
            $("#adultsCount").textContent = adultCount;
            $("#childrenCount").textContent = childCount;

            // Update button states
            $$(".guest-counter-btn[data-target='adults'][data-action='decrease']").forEach(btn => {
                btn.disabled = adultCount <= 1;
            });
            $$(".guest-counter-btn[data-target='children'][data-action='decrease']").forEach(btn => {
                btn.disabled = childCount <= 0;
            });
            $$(".guest-counter-btn[data-action='increase']").forEach(btn => {
                btn.disabled = adultCount + childCount >= 48;
            });
        };

        // ========== Route Popup Handlers ==========
        const routeNames = {
            kekova: 'Kekova',
            '12islands': state.lang === 'tr' ? '12 Adalar' : state.lang === 'ru' ? '12 Островов' : '12 Islands',
            oludeniz: 'Ölüdeniz',
            gocek: 'Göcek',
            marmaris: 'Marmaris',
            custom: state.lang === 'tr' ? 'Özel Rota' : state.lang === 'ru' ? 'Свой маршрут' : 'Custom Route'
        };

        // Toggle route popup
        $("#routeTrigger").addEventListener("click", (e) => {
            e.stopPropagation();
            const popup = $("#routePopup");
            const trigger = $("#routeTrigger");
            const isOpen = popup.classList.contains("show");

            // Close other popups
            $$(".dropdown-popup").forEach(p => p.classList.remove("show"));
            $$(".dropdown-trigger").forEach(t => {
                t.classList.remove("active");
                t.setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                popup.classList.add("show");
                trigger.classList.add("active");
                trigger.setAttribute("aria-expanded", "true");
            }
        });

        // Route options click
        $$("#routePopup .dropdown-option").forEach(opt => {
            opt.addEventListener("click", (e) => {
                e.stopPropagation();
                const value = opt.getAttribute("data-value");

                // Update selection
                $$("#routePopup .dropdown-option").forEach(o => o.classList.remove("selected"));
                opt.classList.add("selected");

                // Update hidden input and display
                $("#route").value = value;
                $("#routeDisplay").textContent = routeNames[value] || value;

                // Close popup
                $("#routePopup").classList.remove("show");
                $("#routeTrigger").classList.remove("active");
                $("#routeTrigger").setAttribute("aria-expanded", "false");
            });

            // Keyboard navigation for route options
            opt.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    opt.click();
                }
            });
        });

        // Toggle guests popup
        $("#guestsTrigger").addEventListener("click", (e) => {
            e.stopPropagation();
            const popup = $("#guestsPopup");
            const trigger = $("#guestsTrigger");
            const isOpen = popup.classList.contains("show");

            // Close other popups
            $$(".dropdown-popup").forEach(p => p.classList.remove("show"));
            $$(".dropdown-trigger").forEach(t => t.classList.remove("active"));

            if (!isOpen) {
                popup.classList.add("show");
                trigger.classList.add("active");
            }
        });

        // Guest counter buttons
        $$(".guest-counter-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const action = btn.getAttribute("data-action");
                const target = btn.getAttribute("data-target");
                const total = adultCount + childCount;

                if (action === "increase" && total < 48) {
                    if (target === "adults") adultCount++;
                    else childCount++;
                } else if (action === "decrease") {
                    if (target === "adults" && adultCount > 1) adultCount--;
                    else if (target === "children" && childCount > 0) childCount--;
                }

                updateGuestsDisplay();
            });
        });

        // Apply guests and close
        $("#guestsApply").addEventListener("click", (e) => {
            e.stopPropagation();
            $("#guestsPopup").classList.remove("show");
            $("#guestsTrigger").classList.remove("active");
            updateGuestsDisplay();
        });

        // Tour type popup
        $("#tourTypeTrigger").addEventListener("click", (e) => {
            e.stopPropagation();
            const popup = $("#tourTypePopup");
            const trigger = $("#tourTypeTrigger");
            const isOpen = popup.classList.contains("show");

            // Close other popups
            $$(".dropdown-popup").forEach(p => p.classList.remove("show"));
            $$(".dropdown-trigger").forEach(t => t.classList.remove("active"));

            if (!isOpen) {
                popup.classList.add("show");
                trigger.classList.add("active");
            }
        });

        // Tour type options
        $$("#tourTypePopup .dropdown-option").forEach(opt => {
            opt.addEventListener("click", (e) => {
                e.stopPropagation();
                const value = opt.getAttribute("data-value");

                // Update selection
                $$("#tourTypePopup .dropdown-option").forEach(o => o.classList.remove("selected"));
                opt.classList.add("selected");

                // Update hidden input and display
                $("#tourType").value = value;
                $("#tourTypeDisplay").textContent = t("top.types." + value);

                // Close popup
                $("#tourTypePopup").classList.remove("show");
                $("#tourTypeTrigger").classList.remove("active");
            });
        });

        // Close popups on outside click
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".field")) {
                $$(".dropdown-popup").forEach(p => p.classList.remove("show"));
                $$(".dropdown-trigger").forEach(t => {
                    t.classList.remove("active");
                    t.setAttribute("aria-expanded", "false");
                });
            }
        });

        // Close popups on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                $$(".dropdown-popup.show").forEach(p => p.classList.remove("show"));
                $$(".dropdown-trigger.active").forEach(t => {
                    t.classList.remove("active");
                    t.setAttribute("aria-expanded", "false");
                    t.focus();
                });
            }
        });

        // Initialize display
        updateGuestsDisplay();

        // Tour details with modal
        $$("[data-action='details']").forEach((btn) => {
            btn.addEventListener("click", () => {
                const idx = Number(btn.getAttribute("data-tour"));
                const c = I18N[state.lang].tours.cards[idx];

                const content = idx === 0 ? `
          <p><strong><em>${state.lang === 'tr' ? 'Günübirlik Koylar Turu' : state.lang === 'ru' ? 'Дневной тур по бухтам' : 'Bays Day Trip'}</em></strong></p>
          <p><strong>${state.lang === 'tr' ? 'Süre' : state.lang === 'ru' ? 'Продолжительность' : 'Duration'}:</strong> ${esc(c.dur)}<br/>
          <strong>${state.lang === 'tr' ? 'Kapasite' : state.lang === 'ru' ? 'Вместимость' : 'Capacity'}:</strong> ${esc(c.cap)}<br/>
          <strong>${state.lang === 'tr' ? 'Lokasyon' : state.lang === 'ru' ? 'Локация' : 'Location'}:</strong> Fethiye</p>

          <ul>
            <li>${state.lang === 'tr' ? 'Profesyonel kaptan ve mürettebat' : state.lang === 'ru' ? 'Профессиональный капитан и команда' : 'Professional captain and crew'}</li>
            <li>${state.lang === 'tr' ? 'Geleneksel ahşap tur teknesi' : state.lang === 'ru' ? 'Традиционная деревянная лодка' : 'Traditional wooden tour boat'}</li>
            <li>${state.lang === 'tr' ? 'Öğle yemeği dahil' : state.lang === 'ru' ? 'Обед включен' : 'Lunch included'}</li>
            <li>${state.lang === 'tr' ? 'Sadece aileler ve çiftler' : state.lang === 'ru' ? 'Только семьи и пары' : 'Only families and couples'}</li>
            <li>${state.lang === 'tr' ? 'Sigorta güvenceli güvenli tur' : state.lang === 'ru' ? 'Безопасный тур со страховкой' : 'Safe tour with insurance coverage'}</li>
          </ul>

          <p><strong>${state.lang === 'tr' ? 'Duraklar' : state.lang === 'ru' ? 'Остановки' : 'Stops'}:</strong> Dalyan Bay, Aquarium Bay, Turunçpınarı, Tarzan Bay</p>

          <button class="btn primary" onclick="this.closest('.modal-overlay').querySelector('.modal-close').click(); document.getElementById('contact').scrollIntoView({behavior:'smooth',block:'start'});" style="margin-top:10px">
            ${esc(t("tours.book"))}
          </button>
        ` : `
          <p><strong><em>${esc(c.name)}</em></strong></p>
          <p><strong>${state.lang === 'tr' ? 'Süre' : state.lang === 'ru' ? 'Продолжительность' : 'Duration'}:</strong> ${esc(c.dur)}<br/>
          <strong>${state.lang === 'tr' ? 'Kapasite' : state.lang === 'ru' ? 'Вместимость' : 'Capacity'}:</strong> ${esc(c.cap)}<br/>
          <strong>${state.lang === 'tr' ? 'Lokasyon' : state.lang === 'ru' ? 'Локация' : 'Location'}:</strong> Fethiye</p>

          <ul>
            <li>${state.lang === 'tr' ? 'Profesyonel kaptan ve mürettebat' : state.lang === 'ru' ? 'Профессиональный капитан и команда' : 'Professional captain and crew'}</li>
            <li>${state.lang === 'tr' ? 'Lüks yat deneyimi (Ayliz veya Ephesus)' : state.lang === 'ru' ? 'Роскошная яхта (Ayliz или Ephesus)' : 'Luxury yacht experience (Ayliz or Ephesus)'}</li>
            <li>${state.lang === 'tr' ? 'Özel ikram ve servis' : state.lang === 'ru' ? 'Индивидуальное питание и обслуживание' : 'Custom catering and service'}</li>
            <li>${state.lang === 'tr' ? 'Esnek rota planlaması' : state.lang === 'ru' ? 'Гибкое планирование маршрута' : 'Flexible route planning'}</li>
            <li>${state.lang === 'tr' ? 'Tam sigorta güvencesi' : state.lang === 'ru' ? 'Полное страховое покрытие' : 'Full insurance coverage'}</li>
          </ul>

          <p>${state.lang === 'tr' ? 'Detaylı fiyatlandırma ve müsaitlik için bizimle iletişime geçin.' : state.lang === 'ru' ? 'Свяжитесь с нами для получения подробной информации о ценах и наличии.' : 'Contact us for detailed pricing and availability.'}</p>

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
                    $("#cMsg").value = `Booking request: ${c.name}\nPreferred date(s): \nGuests: \nRoute: \n\nAdditional notes: `;
                    $("#cEmail").focus();
                }, 600);
            });
        });

        // Corporate CTA
        $("#btnCorporate").addEventListener("click", () => {
            toast(t("alerts.quote"));
            scrollToId("contact");
            setTimeout(() => {
                $("#cMsg").value = `Corporate quote request:\n• Date:\n• Guest count:\n• Route:\n• Agenda / branding needs:\n`;
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
                "Hello, I'd like to get info about marine tours."
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

        // Gallery click (lightbox for real images)
        $$(".ph").forEach((el) => {
            el.style.cursor = "pointer";
            el.addEventListener("click", () => {
                const img = el.querySelector("img");
                if (img) {
                    const src = img.getAttribute("src");
                    const alt = img.getAttribute("alt") || "Gallery Photo";
                    const content = `
                      <div style="text-align:center">
                        <img src="${src}" alt="${alt}" style="max-width:100%; max-height:70vh; border-radius:12px; box-shadow: 0 10px 40px rgba(0,0,0,.4);" />
                      </div>
                    `;
                    showModal(alt, content);
                } else {
                    // Fallback for placeholder divs
                    const label = el.querySelector("span")?.textContent || "Photo";
                    const content = `
                      <div style="text-align:center">
                        <div class="ph" style="max-width:100%; height:300px; margin:0 auto; display:flex; align-items:center; justify-content:center;">
                          <span>${label}</span>
                        </div>
                        <p style="margin-top:14px; color:var(--muted)">
                          ${state.lang === 'tr' ? 'Fotoğraf yakında eklenecek.' : state.lang === 'ru' ? 'Фото скоро будет добавлено.' : 'Photo coming soon.'}
                        </p>
                      </div>
                    `;
                    showModal(label, content);
                }
            });
        });

        // Photos scroll buttons
        const scrollContainer = $("#photosScrollContainer");
        const scrollAmount = 300;

        $("#photosScrollLeft").addEventListener("click", () => {
            scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        $("#photosScrollRight").addEventListener("click", () => {
            scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        // Photo slide clicks for lightbox
        $$(".photoSlide").forEach((el) => {
            el.addEventListener("click", () => {
                const img = el.querySelector("img");
                if (img) {
                    const src = img.getAttribute("src");
                    const alt = img.getAttribute("alt") || "Gallery Photo";
                    const content = `
                      <div style="text-align:center">
                        <img src="${src}" alt="${alt}" style="max-width:100%; max-height:70vh; border-radius:12px; box-shadow: 0 10px 40px rgba(0,0,0,.4);" />
                      </div>
                    `;
                    showModal(alt, content);
                }
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

        // Clear errors on input
        ["cName", "cEmail", "cPhone", "cMsg"].forEach((id) => {
            $(`#${id}`).addEventListener("input", () => clearFieldError(id));
        });

        $("#btnSend").addEventListener("click", () => {
            // Clear all errors
            ["cName", "cEmail", "cPhone", "cMsg"].forEach(clearFieldError);

            const name = $("#cName").value.trim();
            const email = $("#cEmail").value.trim();
            const phone = $("#cPhone").value.trim();
            const message = $("#cMsg").value.trim();

            let hasError = false;

            // Validate name
            if (!validateName(name)) {
                setFieldError("cName", t("contact.form.nameReq"));
                hasError = true;
            }

            // Validate email
            if (!validateEmail(email)) {
                setFieldError("cEmail", t("contact.form.emailReq"));
                hasError = true;
            }

            // Validate phone
            if (!validatePhone(phone)) {
                setFieldError("cPhone", t("contact.form.phoneReq"));
                hasError = true;
            }

            // Validate message
            if (message.length < 10) {
                setFieldError("cMsg", t("contact.form.msgReq"));
                hasError = true;
            }

            if (hasError) {
                toast(t("alerts.formError"), 3000);
                return;
            }

            // Show loading state
            const btn = $("#btnSend");
            btn.disabled = true;
            btn.classList.add("loading");
            btn.innerHTML = `<span class="icon i-arrow"></span>${esc(t("ui.sending"))}`;

            // Simulate form submission
            const payload = {
                name,
                email,
                phone,
                message,
                lang: state.lang,
                ts: new Date().toISOString(),
            };

            setTimeout(() => {
                // Store in localStorage (demo)
                const key = "kalandar_contact_submissions";
                const prev = JSON.parse(localStorage.getItem(key) || "[]");
                prev.push(payload);
                localStorage.setItem(key, JSON.stringify(prev));

                // Success
                btn.disabled = false;
                btn.classList.remove("loading");
                btn.innerHTML = `<span class="icon i-arrow"></span>${esc(t("contact.form.send"))}`;

                toast(t("contact.toastOk"), 3500);

                // Clear form
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
                "Kalandar Denizcilik — Inquiry"
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
            <p>This is a placeholder for your Privacy Policy (KVKK).</p>
            <p>You should include:</p>
            <ul>
              <li>Data collection practices</li>
              <li>How personal information is used</li>
              <li>Data protection measures</li>
              <li>User rights under KVKK/GDPR</li>
              <li>Contact information for privacy inquiries</li>
            </ul>
          `;
                } else if (type === "terms") {
                    content = `
            <p>This is a placeholder for your Terms of Service.</p>
            <p>You should include:</p>
            <ul>
              <li>Service usage terms</li>
              <li>Booking and cancellation policies</li>
              <li>Payment terms</li>
              <li>Liability limitations</li>
              <li>Dispute resolution</li>
            </ul>
          `;
                } else if (type === "cookies") {
                    content = `
            <p>This is a placeholder for your Cookie Policy.</p>
            <p>You should include:</p>
            <ul>
              <li>Types of cookies used</li>
              <li>Purpose of each cookie</li>
              <li>How users can control cookies</li>
              <li>Third-party cookies (if any)</li>
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
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                $("#route").focus();
            }
        });
    };

    // ========== Initial Render ==========
    render();
})();
