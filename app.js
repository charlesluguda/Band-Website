
    document.addEventListener('DOMContentLoaded', function () {
        const menuIcon = document.querySelector('.material-symbols-outlined');
        const navbarList = document.querySelector('.navbar ul');

        menuIcon.addEventListener('click', function () {
            navbarList.classList.toggle('open');
        });
    });
