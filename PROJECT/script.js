// Inisialisasi AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Durasi animasi
        easing: 'ease-in-out', // Efek transisi
        once: false, // Animasi diulang
        mirror: true // Animasi saat elemen keluar layar
    });
});

// Smooth Scroll untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Navbar Shadow saat Scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-sm");
    } else {
        navbar.classList.remove("shadow-sm");
    }
});
function validateLoginForm(event) {
    event.preventDefault(); // Mencegah form submit

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Cek apakah email dan password sudah diisi
    if (email === "" || password === "") {
        document.getElementById('error-message').innerText = "Semua kolom harus diisi!";
        document.getElementById('error-message').style.display = "block";
        return false;
    }

    // Simulasi login dengan validasi email dan password
    if (email === 'admin@domain.com' && password === 'password123') {
        window.location.href = 'dashboard.html'; // Redirect ke dashboard
    } else {
        document.getElementById('error-message').innerText = "Nama pengguna atau password salah!";
        document.getElementById('error-message').style.display = "block";
    }

    return false;
}
function validateBookingForm(event) {
    event.preventDefault(); // Mencegah form untuk di-submit secara langsung

    // Ambil nilai inputan
    const sportType = document.getElementById('sportType').value;
    const bookingTime = document.getElementById('bookingTime').value;
    const name = document.getElementById('name').value;

    // Validasi input form
    if (!sportType || !bookingTime || !name) {
        document.getElementById('error-message').innerText = "Semua kolom harus diisi!";
        document.getElementById('error-message').style.display = "block";
        return false;
    }

    // Simulasi proses pemesanan yang berhasil
    alert('Pemesanan berhasil! Lapangan: ' + sportType + '\nNama: ' + name + '\nWaktu: ' + bookingTime);
    return true;
}
// Fungsi untuk menambahkan atau menghapus kelas "scrolled"
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
