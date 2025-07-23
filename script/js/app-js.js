self.addEventListener("install", (e) => {
  console.log("Service Worker instalado.");
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker ativado.");
});

self.addEventListener("fetch", (event) => {
  // Aqui você pode personalizar o comportamento offline, se desejar
});


let deferredPrompt;
const installBtn = document.getElementById("add-button");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Usuário aceitou instalar");
      } else {
        console.log("Usuário recusou");
      }
      deferredPrompt = null;
    });
  }
});
