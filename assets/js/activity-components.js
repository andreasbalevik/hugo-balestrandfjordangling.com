function setupModals() {
  document.querySelectorAll("[data-modal-target]").forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const modal = document.getElementById(this.getAttribute("data-modal-target"));
      if (!modal) return;

      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  document.querySelectorAll("[data-modal-toggle]").forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const modal = document.getElementById(this.getAttribute("data-modal-toggle"));
      if (!modal) return;

      modal.classList.add("hidden");
      document.body.style.overflow = "";
    });
  });

  document.querySelectorAll('[role="dialog"]').forEach(function (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;

    document.querySelectorAll('[role="dialog"]').forEach(function (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    });
  });
}

class CarouselComponent {
  constructor(element) {
    this.el = element;
    this.items = element.querySelectorAll("[data-carousel-item]");
    this.prevBtn = element.querySelector("[data-carousel-prev]");
    this.nextBtn = element.querySelector("[data-carousel-next]");
    this.indicators = element.querySelectorAll("[data-carousel-slide-to]");
    this.currentIndex = 0;
    this.peer = null;

    if (this.items.length === 0) return;
    this.init();
  }

  init() {
    this.showItem(0);
    if (this.prevBtn) this.prevBtn.addEventListener("click", () => this.prevSlide());
    if (this.nextBtn) this.nextBtn.addEventListener("click", () => this.nextSlide());
    this.indicators.forEach((ind, i) => ind.addEventListener("click", () => this.showItem(i)));
  }

  showItem(index) {
    if (index < 0) this.currentIndex = this.items.length - 1;
    else if (index >= this.items.length) this.currentIndex = 0;
    else this.currentIndex = index;

    this.items.forEach(function (item) {
      item.classList.add("hidden");
      item.style.opacity = "0";
    });

    const current = this.items[this.currentIndex];
    current.classList.remove("hidden");
    current.offsetHeight;
    current.style.opacity = "1";
    current.style.transition = "opacity 0.7s ease-in-out";

    this.indicators.forEach((ind, i) => {
      ind.classList.toggle("bg-primary", i === this.currentIndex);
      ind.classList.toggle("bg-gray-300", i !== this.currentIndex);
    });

    if (this.peer) {
      this.peer.currentIndex = this.currentIndex;
      this.peer.updateDisplay();
    }
  }

  updateDisplay() {
    this.items.forEach(function (item) {
      item.classList.add("hidden");
      item.style.opacity = "0";
    });

    const current = this.items[this.currentIndex];
    current.classList.remove("hidden");
    current.offsetHeight;
    current.style.opacity = "1";
    current.style.transition = "opacity 0.7s ease-in-out";

    this.indicators.forEach((ind, i) => {
      ind.classList.toggle("bg-primary", i === this.currentIndex);
      ind.classList.toggle("bg-gray-300", i !== this.currentIndex);
    });
  }

  prevSlide() { this.showItem(this.currentIndex - 1); }
  nextSlide() { this.showItem(this.currentIndex + 1); }
}

document.addEventListener("DOMContentLoaded", function () {
  setupModals();

  const carousels = new Map();
  document.querySelectorAll("[data-carousel]").forEach(function (el) {
    const instance = new CarouselComponent(el);
    if (el.id) carousels.set(el.id, instance);
  });

  carousels.forEach(function (instance) {
    const peerId = instance.el.dataset.carouselSync;
    if (peerId && carousels.has(peerId)) {
      const peer = carousels.get(peerId);
      instance.peer = peer;
      peer.peer = instance;
    }
  });

  document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const modal = document.getElementById(btn.dataset.openModal);
      if (!modal) return;

      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";

      const fsId = modal.dataset.carouselFullscreenModal;
      const mainId = btn.closest("[data-carousel]")?.id;
      if (fsId && mainId && carousels.has(fsId) && carousels.has(mainId)) {
        carousels.get(fsId).currentIndex = carousels.get(mainId).currentIndex;
        carousels.get(fsId).updateDisplay();
      }
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (el.tagName === "BUTTON" || e.target === el) {
        const modal = document.getElementById(el.dataset.closeModal);
        if (modal) {
          modal.classList.add("hidden");
          document.body.style.overflow = "";
        }
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    document.querySelectorAll("[data-carousel-fullscreen-modal]").forEach(function (modal) {
      if (modal.classList.contains("hidden")) return;

      const fsId = modal.dataset.carouselFullscreenModal;
      const fs = carousels.get(fsId);
      if (!fs) return;

      if (e.key === "Escape") {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        fs.prevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        fs.nextSlide();
      }
    });
  });
});
