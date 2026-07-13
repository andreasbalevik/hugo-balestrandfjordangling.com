function setupMobileMenu() {
  const button = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
  const menu = document.getElementById("navbar-sticky");
  if (!button || !menu) return;

  function setMenu(open) {
    if (open) {
      menu.classList.remove("hidden");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Lukk navigasjonsmeny");
      button.querySelector(".closed-icon")?.classList.add("hidden");
      button.querySelector(".open-icon")?.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Åpne navigasjonsmeny");
      button.querySelector(".closed-icon")?.classList.remove("hidden");
      button.querySelector(".open-icon")?.classList.add("hidden");
    }
  }

  let locked = false;

  button.addEventListener("click", function () {
    if (locked) return;
    setMenu(menu.classList.contains("hidden"));
  });

  menu.querySelectorAll('a[href]').forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 1024) {
        setMenu(false);
        locked = true;
        setTimeout(function () { locked = false; }, 400);
      }
    });
  });
}

function setupDropdowns() {
  document.querySelectorAll("[data-dropdown-toggle]").forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      const dropdown = document.getElementById(this.getAttribute("data-dropdown-toggle"));
      if (!dropdown) return;

      dropdown.classList.toggle("hidden");
      this.setAttribute("aria-expanded", String(!dropdown.classList.contains("hidden")));
    });
  });

  document.addEventListener("click", function (e) {
    document.querySelectorAll("[data-dropdown-toggle]").forEach(function (button) {
      const dropdown = document.getElementById(button.getAttribute("data-dropdown-toggle"));
      if (!dropdown || dropdown.classList.contains("hidden")) return;

      if (!button.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add("hidden");
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
  setupDropdowns();
});
