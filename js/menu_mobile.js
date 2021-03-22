export default function toggleMenu(menu, toggle, links) {
    const _menu = document.querySelector(menu),
        _toggle = document.querySelector(toggle),
        _links = document.querySelectorAll(links);

    window.addEventListener('click', e => {
        if (e.target === _toggle) {
            _menu.classList.toggle('open');
            e.target.firstElementChild.classList.toggle('none');
            e.target.lastElementChild.classList.toggle('none');
        };

        _links.forEach(i => {
            if (e.target === i) {
                _menu.classList.remove('open');
                _toggle.lastElementChild.classList.add('none');
                _toggle.firstElementChild.classList.remove('none');
            };
        });

        if (e.target === document.documentElement) {
            _menu.classList.remove('open');
            _toggle.lastElementChild.classList.add('none');
            _toggle.firstElementChild.classList.remove('none');
        };
    });
};