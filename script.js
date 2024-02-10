document.getElementById('yesButton').addEventListener('click', function() {
    const images = ["src/2.jpg"];
    const mainImage = document.getElementById('mainImage');
    const currentImage = mainImage.src.split('/').pop();
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[nextIndex];

    const anim = document.getElementById("mainImage");
    anim.style.animation = "anim2 1s ease-in-out forwards"

    const loveMessage = document.createElement('div');
    loveMessage.textContent = "Your potential is limitless. Don't give up.";
    loveMessage.className = 'love-message';

    document.body.appendChild(loveMessage); 

    setTimeout(() => {
        loveMessage.remove();
    }, 3000);
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = this;
    const newX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const newY = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';

    const images2 = ["src/3.jpg"];
    const mainImage = document.getElementById('mainImage');
    const currentImage = mainImage.src.split('/').pop(); 
    const currentIndex = images2.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images2.length;
    mainImage.src = images2[nextIndex];

    const anim = document.getElementById("mainImage");
    anim.style.animation = "fadeIn 0.5s ease-in-out forwards"
});

function createHeart() {
    const heart = document.createElement('div');

    heart.className = 'heart';

    const size = Math.random() * (60 - 20) + 20;

    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = Math.random() * (window.innerWidth - size) + 'px';
    heart.style.top = Math.random() * (window.innerHeight - size) + 'px';
    heart.style.position = 'absolute';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';

    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

document.addEventListener('mousemove', (event) => {
    const heartIcon = document.createElement('div');

    heartIcon.className = 'heart-icon';

    document.body.appendChild(heartIcon);

    heartIcon.style.left = `${event.pageX}px`;
    heartIcon.style.top = `${event.pageY}px`;

    setTimeout(() => {
        heartIcon.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0)`;
    }, 0);

    setTimeout(() => {
        heartIcon.remove();
    }, 2000); 
});

function updateCountdown() {
    const now = new Date();
    const nextValentinesDay = new Date(now.getFullYear(), 1, 14); 

    if (now > nextValentinesDay) {
        nextValentinesDay.setFullYear(nextValentinesDay.getFullYear() + 1);
    }

    let diff = nextValentinesDay - now;

    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    let seconds = Math.floor((diff / 1000) % 60);
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (seconds < 10){
        seconds += 10
    }
    if (minutes < 10){
        minutes += 10
    }
    if (hours < 10){
        hours += 10
    }
    if (days < 10){
        days += 10
    }

    document.getElementById('countdown').innerText = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

function calculateLove() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();

    if (name1 === "" && name2 === "") {
        document.getElementById('loveScore').innerText = "Enter names :c";
    } 
    else {
        const lovePercentage = Math.floor(Math.random() * 101);
        document.getElementById('loveScore').innerText = `Your love score is: ${lovePercentage}%`;
    }
}

window.onload = updateCountdown;
setInterval(createHeart, 300);
setInterval(updateCountdown, 1000);