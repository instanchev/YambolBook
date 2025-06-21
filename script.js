// public/js/script.js

document.addEventListener("DOMContentLoaded", function() {
    // Ако има някакви събития, които трябва да се изпълнят при зареждането на страницата, тук можем да ги добавим

    // Пример за анимация на бутоните
    const ctaButtons = document.querySelectorAll('.cta-btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', function() {
            button.style.transform = 'scale(1)';
        });
    });

    // Може да добавим още JavaScript функционалности тук
});
