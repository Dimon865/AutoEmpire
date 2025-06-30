
const translations = {
    ru: {
        find_best_service: "Найди лучший автосервис в своём городе",
        top_services: "Лучшие сервисы недели"
    },
    kz: {
        find_best_service: "Қалаңыздағы ең жақсы автосервисті табыңыз",
        top_services: "Аптаның үздік сервистері"
    },
    en: {
        find_best_service: "Find the best car service in your city",
        top_services: "Top services of the week"
    }
};

function switchLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
}
