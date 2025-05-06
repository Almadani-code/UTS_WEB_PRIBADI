// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validasi sederhana
    if (!name || !email || !message) {
      alert("Harap isi semua kolom sebelum mengirim pesan.");
      return;
    }

    // Tampilkan notifikasi berhasil
    alert("Terima kasih, pesan Anda telah dikirim!");

    // Reset form
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const toggleBtn = document.getElementById("toggleBtn");
  const sections = document.querySelectorAll("section");

  // Fungsi kirim pesan
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Harap isi semua kolom sebelum mengirim pesan.");
      return;
    }

    alert("Terima kasih, pesan Anda telah dikirim!");
    form.reset();
  });

  // Fungsi toggle sembunyikan/tampilkan semua section
  let hidden = false;

  toggleBtn.addEventListener("click", function () {
    sections.forEach(section => {
      section.style.display = hidden ? "block" : "none";
    });

    // Ubah ikon
    toggleBtn.innerHTML = hidden
      ? '<i class="fas fa-eye"></i>'
      : '<i class="fas fa-eye-slash"></i>';

    hidden = !hidden;
  });
});
