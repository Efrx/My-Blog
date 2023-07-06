document.addEventListener('DOMContentLoaded', () => {
    // menu nav button
    const navButton = document.querySelector('.nav-button');
    const menuContainer = document.querySelector('.nav--menu-mobile');

    // aqui se le activa una clase 'active' al elemento target...
    function activeStattus(prefix, target) {
        // si no solo activa o desactiva...
        let active = '-active';
        prefix = prefix + active;
        target.classList.toggle(prefix);
    }

    navButton.addEventListener('click', (e) => {
        let prefix =  e.target.classList[0];
        activeStattus(prefix,e.target);
        menuContainer.classList.toggle('open');
    });
});

// button-scroll
// e.stopPropagation();
// console.log('');
