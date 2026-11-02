const apps = [
  {
    name: "ATK/RTK",
    description: "Procurement and management of office stationery and office household supplies.",
    className: "card-atk",
    url: "https://atkrtk.agrofarm.id",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>`,
  },
  {
    name: "MyAsset",
    description: "Inventory, depreciation tracking, and company asset lifecycle management.",
    className: "card-asset",
    url: "https://myasset.agrofarm.id",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>`,
  },
  {
    name: "GA Management Services",
    description: "Monitoring of GA management activities at Head Office and Factory.",
    className: "card-itlog",
    url: "https://ga-services.agrofarm.id",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75h6a1.5 1.5 0 011.5 1.5v.75h.75A1.5 1.5 0 0118.75 7.5v12a1.5 1.5 0 01-1.5 1.5h-10.5a1.5 1.5 0 01-1.5-1.5v-12A1.5 1.5 0 016.75 6h.75v-.75a1.5 1.5 0 011.5-1.5zM9 9.75h6M9 13.5h6M9 17.25h3.75" />
    </svg>`,
  },
  {
    name: "Speak Your Mind",
    description: "Internal communication channel for feedback, ideas, and reporting.",
    className: "card-speak",
    url: "https://speak.agrofarm.local",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>`,
  },
  {
    name: "I-Net Monitoring",
    description: "Real-time monitoring of network status, bandwidth, and IT infrastructure stability.",
    className: "card-inet",
    url: "http://10.10.0.1:3012",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>`,
  },

  {
    name: "DriverTracker",
    description: "Monitoring of agrofarm vehicle usage.",
    className: "card-driver",
    url: "https://drivertracker.agrofarm.local",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 16.5V9.75l1.628-4.07A1.5 1.5 0 016.767 4.75h10.466a1.5 1.5 0 011.389.93l1.628 4.07v6.75m-16.5 0a1.5 1.5 0 001.5 1.5h.75a1.5 1.5 0 001.5-1.5m-3.75 0V15m16.5 1.5a1.5 1.5 0 01-1.5 1.5h-.75a1.5 1.5 0 01-1.5-1.5m3.75 0V15M3.75 9.75h16.5" />
    </svg>`,
  },
];

const grid = document.querySelector("#appsGrid");
const toast = document.querySelector("#toast");

function createAppCard(app) {
  return `
    <a class="app-card ${app.className}" href="${app.url}" target="_blank" rel="noopener noreferrer" data-app="${app.name}" aria-label="Buka aplikasi ${app.name}">
      <div class="icon-wrapper" aria-hidden="true">${app.icon}</div>
      <div class="card-content">
        <span class="app-icon" aria-hidden="true">${app.icon}</span>
        <h2>${app.name}</h2>
        <p>${app.description}</p>
      </div>
    </a>
  `;
}

function renderApps() {
  grid.innerHTML = apps.map(createAppCard).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

grid.addEventListener("click", (event) => {
  const link = event.target.closest("[data-app]");

  if (link) {
    showToast(`Membuka ${link.dataset.app}...`);
  }
});

renderApps();
