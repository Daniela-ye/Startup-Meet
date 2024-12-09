document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerLink = document.getElementById('registerLink');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const registerModal = document.getElementById('registerModal');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeButtons = document.querySelectorAll('.close');

    // Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple authentication (replace with proper backend authentication)
        if (username && password === '123') {
            window.location.href = 'dashboard.html';
        } else {
            alert('Credenciales incorrectas. Usa cualquier usuario con contraseña 123');
        }
    });

    // Modal Open Functions
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'block';
    });

    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        forgotPasswordModal.style.display = 'block';
    });

    // Close Modal Functions
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            registerModal.style.display = 'none';
            forgotPasswordModal.style.display = 'none';
        });
    });

    // Close modal if clicked outside
    window.addEventListener('click', (e) => {
        if (e.target === registerModal) {
            registerModal.style.display = 'none';
        }
        if (e.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });

    // Registration Form
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Registro exitoso. Por favor inicia sesión.');
        registerModal.style.display = 'none';
    });

    // Forgot Password Form
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    forgotPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Se han enviado instrucciones de recuperación a tu correo.');
        forgotPasswordModal.style.display = 'none';
    });

    // Ideas Page Interactions
    const ideaForm = document.getElementById('ideaForm');
    if (ideaForm) {
        ideaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Tu idea ha sido publicada exitosamente!');
            ideaForm.reset();
        });
    }

    // Presentaciones Page Interactions
    const presentacionForm = document.getElementById('presentacionForm');
    if (presentacionForm) {
        presentacionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Presentación guardada y lista para compartir.');
            presentacionForm.reset();
        });

        const templateCards = document.querySelectorAll('.template-card');
        templateCards.forEach(card => {
            card.addEventListener('click', () => {
                templateCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });
    }

    // Préstamos y Políticas Page Interactions
    const financiamientoForm = document.getElementById('financiamientoForm');
    if (financiamientoForm) {
        financiamientoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Solicitud de financiamiento enviada. Pronto nos pondremos en contacto.');
            financiamientoForm.reset();
        });

        const politicaHeaders = document.querySelectorAll('.politica-header');
        politicaHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const toggleIcon = header.querySelector('.toggle-icon');
                
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
                toggleIcon.textContent = content.style.display === 'block' ? '-' : '+';
            });
        });
    }
});
