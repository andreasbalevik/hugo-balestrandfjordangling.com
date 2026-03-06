# Lucide Icons - Standard for Ikoner

Nettsiden bruker nå **Lucide Icons** som standard ikon-bibliotek. Dette sikrer et konsistent, moderne og profesjonelt uttrykk.

## Hvordan bruke ikoner

Du kan sette inn ikoner hvor som helst i HTML-koden ved å bruke `<i>` tags med `data-lucide` attributtet.

### Eksempel:
```html
<!-- Enkelt ikon -->
<i data-lucide="camera"></i>

<!-- Ikon med Tailwind-klasser (størrelse, farge, margin) -->
<i data-lucide="user" class="w-6 h-6 text-blue-500 mr-2"></i>

<!-- Ikon i en knapp -->
<button class="flex items-center gap-2">
  <i data-lucide="calendar"></i>
  <span>Bestill nå</span>
</button>
```

### Finne ikoner
Alle tilgjengelige ikoner finner du her:
👉 **[https://lucide.dev/icons](https://lucide.dev/icons)**

Bare kopier navnet på ikonet (f.eks. "arrow-right") og sett det inn i `data-lucide="..."`.

---

## Hvorfor Lucide?
* **Konsistens:** Alle ikoner har samme strektykkelse og stil.
* **Lettvektig:** Laster raskt og er optimalisert for web.
* **Fleksibelt:** Kan styles enkelt med Tailwind CSS-klasser (farge, størrelse, animasjon).
