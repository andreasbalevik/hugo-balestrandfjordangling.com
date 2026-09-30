function getDialog(id) {
  const el = document.getElementById(id);
  return el && el.tagName === "DIALOG" ? el : null;
}

function isDialogOpen(dialog) {
  return !!(dialog && (dialog.open || dialog.hasAttribute("open")));
}

function openDialog(dialog, options) {
  if (!dialog || isDialogOpen(dialog)) return;
  options = options || {};

  // Remember the element that opened the dialog so focus can return to it.
  dialog.__bfaTrigger = options.trigger || document.activeElement;
  dialog.__bfaPrevOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }

  const focusTarget = options.focus ? dialog.querySelector(options.focus) : null;
  if (focusTarget && typeof focusTarget.focus === "function") {
    focusTarget.focus();
  }
}

function restoreDialogState(dialog) {
  document.body.style.overflow = dialog.__bfaPrevOverflow || "";
  dialog.__bfaPrevOverflow = undefined;

  const trigger = dialog.__bfaTrigger;
  dialog.__bfaTrigger = null;
  if (trigger && typeof trigger.focus === "function") {
    trigger.focus();
  }
}

function closeDialog(dialog) {
  if (!dialog) return;

  if (typeof dialog.close === "function" && dialog.open) {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
    restoreDialogState(dialog);
  }
}

function registerDialogs() {
  document.querySelectorAll("dialog").forEach(function (dialog) {
    // Fires for close(), Escape, and any other native dismissal.
    dialog.addEventListener("close", function () {
      restoreDialogState(dialog);
    });

    // Backdrop click: target is the dialog itself, outside any content.
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) closeDialog(dialog);
    });
  });
}

function setupModals() {
  registerDialogs();

  document.querySelectorAll("[data-modal-target]").forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      openDialog(getDialog(button.getAttribute("data-modal-target")), {
        trigger: button,
        focus: "#modal-title",
      });
    });
  });

  document.querySelectorAll("[data-modal-toggle]").forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      closeDialog(getDialog(closeBtn.getAttribute("data-modal-toggle")));
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

  renderCurrent() {
    this.items.forEach(function (item) {
      item.classList.add("hidden");
      item.style.opacity = "0";
    });

    const current = this.items[this.currentIndex];
    current.classList.remove("hidden");
    current.offsetHeight;
    current.style.opacity = "1";
    current.style.transition = "opacity 0.7s ease-in-out";
  }

  updateIndicators() {
    this.indicators.forEach((ind, i) => {
      const isActive = i === this.currentIndex;
      const dot = ind.querySelector("[data-carousel-dot]") || ind;
      dot.classList.toggle("bg-primary", isActive);
      dot.classList.toggle("bg-gray-300", !isActive);
      if (isActive) ind.setAttribute("aria-current", "true");
      else ind.removeAttribute("aria-current");
    });
  }

  showItem(index) {
    if (index < 0) this.currentIndex = this.items.length - 1;
    else if (index >= this.items.length) this.currentIndex = 0;
    else this.currentIndex = index;

    this.renderCurrent();
    this.updateIndicators();

    if (this.peer) {
      this.peer.currentIndex = this.currentIndex;
      this.peer.updateDisplay();
    }
  }

  updateDisplay() {
    this.renderCurrent();
    this.updateIndicators();
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
      const modal = getDialog(btn.dataset.openModal);
      if (!modal) return;

      const fsId = modal.dataset.carouselFullscreenModal;
      const mainId = btn.closest("[data-carousel]")?.id;
      if (fsId && mainId && carousels.has(fsId) && carousels.has(mainId)) {
        carousels.get(fsId).currentIndex = carousels.get(mainId).currentIndex;
        carousels.get(fsId).updateDisplay();
      }

      openDialog(modal, { trigger: btn, focus: "[data-close-modal]" });
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (el.tagName === "BUTTON" || e.target === el) {
        closeDialog(getDialog(el.dataset.closeModal));
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    document.querySelectorAll("[data-carousel-fullscreen-modal]").forEach(function (modal) {
      if (!isDialogOpen(modal)) return;

      const fsId = modal.dataset.carouselFullscreenModal;
      const fs = carousels.get(fsId);
      if (!fs) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        fs.prevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        fs.nextSlide();
      }
    });
  });
});