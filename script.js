

window.addEventListener("DOMContentLoaded", () => {
  geceUyarısı();
  glitchEfekti();
  setupMouseEffect();
  hackerDususEfekti();
  terminalMesaj();
  konsolMesaj();
  selamla();
  scrollToTopButonu();
  kartHoverEfekti();
  bildirimUyarısı();
  temaDurumunuYukle();
});

// Gece uyarısı
function geceUyarısı() {
  const saat = new Date().getHours();
  if (saat >= 0 && saat < 6) {
    setTimeout(() => alert("⚠️ Gece çalışmak risklidir. Dinlen Komutan!"), 2000);
  }
}

// Glitch tipi yazı efekti
function glitchEfekti() {
  const glitch = document.querySelector('.glitch-text');
  if (glitch) {
    const text = glitch.textContent;
    glitch.textContent = "";
    let i = 0;
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.animation = "blink 1s infinite";
    glitch.appendChild(cursor);
    function yaz() {
      if (i < text.length) {
        glitch.insertBefore(document.createTextNode(text.charAt(i)), cursor);
        playSound("type");
        i++;
        setTimeout(yaz, 60);
      }
    }
    yaz();
  }
}

// Hacker yeşil düşüş efekti
function hackerDususEfekti() {
  setInterval(() => {
    const span = document.createElement("span");
    span.textContent = Math.random() > 0.5 ? "0" : "1";
    span.style.position = "fixed";
    span.style.top = `${Math.random() * 100}vh`;
    span.style.left = `${Math.random() * 100}vw`;
    span.style.color = "#0f0";
    span.style.opacity = 0.5;
    span.style.fontFamily = "monospace";
    span.style.zIndex = 0;
    document.body.appendChild(span);
    setTimeout(() => span.remove(), 1000);
  }, 200);
}

// Terminal mesajı
function terminalMesaj() {
  const terminal = document.createElement("div");
  terminal.textContent = "Sistem başlatılıyor... Bekleyin.";
  terminal.style.position = "fixed";
  terminal.style.top = "50%";
  terminal.style.left = "50%";
  terminal.style.transform = "translate(-50%, -50%)";
  terminal.style.color = "lime";
  terminal.style.background = "black";
  terminal.style.padding = "20px";
  terminal.style.zIndex = "9999";
  terminal.style.fontFamily = "monospace";
  document.body.appendChild(terminal);
  setTimeout(() => terminal.remove(), 3000);
}

// Konsola mesaj
function konsolMesaj() {
  console.log("%cSina burada. Kodlar çalışıyor 💻", "color:lime; font-size:16px;");
}

// Selamlama
function selamla() {
  const saat = new Date().getHours();
  let selam = "Merhaba";
  if (saat < 12) selam = "Günaydın";
  else if (saat < 18) selam = "İyi günler";
  else selam = "İyi akşamlar";
  console.log(`%c${selam}, Komutan.`, "color:#58a6ff; font-weight:bold;");
}

// Yukarı çıkma butonu
function scrollToTopButonu() {
  const btn = document.createElement("button");
  btn.textContent = "⬆️";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px";
  btn.style.display = "none";
  btn.style.zIndex = "999";
  btn.style.fontSize = "20px";
  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.appendChild(btn);
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 100 ? "block" : "none";
  });
}

// Kart hover efekti
function kartHoverEfekti() {
  const kartlar = document.querySelectorAll("section li");
  kartlar.forEach(kart => {
    kart.style.transition = "transform 0.3s ease";
    kart.addEventListener("mouseover", () => kart.style.transform = "scale(1.05)");
    kart.addEventListener("mouseout", () => kart.style.transform = "scale(1)");
  });
}

// Ses oynatıcı
function playSound(type) {
  const kaynak = {
    type: "assets/sound/type.wav",
    open: "assets/sound/open.wav",
    close: "assets/sound/close.wav"
  };
  const audio = new Audio(kaynak[type] || kaynak.type);
  audio.volume = 0.3;
  audio.play();
}

// Fare halkası
function setupMouseEffect() {
  const circle = document.createElement("div");
  circle.style.position = "fixed";
  circle.style.width = "20px";
  circle.style.height = "20px";
  circle.style.borderRadius = "50%";
  circle.style.background = "rgba(0,255,255,0.3)";
  circle.style.pointerEvents = "none";
  circle.style.zIndex = "9999";
  document.body.appendChild(circle);
  document.addEventListener("mousemove", (e) => {
    circle.style.left = `${e.pageX - 10}px`;
    circle.style.top = `${e.pageY - 10}px`;
  });
}

// Tema geçişi
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// Tema geri yükle
function temaDurumunuYukle() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}

// Mobil uyarı bildirimi
function bildirimUyarısı() {
  if (/Mobil|Android/i.test(navigator.userAgent)) {
    console.log("%c📱 Mobil cihazda görünüm aktif.", "color:orange;");
  }
}
