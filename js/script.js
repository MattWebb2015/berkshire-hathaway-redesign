const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Report page dropdown link behavior
const select = document.getElementById("language-select");
const docLink = document.getElementById("doc-link");

if (select && docLink) {
  select.addEventListener("change", () => {
    docLink.href = select.value;
  });
}

const pbppSelect = document.getElementById("pbpp-language-select");
const pbppLink = document.getElementById("pbpp-doc-link");

if (pbppSelect && pbppLink) {
  pbppSelect.addEventListener("change", () => {
    pbppLink.href = pbppSelect.value;
  });
}

// Home page search/filter behavior
const siteSearch = document.querySelector("#siteSearch");
const searchableItems = document.querySelectorAll(".searchable-item");

if (siteSearch && searchableItems.length > 0) {
  siteSearch.addEventListener("input", () => {
    const searchTerm = siteSearch.value.toLowerCase().trim();

    searchableItems.forEach((item) => {
      const extraSearchText = item.dataset.search || "";
      const searchableText =
        item.textContent.toLowerCase() + " " + extraSearchText.toLowerCase();

      item.style.display = searchableText.includes(searchTerm) ? "" : "none";
    });
  });
}
