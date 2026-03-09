// Mobile menu toggle (werkt op alle pagina's)
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__links");

toggle.addEventListener("click", function(e) {

  e.preventDefault();   // voorkomt refresh
  menu.classList.toggle("is-open");

});

  // sluit menu bij klik op link
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // sluit menu bij klik buiten nav
  document.addEventListener("click", (e) => {
    const inside = e.target.closest(".nav");
    if (!inside) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
