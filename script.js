const heartsContainer = document.querySelector('.hearts');

function createHeart(){

  const heart = document.createElement('div');

  heart.classList.add('heart');

  heart.innerHTML = '💖';

  heart.style.left = Math.random() * 100 + 'vw';

  heart.style.fontSize = Math.random() * 25 + 20 + 'px';

  heart.style.animationDuration = Math.random() * 3 + 5 + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  },8000);
}

setInterval(createHeart,300);