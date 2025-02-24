document.addEventListener("DOMContentLoaded", function () {

    const navbarToggle = document.getElementById("navbarToggle");
    const navbarCollapse = document.getElementById("navbarCollapse");

    if (!navbarToggle || !navbarCollapse) {
        return;
    }

    navbarToggle.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });
});
