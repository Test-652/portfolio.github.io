// ===========================================================================menu mobile===========================================================================================

import toggleMenu from "./menu_mobile.js";

toggleMenu('.links', '.btn-toggle', '.links a');

// ============================================================================contact form========================================================================================

const _contactForm = document.getElementById('contact_form');

_contactForm.addEventListener('submit', e => {
    e.preventDefault();


        fetch('https://formsubmit.co/ajax/abcdefghijklmnnopq215@gmail.com', {
            method: 'POST',
            body: new FormData(_contactForm)
        })

        .then(res => (res.ok) ? res.json() : Promise.reject(res))

        .then(() => {
            e.target.reset();;
            document.querySelector('#thanks').classList.add('msg-active');

            setTimeout(() => {
                document.querySelector('#thanks').classList.remove('msg-active');
            }, 6000);
        })

        .catch(err => {
            console.log(err);
        });
});