

//line-clamp untuk memotong teks
document.querySelectorAll(".clampTextButton").forEach(button => {
    button.addEventListener("click", function () {
        const textElement = this.previousElementSibling; // Ambil paragraf di atas tombol
        if (textElement.classList.contains("line-clamp-3")) {
            textElement.classList.remove("line-clamp-3");
            this.textContent = "Lihat Lebih Sedikit";
        } else {
            textElement.classList.add("line-clamp-3");
            this.textContent = "Lihat Selengkapnya";
        }
    });
});

// Toggle mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});
