document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("navbarToggle").addEventListener("click", function() {
        var navbarCollapse = document.getElementById("navbarCollapse");
        navbarCollapse.classList.toggle("show"); // Добавляем или убираем класс 'show'
    });
});
