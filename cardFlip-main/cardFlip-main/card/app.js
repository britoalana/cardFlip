const likeButton = document.getElementById('like');
const likeImage = document.getElementById('likeImage');
let isLiked = false;

likeButton.addEventListener('click', () => {
    isLiked = !isLiked;

    if (isLiked) {
        likeButton.style.borderColor = 'red';
        likeImage.src = "./img/gostar (1).png";
    }


})
const likeCount = document.getElementById('likeCount');

let counter = 0;
likeButton.addEventListener('click', () => {
    counter++;
    likeCount.textContent = counter;
});
