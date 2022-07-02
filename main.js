// execute script after page load


window.onload = function herald_fn() {
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event) {
        collapse.classList.toggle('active')

    });

    //  mansory js

    let grid = document.querySelector("#site-main .recent-work-area .images-flex");

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 50,
        fitWidth: true
    });

    var rellax = new Rellax('.rellax', {
        center: true
    })
}