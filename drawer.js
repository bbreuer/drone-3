document.addEventListener('DOMContentLoaded', function() {
    const drawerButtons = document.querySelectorAll('[data-drawer-target]');
    drawerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-drawer-target');
            const drawer = document.getElementById(target);
            drawer.classList.toggle('-translate-x-full');
        });
    });

    const closeButtons = document.querySelectorAll('[data-drawer-hide]');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-drawer-hide');
            const drawer = document.getElementById(target);
            drawer.classList.add('-translate-x-full');
        });
    });
});