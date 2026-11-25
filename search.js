const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let s = searchInput.value.toLowerCase().trim();


    if (s === "") {

        alert("Please enter something to search.");

    }

    else if (s.includes("dance training")) {

        window.location.href = "dance-training.html";

    }

    else if (s.includes("dance classes")) {

        window.location.href = "dance-classes.html";

    }

    else if (s.includes("practice")) {

        window.location.href = "practice.html";

    }

    else if (s.includes("book")) {

        window.location.href = "book-now.html";

    }

    else if (s.includes("service")) {

        window.location.href = "services.html";

    }

    else if (s.includes("about")) {

        window.location.href = "about.html";

    }

    else if (s.includes("background")) {

        window.location.href = "background.html";

    }

    else if (s.includes("contact")) {

        window.location.href = "contact.html";

    }

    else if (s.includes("home")) {

        window.location.href = "home.html";

    }

    else {

        alert("Page not found.");

    }

});