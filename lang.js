(function() {
  // Set default language to English
  let lang = localStorage.getItem("lang") || "en";

  function setLang(newLang) {
    lang = newLang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "he" ? "rtl" : "ltr");

    // Set all data-en/data-he text
    document.querySelectorAll("[data-en]").forEach(function(el) {
      el.textContent = el.getAttribute(lang === "he" ? "data-he" : "data-en");
    });
    // Set all labels' innerText (for form)
    document.querySelectorAll("label[data-en]").forEach(function(el) {
      el.innerText = el.getAttribute(lang === "he" ? "data-he" : "data-en");
    });
    // Set all buttons' text
    document.querySelectorAll("button[data-en]").forEach(function(el) {
      el.textContent = el.getAttribute(lang === "he" ? "data-he" : "data-en");
    });
    // Set all strong[data-en] inside contact details
    document.querySelectorAll("strong[data-en]").forEach(function(el) {
      el.textContent = el.getAttribute(lang === "he" ? "data-he" : "data-en");
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Set initial lang
    setLang(lang);

    // Button events
    document.getElementById("to-en").onclick = function() { setLang("en"); };
    document.getElementById("to-he").onclick = function() { setLang("he"); };
  });
})();