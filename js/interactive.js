/**
 * interactive.js - Interactive features for Práctica 4.8
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reloj Digital
    const clockElement = document.getElementById('digital-clock');
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clockElement.textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Búsqueda Dinámica en la tabla
    const searchInput = document.getElementById('table-search');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('#ranking-table tbody tr');

        rows.forEach(row => {
            const gameName = row.dataset.name.toLowerCase();
            if (gameName.includes(term)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // 3. Selector de Color para la tabla
    const colorPicker = document.getElementById('table-color-picker');
    colorPicker.addEventListener('input', (e) => {
        const color = e.target.value;
        const table = document.getElementById('ranking-table');
        if (table) {
            // Seleccionamos las cabeceras para cambiar su fondo
            const headers = table.querySelectorAll('thead th');
            headers.forEach(th => {
                th.style.setProperty('background-color', color, 'important');
            });
            // También actualizamos el borde superior si existe en el CSS
            table.querySelector('thead').style.borderTopColor = color;
        }
    });

    // 4. Interactividad con imágenes del carrusel (Agrandar al clic)
    const carouselImages = document.querySelectorAll('.galeria-img');
    carouselImages.forEach(img => {
        img.addEventListener('click', () => {
            if (img.style.transform === 'scale(1.2)') {
                img.style.transform = 'scale(1)';
                img.style.zIndex = '1';
            } else {
                img.style.transform = 'scale(1.2)';
                img.style.zIndex = '1000';
                img.style.transition = 'transform 0.3s ease';
            }
        });
    });

    // 5. Botón para agrandar/reducir la imagen del carrusel
    const toggleZoomBtn = document.getElementById('toggle-carousel-zoom');

    toggleZoomBtn.addEventListener('click', () => {
        const activeImg = document.querySelector('.carousel-item.active img');
        if (activeImg) {
            if (activeImg.style.transform === 'scale(1.2)') {
                activeImg.style.transform = 'scale(1)';
                activeImg.style.zIndex = '1';
            } else {
                activeImg.style.transform = 'scale(1.2)';
                activeImg.style.zIndex = '1000';
                activeImg.style.transition = 'transform 0.3s ease';
            }
        }
    });

    // 6. Elementos adicionales propios (Scroll Progress Bar)
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = '#00d2ff';
    progressBar.style.zIndex = '9999';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // 7. Saludo dinámico basado en la hora
    const footer = document.querySelector('footer .container');
    const greeting = document.createElement('p');
    greeting.className = 'text-info mt-2';
    const hour = new Date().getHours();
    let text = '';
    if (hour >= 6 && hour < 12) text = '¡Buenos días, gamer!';
    else if (hour >= 12 && hour < 20) text = '¡Buenas tardes, gamer!';
    else text = '¡Buenas noches, gamer!';

    greeting.textContent = text;
    footer.prepend(greeting);
});
