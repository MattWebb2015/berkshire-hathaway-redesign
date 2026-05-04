const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const select = document.getElementById('language-select');
const docLink = document.getElementById('doc-link');

if (select && docLink) {
  select.addEventListener('change', () => {
    docLink.href = select.value;
  });
}

const pbppSelect = document.getElementById('pbpp-language-select');
const pbppLink = document.getElementById('pbpp-doc-link');

if (pbppSelect && pbppLink) {
  pbppSelect.addEventListener('change', () => {
    pbppLink.href = pbppSelect.value;
  });
}