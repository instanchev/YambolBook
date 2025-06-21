// public/js/script.js

document.addEventListener("DOMContentLoaded", function () {
    // Публикуване на пост
    const postButton = document.querySelector(".post-form button");
    const postTextArea = document.querySelector(".post-form textarea");
    
    postButton.addEventListener("click", function () {
        const postContent = postTextArea.value.trim();

        if (postContent) {
            const postContainer = document.querySelector(".posts");
            const newPost = document.createElement("div");
            newPost.classList.add("post");

            newPost.innerHTML = `
                <div class="post-header">
                    <img src="https://via.placeholder.com/40" alt="User" class="post-avatar">
                    <span class="post-user-name">Иван Петров</span>
                </div>
                <div class="post-content">
                    <p>${postContent}</p>
                </div>
                <div class="post-footer">
                    <button>Харесвам</button>
                    <button>Коментари</button>
                </div>
            `;

            postContainer.prepend(newPost);
            postTextArea.value = "";
        } else {
            alert("Моля, въведете съдържание!");
        }
    });
});
