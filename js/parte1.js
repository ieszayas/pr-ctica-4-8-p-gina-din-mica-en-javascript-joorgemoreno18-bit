// Función para cambiar entre tema claro y oscuro
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const icon = toggleButton.querySelector('i');

    // Función para actualizar el botón
    const updateButton = (theme) => {
        if (theme === 'dark') {
            toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i> Tema Oscuro';
        } else {
            toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i> Tema Claro';
        }
    };

    // Cargar tema desde localStorage o usar 'dark' por defecto
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-bs-theme', savedTheme);
    updateButton(savedTheme);

    // Evento de clic
    toggleButton.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButton(newTheme);
    });

    // Evento para borrar formulario
    const clearFormButton = document.getElementById('clear-form');
    clearFormButton.addEventListener('click', () => {
        document.getElementById('newsletter-form').reset();
        const toast = new bootstrap.Toast(document.getElementById('clearToast'));
        toast.show();
    });

    // Validación del formulario al enviar
    const form = document.getElementById('newsletter-form');
    form.addEventListener('submit', (e) => {
        let errors = [];

        // 1. Validar que el nombre solo contenga letras y espacios
        const nombre = document.getElementById('nombre').value.trim();
        if (nombre && !/^[a-zA-Z\s]+$/.test(nombre)) {
            errors.push('El nombre de usuario solo puede contener letras y espacios.');
        }

        // 2. Verificar que al menos un checkbox esté seleccionado
        const checkboxes = document.querySelectorAll('input[name="intereses"]:checked');
        if (checkboxes.length === 0) {
            errors.push('Debe seleccionar al menos un interés.');
        }

        // 3. Validar rango de fechas (entre 1900 y 2010)
        const fecha = document.getElementById('fecha-nacimiento').value;
        if (fecha) {
            const date = new Date(fecha);
            const minDate = new Date('1900-01-01');
            const maxDate = new Date('2010-12-31');
            if (date < minDate || date > maxDate) {
                errors.push('La fecha de nacimiento debe estar entre 1900 y 2010.');
            }
        } else {
            errors.push('Debe ingresar una fecha de nacimiento.');
        }

        if (errors.length > 0) {
            e.preventDefault();
            // Mostrar errores en Toast
            const toastBody = document.querySelector('#errorToast .toast-body');
            toastBody.innerHTML = errors.join('<br>');
            const toast = new bootstrap.Toast(document.getElementById('errorToast'));
            toast.show();
        } else {
            e.preventDefault();
            
            // Parte 2: Crear objeto y guardar en array
            const formData = {
                usuario: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                plataforma: document.getElementById('plataforma').value,
                intereses: Array.from(checkboxes).map(cb => cb.id),
                fechaNacimiento: fecha
            };
            
            if (!window.usuariosRegistrados) window.usuariosRegistrados = [];
            window.usuariosRegistrados.push(formData);
            console.table(window.usuariosRegistrados);

            // Mostrar éxito en Toast
            const successToast = new bootstrap.Toast(document.getElementById('successToast'), {
                delay: 4000
            });
            successToast.show();
        }
    });
});