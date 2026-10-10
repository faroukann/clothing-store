const language = document.getElementById("language");

const translations = {
    en: {
        home: "Home",
        shop: "Shop",
        about: "About",
        contact: "Contact",
        title: "Premium Men's Fashion",
        subtitle: "Modern Style. Premium Quality.",
        btn: "Shop Now"
    },

    fr: {
        home: "Accueil",
        shop: "Boutique",
        about: "À propos",
        contact: "Contact",
        title: "Mode Homme Premium",
        subtitle: "Style Moderne. Qualité Premium.",
        btn: "Acheter"
    },

    ar: {
        home: "الرئيسية",
        shop: "المتجر",
        about: "من نحن",
        contact: "اتصل بنا",
        title: "أزياء رجالية فاخرة",
        subtitle: "ستايل عصري وجودة عالية",
        btn: "تسوق الآن"
    }
};

language.addEventListener("change", function () {

    const lang = this.value;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.getElementById("home").textContent = translations[lang].home;
    document.getElementById("shop").textContent = translations[lang].shop;
    document.getElementById("about").textContent = translations[lang].about;
    document.getElementById("contact").textContent = translations[lang].contact;
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("btn").textContent = translations[lang].btn;

});
