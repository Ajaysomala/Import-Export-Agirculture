export const locales = ['en', 'es', 'fr', 'hi', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  hi: 'हिन्दी',
  ar: 'العربية',
};

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  es: 'ltr',
  fr: 'ltr',
  hi: 'ltr',
  ar: 'rtl',
};

const copy = {
  en: {
    nav: { products: 'Products', about: 'About', contact: 'Contact', signIn: 'Sign in', quote: 'Get a Quote' },
    hero: {
      eyebrow: 'Grains · Fresh Produce · Organics',
      titleStart: 'From Indian soil to your',
      titleAccent: 'market shelf.',
      body: 'Abhi Global Exports supplies export-grade rice, onion, tomato, mango, and premium organics to wholesale buyers across the Gulf, Europe, and Southeast Asia with clean grading, careful packing, and reliable shipping.',
      primary: 'Get a Quote',
      secondary: 'View Products',
      statOneLabel: 'Export grade',
      statOneValue: 'Field to freight',
      statTwoLabel: 'Nature-first',
      statTwoValue: 'White, green, gold',
      statThreeLabel: 'Fast response',
      statThreeValue: 'Quote in 1 day',
    },
    home: {
      featuredEyebrow: 'Featured Produce',
      featuredTitle: 'Four crops, graded for export from day one.',
      featuredBody: 'Every shipment is sorted, sized, and packed to the specification your market expects — from Basmati rice to Alphonso mango.',
      fullCatalog: 'View full catalog',
      whyEyebrow: 'Why Abhi Global Exports',
      whyTitle: 'Built for buyers who can\'t afford a bad shipment.',
      whyBody: 'We work directly with growers and packhouses across India, so every grade, size, and packaging spec is set before the container is booked — not discovered after it lands.',
      readyTitle: 'Ready to place your first order?',
      readyBody: 'Tell us what you need and we\'ll get back with pricing and availability within one business day.',
      readyButton: 'Get a Quote',
      infoOneTitle: 'Export-grade sourcing',
      infoOneBody: 'Direct from growers, graded before it ever reaches port.',
      infoTwoTitle: 'Cold-chain ready',
      infoTwoBody: 'Temperature-controlled logistics for fresh produce lines.',
      infoThreeTitle: 'Custom packaging',
      infoThreeBody: 'Bag, carton, and branding specs matched to your market.',
      infoFourTitle: 'Documentation handled',
      infoFourBody: 'Customs paperwork prepared for Gulf, EU & SEA entry.',
    },
    productsPage: { eyebrow: 'Full Catalog', title: 'Our Products', body: 'Every listing below ships at export grade. Tap a card for specs, or request a quote directly.' },
    aboutPage: { eyebrow: 'About Us', title: 'Rooted in Indian farmland, built for global trade.', body: 'Abhi Global Exports connects growers and packhouses across India with wholesale buyers in the Gulf, Europe, and Southeast Asia. We manage grading, packaging, and documentation end-to-end, so what leaves our facility matches exactly what your market expects.', imageOne: 'Farm and packhouse operations', imageTwo: 'Export shipment and port logistics' },
    contactPage: { eyebrow: 'Contact', title: 'Get a Quote', body: 'Tell us what you need — product, quantity, and destination — and we\'ll respond with pricing and availability within one business day.', emailLabel: 'Email', whatsappLabel: 'WhatsApp' },
    footer: { description: 'Sourcing grains, fresh produce, and premium organics from India, shipped to the Gulf, Europe, and Southeast Asia.', navigate: 'Navigate', reachUs: 'Reach us' },
    quoteForm: { fullName: 'Full name', company: 'Company', country: 'Country', product: 'Product interested in', quantity: 'Quantity needed', email: 'Email', phone: 'Phone / WhatsApp', message: 'Message', submit: 'Send Quote Request', sending: 'Sending…', sent: 'Your email and WhatsApp app should have opened with your request pre-filled — just hit send there.', error: 'Something went wrong opening your email/WhatsApp app. You can reach us directly at' },
    productCard: { request: 'Request a quote', origin: 'Origin', size: 'Size / Grade', packaging: 'Packaging', availability: 'Availability' },
  },
  es: {
    nav: { products: 'Productos', about: 'Nosotros', contact: 'Contacto', signIn: 'Ingresar', quote: 'Pedir cotización' },
    hero: { eyebrow: 'Granos · Frescos · Orgánicos', titleStart: 'De la tierra india a tu', titleAccent: 'estante.', body: 'Abhi Global Exports suministra arroz, cebolla, tomate, mango y productos orgánicos de grado exportación a compradores mayoristas en el Golfo, Europa y el Sudeste Asiático con clasificación limpia, empaque cuidadoso y envío confiable.', primary: 'Pedir cotización', secondary: 'Ver productos', statOneLabel: 'Grado exportación', statOneValue: 'Del campo al flete', statTwoLabel: 'Natural', statTwoValue: 'Blanco, verde, oro', statThreeLabel: 'Respuesta rápida', statThreeValue: 'Cotización en 1 día' },
    home: { featuredEyebrow: 'Productos destacados', featuredTitle: 'Cuatro cultivos, listos para exportar desde el primer día.', featuredBody: 'Cada envío se clasifica, calibra y empaqueta según la especificación que espera su mercado — desde arroz Basmati hasta mango Alphonso.', fullCatalog: 'Ver catálogo completo', whyEyebrow: 'Por qué Abhi Global Exports', whyTitle: 'Pensado para compradores que no pueden arriesgar un mal envío.', whyBody: 'Trabajamos directamente con productores y empaquetadores en toda India, así cada grado, tamaño y empaque se define antes de reservar el contenedor.', readyTitle: '¿Listo para tu primer pedido?', readyBody: 'Cuéntanos lo que necesitas y te responderemos con precios y disponibilidad en un día hábil.', readyButton: 'Pedir cotización', infoOneTitle: 'Abastecimiento de grado exportación', infoOneBody: 'Directo del productor, clasificado antes de llegar al puerto.', infoTwoTitle: 'Cadena de frío lista', infoTwoBody: 'Logística con temperatura controlada para frescos.', infoThreeTitle: 'Empaque personalizado', infoThreeBody: 'Sacos, cajas y marca adaptados a tu mercado.', infoFourTitle: 'Documentación gestionada', infoFourBody: 'Papeles aduaneros listos para GCC, UE y SEA.' },
    productsPage: { eyebrow: 'Catálogo completo', title: 'Nuestros productos', body: 'Cada producto aquí sale con grado exportación. Abre una tarjeta para ver detalles o pide una cotización.' },
    aboutPage: { eyebrow: 'Nosotros', title: 'Raíces en la India, preparados para el comercio global.', body: 'Abhi Global Exports conecta productores y empaquetadores en India con compradores mayoristas en el Golfo, Europa y el Sudeste Asiático. Gestionamos clasificación, empaque y documentación de principio a fin.', imageOne: 'Operaciones de campo y empaque', imageTwo: 'Envío de exportación y logística portuaria' },
    contactPage: { eyebrow: 'Contacto', title: 'Pedir cotización', body: 'Cuéntanos qué necesitas — producto, cantidad y destino — y te responderemos con precios y disponibilidad en un día hábil.', emailLabel: 'Correo', whatsappLabel: 'WhatsApp' },
    footer: { description: 'Suministro de granos, frescos y productos orgánicos desde India hacia el Golfo, Europa y el Sudeste Asiático.', navigate: 'Navegación', reachUs: 'Contáctanos' },
    quoteForm: { fullName: 'Nombre completo', company: 'Empresa', country: 'País', product: 'Producto de interés', quantity: 'Cantidad requerida', email: 'Correo', phone: 'Teléfono / WhatsApp', message: 'Mensaje', submit: 'Enviar solicitud', sending: 'Enviando…', sent: 'Tu correo y WhatsApp deberían haberse abierto con la solicitud lista.', error: 'Hubo un problema al abrir tu correo/WhatsApp. Puedes escribirnos directamente a' },
    productCard: { request: 'Solicitar cotización', origin: 'Origen', size: 'Tamaño / grado', packaging: 'Empaque', availability: 'Disponibilidad' },
  },
  fr: {
    nav: { products: 'Produits', about: 'À propos', contact: 'Contact', signIn: 'Connexion', quote: 'Demander un devis' },
    hero: { eyebrow: 'Céréales · Produits frais · Bio', titleStart: 'De la terre indienne à votre', titleAccent: 'rayon.', body: 'Abhi Global Exports fournit du riz, des oignons, des tomates, des mangues et des produits bio de qualité export aux acheteurs en gros du Golfe, d’Europe et d’Asie du Sud-Est avec tri, emballage et expédition fiables.', primary: 'Demander un devis', secondary: 'Voir les produits', statOneLabel: 'Qualité export', statOneValue: 'Du champ au fret', statTwoLabel: 'Naturel', statTwoValue: 'Blanc, vert, or', statThreeLabel: 'Réponse rapide', statThreeValue: 'Devis sous 1 jour' },
    home: { featuredEyebrow: 'Produits phares', featuredTitle: 'Quatre cultures, prêtes pour l’export dès le premier jour.', featuredBody: 'Chaque expédition est triée, calibrée et emballée selon les attentes de votre marché — du riz Basmati à la mangue Alphonso.', fullCatalog: 'Voir le catalogue complet', whyEyebrow: 'Pourquoi Abhi Global Exports', whyTitle: 'Pensé pour les acheteurs qui ne peuvent pas se permettre une mauvaise expédition.', whyBody: 'Nous travaillons directement avec les producteurs et les ateliers de conditionnement en Inde pour définir chaque grade, taille et emballage avant la réservation du conteneur.', readyTitle: 'Prêt pour votre première commande ?', readyBody: 'Dites-nous ce qu’il vous faut et nous reviendrons vers vous avec prix et disponibilité sous un jour ouvré.', readyButton: 'Demander un devis', infoOneTitle: 'Approvisionnement qualité export', infoOneBody: 'Directement des producteurs, trié avant le port.', infoTwoTitle: 'Chaîne du froid prête', infoTwoBody: 'Logistique à température contrôlée pour les frais.', infoThreeTitle: 'Emballage sur mesure', infoThreeBody: 'Sacs, cartons et marque adaptés à votre marché.', infoFourTitle: 'Documentation gérée', infoFourBody: 'Papiers douaniers prêts pour GCC, UE et SEA.' },
    productsPage: { eyebrow: 'Catalogue complet', title: 'Nos produits', body: 'Chaque produit ici est expédié au grade export. Ouvrez une carte pour les détails ou demandez un devis.' },
    aboutPage: { eyebrow: 'À propos', title: 'Ancrés dans les terres indiennes, conçus pour le commerce mondial.', body: 'Abhi Global Exports relie les producteurs et ateliers de conditionnement en Inde aux acheteurs en gros du Golfe, d’Europe et d’Asie du Sud-Est. Nous gérons le tri, l’emballage et la documentation de bout en bout.', imageOne: 'Opérations de ferme et de conditionnement', imageTwo: 'Expédition et logistique portuaire' },
    contactPage: { eyebrow: 'Contact', title: 'Demander un devis', body: 'Dites-nous ce dont vous avez besoin — produit, quantité et destination — et nous répondrons avec prix et disponibilité sous un jour ouvré.', emailLabel: 'E-mail', whatsappLabel: 'WhatsApp' },
    footer: { description: 'Approvisionnement en céréales, produits frais et bio depuis l’Inde vers le Golfe, l’Europe et l’Asie du Sud-Est.', navigate: 'Navigation', reachUs: 'Nous joindre' },
    quoteForm: { fullName: 'Nom complet', company: 'Entreprise', country: 'Pays', product: 'Produit recherché', quantity: 'Quantité requise', email: 'E-mail', phone: 'Téléphone / WhatsApp', message: 'Message', submit: 'Envoyer la demande', sending: 'Envoi…', sent: 'Votre e-mail et WhatsApp devraient s’être ouverts avec la demande prête.', error: 'Un problème est survenu à l’ouverture de votre e-mail/WhatsApp. Vous pouvez nous joindre directement à' },
    productCard: { request: 'Demander un devis', origin: 'Origine', size: 'Taille / grade', packaging: 'Emballage', availability: 'Disponibilité' },
  },
  hi: {
    nav: { products: 'उत्पाद', about: 'हमारे बारे में', contact: 'संपर्क', signIn: 'साइन इन', quote: 'कोटेशन लें' },
    hero: { eyebrow: 'अनाज · ताज़ा उत्पाद · ऑर्गेनिक', titleStart: 'भारतीय मिट्टी से आपके', titleAccent: 'शेल्फ तक.', body: 'Abhi Global Exports भारत से निर्यात-ग्रेड चावल, प्याज़, टमाटर, आम और प्रीमियम ऑर्गेनिक उत्पाद खाड़ी, यूरोप और दक्षिण-पूर्व एशिया के थोक खरीदारों को साफ ग्रेडिंग, सावधानीपूर्वक पैकिंग और भरोसेमंद शिपिंग के साथ देता है.', primary: 'कोटेशन लें', secondary: 'उत्पाद देखें', statOneLabel: 'एक्सपोर्ट ग्रेड', statOneValue: 'खेत से फ्रेट तक', statTwoLabel: 'प्रकृति-प्रथम', statTwoValue: 'सफेद, हरा, सुनहरा', statThreeLabel: 'तेज़ जवाब', statThreeValue: '1 दिन में कोटेशन' },
    home: { featuredEyebrow: 'मुख्य उत्पाद', featuredTitle: 'चार फसलें, पहले दिन से निर्यात के लिए तैयार.', featuredBody: 'हर शिपमेंट को आपके बाज़ार की जरूरत के अनुसार छांटा, आकार दिया और पैक किया जाता है — बासमती चावल से अल्फांसो आम तक.', fullCatalog: 'पूरा कैटलॉग देखें', whyEyebrow: 'Abhi Global Exports क्यों', whyTitle: 'उन खरीदारों के लिए जो खराब शिपमेंट बर्दाश्त नहीं कर सकते.', whyBody: 'हम भारत के उत्पादकों और पैकहाउस के साथ सीधे काम करते हैं, ताकि कंटेनर बुक होने से पहले ही हर ग्रेड, साइज और पैकेज तय हो.', readyTitle: 'अपना पहला ऑर्डर देने के लिए तैयार?', readyBody: 'हमें अपनी जरूरत बताइए, हम एक कार्यदिवस के भीतर कीमत और उपलब्धता के साथ जवाब देंगे.', readyButton: 'कोटेशन लें', infoOneTitle: 'एक्सपोर्ट-ग्रेड सोर्सिंग', infoOneBody: 'सीधे उत्पादकों से, पोर्ट तक पहुँचने से पहले ग्रेडिंग.', infoTwoTitle: 'कोल्ड-चेन तैयार', infoTwoBody: 'ताज़ा उत्पादों के लिए तापमान नियंत्रित लॉजिस्टिक्स.', infoThreeTitle: 'कस्टम पैकेजिंग', infoThreeBody: 'बैग, कार्टन और ब्रांडिंग आपके बाज़ार के अनुसार.', infoFourTitle: 'डॉक्युमेंटेशन संभाला जाता है', infoFourBody: 'खाड़ी, EU और SEA के लिए कस्टम पेपरवर्क तैयार.' },
    productsPage: { eyebrow: 'पूरा कैटलॉग', title: 'हमारे उत्पाद', body: 'नीचे हर उत्पाद एक्सपोर्ट ग्रेड में है। विवरण देखने के लिए कार्ड खोलें या सीधे कोटेशन माँगें.' },
    aboutPage: { eyebrow: 'हमारे बारे में', title: 'भारतीय खेतों से जुड़ी, वैश्विक व्यापार के लिए तैयार.', body: 'Abhi Global Exports भारत के उत्पादकों और पैकहाउस को खाड़ी, यूरोप और दक्षिण-पूर्व एशिया के थोक खरीदारों से जोड़ता है. हम ग्रेडिंग, पैकेजिंग और डॉक्युमेंटेशन को शुरू से अंत तक संभालते हैं.', imageOne: 'फार्म और पैकहाउस संचालन', imageTwo: 'एक्सपोर्ट शिपमेंट और पोर्ट लॉजिस्टिक्स' },
    contactPage: { eyebrow: 'संपर्क', title: 'कोटेशन लें', body: 'हमें बताइए कि आपको क्या चाहिए — उत्पाद, मात्रा और गंतव्य — और हम एक कार्यदिवस के भीतर कीमत और उपलब्धता भेजेंगे.', emailLabel: 'ईमेल', whatsappLabel: 'व्हाट्सऐप' },
    footer: { description: 'भारत से अनाज, ताज़ा उत्पाद और प्रीमियम ऑर्गेनिक की आपूर्ति खाड़ी, यूरोप और दक्षिण-पूर्व एशिया तक.', navigate: 'नेविगेशन', reachUs: 'संपर्क करें' },
    quoteForm: { fullName: 'पूरा नाम', company: 'कंपनी', country: 'देश', product: 'रुचि वाला उत्पाद', quantity: 'आवश्यक मात्रा', email: 'ईमेल', phone: 'फोन / व्हाट्सऐप', message: 'संदेश', submit: 'अनुरोध भेजें', sending: 'भेजा जा रहा है…', sent: 'आपका ईमेल और व्हाट्सऐप पहले से भरा हुआ खुल जाना चाहिए.', error: 'आपका ईमेल/व्हाट्सऐप खोलने में समस्या हुई. आप हमें सीधे लिख सकते हैं', },
    productCard: { request: 'कोटेशन माँगें', origin: 'उत्पत्ति', size: 'साइज / ग्रेड', packaging: 'पैकेजिंग', availability: 'उपलब्धता' },
  },
  ar: {
    nav: { products: 'المنتجات', about: 'من نحن', contact: 'اتصل بنا', signIn: 'تسجيل الدخول', quote: 'اطلب عرض سعر' },
    hero: { eyebrow: 'حبوب · منتجات طازجة · عضوي', titleStart: 'من أرض الهند إلى', titleAccent: 'رفك.', body: 'تزوّد Abhi Global Exports تجّار الجملة بالأرز والبصل والطماطم والمانجو والمنتجات العضوية بدرجة تصدير إلى الخليج وأوروبا وجنوب شرق آسيا مع فرز وتعبئة وشحن موثوق.', primary: 'اطلب عرض سعر', secondary: 'عرض المنتجات', statOneLabel: 'درجة تصدير', statOneValue: 'من الحقل إلى الشحن', statTwoLabel: 'طابع طبيعي', statTwoValue: 'أبيض، أخضر، ذهبي', statThreeLabel: 'استجابة سريعة', statThreeValue: 'عرض خلال يوم' },
    home: { featuredEyebrow: 'المنتجات المميزة', featuredTitle: 'أربع محاصيل جاهزة للتصدير من اليوم الأول.', featuredBody: 'يتم فرز كل شحنة وتحديد مقاسها وتعبئتها حسب مواصفات السوق المستهدف — من أرز بسمتي إلى مانجو ألفونسو.', fullCatalog: 'عرض الكتالوج الكامل', whyEyebrow: 'لماذا Abhi Global Exports', whyTitle: 'مصمم للمشترين الذين لا يتحملون شحنة سيئة.', whyBody: 'نعمل مباشرة مع المزارعين ومراكز التعبئة في الهند، بحيث يتم تحديد كل درجة ومقاس وتعبئة قبل حجز الحاوية.', readyTitle: 'هل أنت جاهز لطلبك الأول؟', readyBody: 'أخبرنا بما تحتاج إليه وسنعود إليك بالأسعار والتوفر خلال يوم عمل.', readyButton: 'اطلب عرض سعر', infoOneTitle: 'توريد بدرجة تصدير', infoOneBody: 'مباشرة من المزارعين، مع فرز قبل الميناء.', infoTwoTitle: 'جاهزية سلسلة تبريد', infoTwoBody: 'لوجستيات بدرجات حرارة مضبوطة للمنتجات الطازجة.', infoThreeTitle: 'تعبئة مخصصة', infoThreeBody: 'أكياس وكراتين وعلامة تجارية تناسب سوقك.', infoFourTitle: 'إدارة المستندات', infoFourBody: 'مستندات جمركية جاهزة لدول الخليج والاتحاد الأوروبي وجنوب شرق آسيا.' },
    productsPage: { eyebrow: 'الكتالوج الكامل', title: 'منتجاتنا', body: 'كل منتج أدناه بدرجة تصدير. افتح البطاقة للتفاصيل أو اطلب عرض سعر مباشرة.' },
    aboutPage: { eyebrow: 'من نحن', title: 'متجذرون في الأراضي الهندية، ومصممون للتجارة العالمية.', body: 'تربط Abhi Global Exports بين المزارعين ومراكز التعبئة في الهند والمشترين بالجملة في الخليج وأوروبا وجنوب شرق آسيا. نحن ندير الفرز والتعبئة والمستندات من البداية إلى النهاية.', imageOne: 'عمليات المزرعة ومركز التعبئة', imageTwo: 'شحن الصادرات ولوجستيات الميناء' },
    contactPage: { eyebrow: 'اتصل بنا', title: 'اطلب عرض سعر', body: 'أخبرنا بما تحتاج إليه — المنتج والكمية والوجهة — وسنرد عليك بالسعر والتوفر خلال يوم عمل.', emailLabel: 'البريد الإلكتروني', whatsappLabel: 'واتساب' },
    footer: { description: 'توريد الحبوب والمنتجات الطازجة والعضوية الممتازة من الهند إلى الخليج وأوروبا وجنوب شرق آسيا.', navigate: 'التنقل', reachUs: 'تواصل معنا' },
    quoteForm: { fullName: 'الاسم الكامل', company: 'الشركة', country: 'البلد', product: 'المنتج المطلوب', quantity: 'الكمية المطلوبة', email: 'البريد الإلكتروني', phone: 'الهاتف / واتساب', message: 'الرسالة', submit: 'إرسال الطلب', sending: 'جارٍ الإرسال…', sent: 'يجب أن يكون بريدك وواتساب قد فتحا مع الطلب جاهزًا.', error: 'حدثت مشكلة أثناء فتح البريد/واتساب. يمكنك التواصل معنا مباشرة على', },
    productCard: { request: 'اطلب عرض سعر', origin: 'المنشأ', size: 'المقاس / الدرجة', packaging: 'التعبئة', availability: 'التوفر' },
  },
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function getCopy(locale: Locale) {
  return copy[locale] ?? copy.en;
}

