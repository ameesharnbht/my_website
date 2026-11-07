
        const menuToggle = document.querySelector('.menu-toggle');
        const navigation = document.querySelector('#primary-navigation');

        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
            navigation.classList.toggle('is-open', !isOpen);
        });

        navigation.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
                navigation.classList.remove('is-open');
            }
        });

        document.querySelector('#contact-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const formData = new FormData(form);
            const subject = `Portfolio message from ${formData.get('name')}`;
            const body = `${formData.get('message')}\n\nFrom: ${formData.get('name')} (${formData.get('email')})`;
            const emailLink = `mailto:ameesharnbht@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            document.querySelector('#form-note').textContent = 'Your email app should open with the message. Send it there to complete delivery.';
            window.location.href = emailLink;
        });

        document.querySelector('#year').textContent = new Date().getFullYear();