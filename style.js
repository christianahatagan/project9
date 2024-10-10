// JavaScript pentru a declanșa efectul fade-in la încărcarea imaginii
window.addEventListener('load', function() {
    const profileImage = document.querySelector('.hero img');
    profileImage.classList.add('show');
});

// Funcție care verifică dacă o secțiune este parțial vizibilă (activează mai devreme)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    // Adaugă un offset pentru a activa efectul mai devreme
    const offset = 150; // Poți ajusta această valoare pentru a controla când începe animația

    return (
        rect.top <= (window.innerHeight - offset) && // Partea de sus a secțiunii trebuie să fie în interiorul viewport-ului
        rect.bottom >= 0 // Se asigură că partea de jos nu este ieșită complet din vizibilitate
    );
}

// Funcție care adaugă clasa "show" pentru a activa animația
function checkFadeInSections() {
    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('show');
        }
    });
}

// Verifică secțiunile la încărcarea paginii și la scroll
window.addEventListener('scroll', checkFadeInSections);
window.addEventListener('load', checkFadeInSections);

// Funcționalitate buton de email
document.getElementById('sendEmailButton').addEventListener('click', function() {
    window.location.href = 'mailto:hataganchristiana@example.com?subject=Let\'s connect&body=Hi Christiana, %0D%0A%0D%0AI would like to get in touch with you regarding...';
});

// Funcționalitate buton de Whatsapp
document.getElementById('whatsappButton').addEventListener('click', function() {
    window.location.href = 'https://wa.me/40712345678?text=Hi%20Christiana!%20I%20would%20like%20to%20get%20in%20touch%20regarding%20a%20project.';
});

// Adaugă clasa "show" pentru toate elementele cu clasa "fade-in" la încărcarea paginii
window.addEventListener('load', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.classList.add('show');
    });
});


