// background
const top_part = document.querySelector(".top");
const bg = document.querySelector(".bg");
const topHeight = top_part.offsetHeight;

window.addEventListener("scroll", () => {
    if (window.scrollY >= top_part.offsetTop + topHeight) {
        bg.style.top = "0px";
        bg.style.position = "fixed";
    } else {
        bg.style.top = topHeight + "px";
        bg.style.position = "absolute";
    }
});

// videos carousel
document.querySelectorAll('.videos_carousel').forEach(carousel => {
    const items = carousel.querySelectorAll('.videos_card');
    const buttons = carousel.parentElement.querySelectorAll('.videos_carousel_btn');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('videos_card_active'));
            buttons.forEach(btn => btn.classList.remove('videos_carousel_btn_active'));

            items[index].classList.add('videos_card_active');
            button.classList.add('videos_carousel_btn_active');
        });
    });
});