
const translations = {
  ru: { main_title: "Найди СТО, магазин или сервис рядом", sub: "Все города Казахстана. Проверенные отзывы. Удобный поиск.", featured: "Популярные категории", promo: "Приведи друзей и получи скидку!", promo_text: "С каждого 10-го клиента – скидка до 5000₸" },
  kz: { main_title: "Жақын СТО, дүкен немесе қызметті табыңыз", sub: "Қазақстанның барлық қалалары. Тексерілген пікірлер. Ыңғайлы іздеу.", featured: "Танымал санаттар", promo: "Достарыңызды шақырып, жеңілдік алыңыз!", promo_text: "Әрбір 10-шы клиентке дейін 5000₸ жеңілдік" },
  en: { main_title: "Find a car service, shop or repair nearby", sub: "All cities in Kazakhstan. Verified reviews. Easy search.", featured: "Popular categories", promo: "Invite friends and get a discount!", promo_text: "Every 10th client gets up to 5000₸ off" }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}
