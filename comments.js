// Get HTML elements
const commentForm = document.getElementById("commentForm");
const commentName = document.getElementById("commentName");
const commentText = document.getElementById("commentText");
const commentList = document.getElementById("commentList");

// Load saved comments
let comments = JSON.parse(localStorage.getItem("comments")) || [];

// Display comments
function showComments() {
    commentList.innerHTML = "";

    comments.forEach(function (c) {
        const div = document.createElement("div");
        div.className = "comment";

        const name = document.createElement("strong");
        name.textContent = c.name;

        const text = document.createElement("p");
        text.textContent = c.text;

        div.appendChild(name);
        div.appendChild(text);
        commentList.appendChild(div);
    });
}

// Submit a new comment
if (commentForm) {
    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = commentName.value.trim();
        const text = commentText.value.trim();

        if (name === "" || text === "") {
            alert("Please enter your name and comment.");
            return;
        }

        comments.push({
            name: name,
            text: text
        });

        // Save comments
        localStorage.setItem("comments", JSON.stringify(comments));

        // Clear form
        commentForm.reset();

        // Refresh comment list
        showComments();
    });
}