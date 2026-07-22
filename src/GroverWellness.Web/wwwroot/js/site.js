// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".gw-nav-toggle");
    const navigation = document.querySelector(".gw-navigation");

    if (!toggle || !navigation) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isOpen =
            navigation.classList.toggle("gw-navigation-open");

        toggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });
});
