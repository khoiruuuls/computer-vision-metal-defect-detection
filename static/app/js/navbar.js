document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL
    var currentUrl = window.location.pathname;

    // Remove "active" class from all list items
    var listItems = document.querySelectorAll(".nav-item");
    listItems.forEach(function (item) {
        item.classList.remove("active");
    });

    // Add "active" class to the corresponding list item based on the URL
    if (currentUrl === "/teams") {
        document.getElementById("team").classList.add("active");
    } else if (currentUrl === "/") {
        document.getElementById("home-link").classList.add("active");
    } else if (currentUrl === "/abouts") {
        document.getElementById("about").classList.add("active");
    }
});
